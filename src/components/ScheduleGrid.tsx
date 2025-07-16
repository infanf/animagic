import React, { useState, useEffect } from 'react';
import { eventService } from '../services/eventService';
import { Event } from '../models/types';
import { formatTime, formatDate, getDayOfWeek } from '../utils/dateUtils';
import '../styles/LocationCalendar.css';

interface TimeSlot {
  start: Date;
  end: Date;
}

const DATES = ['2025-08-01', '2025-08-02', '2025-08-03'];
const SLOT_HEIGHT = 40; // px

function getTimeSlots(start: Date, end: Date, intervalMinutes: number): TimeSlot[] {
  const slots: TimeSlot[] = [];
  let current = new Date(start);
  while (current < end) {
    const slotEnd = new Date(current.getTime() + intervalMinutes * 60000);
    slots.push({ start: new Date(current), end: slotEnd });
    current = slotEnd;
  }
  return slots;
}

// Hilfsfunktionen für Viertelstunden-Rundung
function floorToQuarterHour(date: Date): Date {
  const d = new Date(date);
  d.setMinutes(Math.floor(d.getMinutes() / 15) * 15, 0, 0);
  return d;
}
function ceilToQuarterHour(date: Date): Date {
  const d = new Date(date);
  if (d.getMinutes() % 15 !== 0 || d.getSeconds() !== 0 || d.getMilliseconds() !== 0) {
    d.setMinutes(Math.ceil(d.getMinutes() / 15) * 15, 0, 0);
  }
  return d;
}

// Hilfsfunktion: Events für einen Tag inkl. Nach-Mitternacht-Events (bis 05:00 Uhr) filtern
function getEventsForFestivalDay(allEvents: Event[], selectedDate: string): Event[] {
  const dayStart = new Date(selectedDate + 'T00:00');
  const nextDay = new Date(dayStart);
  nextDay.setDate(dayStart.getDate() + 1);
  const cutoff = new Date(nextDay);
  cutoff.setHours(5, 0, 0, 0); // 05:00 Uhr am Folgetag

  return allEvents.filter(e => {
    const start = new Date(e.startTime);
    // Event startet am Tag zwischen 05:00 und 23:59
    if (start >= dayStart && start < nextDay) {
      if (start.getHours() < 5) {
        // 00:00 bis 04:59 -> NICHT anzeigen (nur beim Vortag)
        return false;
      }
      return true;
    }
    // Event startet nach Mitternacht bis 05:00 Uhr
    if (start >= nextDay && start < cutoff) {
      // Nur anzeigen, wenn der ausgewählte Tag der Vortag ist
      const eventDay = new Date(start);
      eventDay.setHours(0, 0, 0, 0);
      const prevDay = new Date(eventDay);
      prevDay.setDate(eventDay.getDate() - 1);
      return prevDay.getTime() === dayStart.getTime();
    }
    return false;
  });
}

function getQuarterHourSlots(events: Event[], selectedDate: string): TimeSlot[] {
  if (events.length === 0) {
    // Default: 10:00 bis 18:00 in 15-Minuten-Schritten
    const min = new Date(selectedDate + 'T10:00');
    const max = new Date(selectedDate + 'T18:00');
    return getTimeSlots(min, max, 15);
  }
  // Früheste Startzeit und späteste Endzeit bestimmen (mit Rundung)
  let min = floorToQuarterHour(new Date(Math.min(...events.map(e => new Date(e.startTime).getTime()))));
  let max = ceilToQuarterHour(new Date(Math.max(...events.map(e => new Date(e.endTime).getTime()))));
  // Maximal bis 05:00 Uhr am Folgetag
  const dayStart = new Date(selectedDate + 'T00:00');
  const cutoff = new Date(dayStart);
  cutoff.setDate(dayStart.getDate() + 1);
  cutoff.setHours(5, 0, 0, 0);
  if (max > cutoff) max = cutoff;
  return getTimeSlots(min, max, 15);
}

function eventOverlapsSlot(event: Event, slot: TimeSlot) {
  const eventStart = new Date(event.startTime);
  const eventEnd = new Date(event.endTime);
  return eventStart < slot.end && eventEnd > slot.start;
}

function eventStartsInSlot(event: Event, slot: TimeSlot) {
  const eventStart = new Date(event.startTime);
  return eventStart >= slot.start && eventStart < slot.end;
}

function getEventRowSpan(event: Event, slots: TimeSlot[]): number {
  const eventStart = new Date(event.startTime);
  const eventEnd = new Date(event.endTime);
  let count = 0;
  for (const slot of slots) {
    if (eventEnd <= slot.start) break;
    if (eventStart < slot.end && eventEnd > slot.start) count++;
    if (eventEnd <= slot.end) break;
  }
  return count;
}

// Hilfsfunktion: Zeit auf nächste Viertelstunde runden
function roundUpToNextQuarterHour(dateString: string): string {
  const date = new Date(dateString);
  let minutes = date.getMinutes();
  let add = 0;
  if (minutes % 15 !== 0) {
    add = 15 - (minutes % 15);
  }
  date.setMinutes(minutes + add, 0, 0);
  return formatTime(date.toISOString());
}

const ScheduleGrid: React.FC = () => {
  const [selectedDate, setSelectedDate] = useState<string>(DATES[0]);
  const [events, setEvents] = useState<Event[]>([]);
  const [locations, setLocations] = useState<string[]>([]);
  const [timeSlots, setTimeSlots] = useState<TimeSlot[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const allEvents = await eventService.getAllEvents();
        // Events für den Festivaltag inkl. Nach-Mitternacht-Events filtern
        const filtered = getEventsForFestivalDay(allEvents, selectedDate);
        setEvents(filtered);
        // Get all unique locations
        const locs = Array.from(new Set(filtered.map(e => e.location))).sort();
        setLocations(locs);
        // Viertelstunden-Slots berechnen (bis max. 05:00 Uhr)
        setTimeSlots(getQuarterHourSlots(filtered, selectedDate));
      } catch (err) {
        setEvents([]);
        setLocations([]);
        setTimeSlots([]);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [selectedDate]);

  // Anpassung der Event-zu-Slot-Logik:
  function eventStartsInSlotQuarter(event: Event, slot: TimeSlot) {
    // Event-Start auf vorherige Viertelstunde runden
    const eventStart = floorToQuarterHour(new Date(event.startTime));
    return eventStart.getTime() === slot.start.getTime();
  }
  function getEventRowSpanQuarter(event: Event, slots: TimeSlot[]): number {
    // Event-Start auf vorherige, Endzeit auf nächste Viertelstunde runden
    const eventStart = floorToQuarterHour(new Date(event.startTime));
    const eventEnd = ceilToQuarterHour(new Date(event.endTime));
    let count = 0;
    for (const slot of slots) {
      if (eventEnd <= slot.start) break;
      if (eventStart < slot.end && eventEnd > slot.start) count++;
      if (eventEnd <= slot.end) break;
    }
    return count;
  }

  // Für jede Location: Map von slotIndex -> {event, rowSpan, renderCell}
  const locationEventGrid: Record<string, { event: Event | null; rowSpan: number; renderCell: boolean }[]> = {};
  locations.forEach(loc => {
    const grid: { event: Event | null; rowSpan: number; renderCell: boolean }[] = [];
    let slotIdx = 0;
    while (slotIdx < timeSlots.length) {
      // Finde Event, das in diesem Slot (nach Viertelstunden-Rundung) startet
      const event = events.find(e => e.location === loc && eventStartsInSlotQuarter(e, timeSlots[slotIdx]));
      if (event) {
        let span = getEventRowSpanQuarter(event, timeSlots.slice(slotIdx));
        if (!span || span < 1) span = 1; // Schutz gegen Endlosschleife
        grid.push({ event, rowSpan: span, renderCell: true });
        for (let i = 1; i < span; i++) {
          grid.push({ event: null, rowSpan: 0, renderCell: false });
        }
        slotIdx += span;
      } else {
        grid.push({ event: null, rowSpan: 1, renderCell: true });
        slotIdx++;
      }
    }
    while (grid.length < timeSlots.length) {
      grid.push({ event: null, rowSpan: 1, renderCell: true });
    }
    locationEventGrid[loc] = grid;
  });

  return (
    <div className="location-calendar">
      <h1>Kalenderübersicht (Grid)</h1>
      <div className="date-selector">
        {DATES.map(date => (
          <button
            key={date}
            className={`date-button ${selectedDate === date ? 'active' : ''}`}
            onClick={() => setSelectedDate(date)}
          >
            {formatDate(date)} ({getDayOfWeek(date)})
          </button>
        ))}
      </div>
      {loading ? (
        <div className="loading">Lade Veranstaltungen...</div>
      ) : (
        <div className="schedule-grid-wrapper" style={{ overflowX: 'auto' }}>
          <table className="schedule-grid" style={{ borderCollapse: 'collapse', minWidth: '100%' }}>
            <thead>
              <tr>
                <th style={{ minWidth: 90, background: '#f5f5f5' }}>Zeit</th>
                {locations.map(loc => (
                  <th key={loc} style={{ minWidth: 180, background: '#f5f5f5' }}>{loc}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {timeSlots.map((slot, rowIdx) => (
                <tr key={rowIdx} style={{ height: SLOT_HEIGHT }}>
                  <td style={{ fontWeight: 500, background: '#fafafa', borderRight: '1px solid #eee', height: SLOT_HEIGHT }}>
                    {slot.start.getMinutes() === 0
                      ? formatTime(slot.start.toISOString())
                      : ''}
                  </td>
                  {locations.map(loc => {
                    const cell = locationEventGrid[loc][rowIdx];
                    if (!cell.renderCell) return null;
                    if (cell.event && cell.rowSpan > 0) {
                      return (
                        <td
                          key={loc + rowIdx}
                          rowSpan={cell.rowSpan}
                          style={{
                            verticalAlign: 'top',
                            border: '1px solid #eee',
                            
                            borderRadius: 4,
                            fontSize: 14,
                            height: SLOT_HEIGHT * cell.rowSpan,
                            padding: 0,
                          }}
                        >
                          <div style={{ width: 'calc(100% - 4px)', height: 'calc(100% - 4px)', padding: '10px 8px', margin: '2px', background: '#e3f2fd', borderRadius: 4, boxSizing: 'border-box' }}>
                            <strong>{cell.event.title}</strong><br />
                            <span style={{ fontSize: 12 }}>
                              {roundUpToNextQuarterHour(cell.event.startTime)} - {roundUpToNextQuarterHour(cell.event.endTime)}
                            </span>
                          </div>
                        </td>
                      );
                    } else {
                      // Leere Zelle
                      return (
                        <td key={loc + rowIdx} style={{ border: '1px solid #eee', height: SLOT_HEIGHT }}></td>
                      );
                    }
                  })}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default ScheduleGrid; 
