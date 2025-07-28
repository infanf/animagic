import React, { useState, useEffect } from 'react';
import { eventService } from '../services/eventService';
import { Event } from '../models/types';
import { formatTime, formatDate, getDayOfWeek } from '../utils/dateUtils';
import '../styles/ScheduleGrid.css';
import StarIcon from '@mui/icons-material/Star';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import IconButton from '@mui/material/IconButton';
import { scheduleService } from '../services/scheduleService';
import { getCategoryColor } from '../styles/categoryColors';

interface TimeSlot {
  start: Date;
  end: Date;
}

const DATES = ['2025-08-01', '2025-08-02', '2025-08-03'];

function getTimeSlots(
  start: Date,
  end: Date,
  intervalMinutes: number
): TimeSlot[] {
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
  if (
    d.getMinutes() % 15 !== 0 ||
    d.getSeconds() !== 0 ||
    d.getMilliseconds() !== 0
  ) {
    d.setMinutes(Math.ceil(d.getMinutes() / 15) * 15, 0, 0);
  }
  return d;
}

// Hilfsfunktion: Events für einen Tag inkl. Nach-Mitternacht-Events (bis 05:00 Uhr) filtern
function getEventsForFestivalDay(
  allEvents: Event[],
  selectedDate: string
): Event[] {
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

function getQuarterHourSlots(
  events: Event[],
  selectedDate: string
): TimeSlot[] {
  if (events.length === 0) {
    // Default: 10:00 bis 18:00 in 15-Minuten-Schritten
    const min = new Date(selectedDate + 'T10:00');
    const max = new Date(selectedDate + 'T18:00');
    return getTimeSlots(min, max, 15);
  }
  // Früheste Startzeit und späteste Endzeit bestimmen (mit Rundung)
  let min = floorToQuarterHour(
    new Date(Math.min(...events.map(e => new Date(e.startTime).getTime())))
  );
  let max = ceilToQuarterHour(
    new Date(Math.max(...events.map(e => new Date(e.endTime).getTime())))
  );
  // Maximal bis 05:00 Uhr am Folgetag
  const dayStart = new Date(selectedDate + 'T00:00');
  const cutoff = new Date(dayStart);
  cutoff.setDate(dayStart.getDate() + 1);
  cutoff.setHours(5, 0, 0, 0);
  if (max > cutoff) max = cutoff;
  return getTimeSlots(min, max, 15);
}

// Unused utility functions removed to fix lint errors
// These functions were defined but never used in the component

const ScheduleGrid = () => {
  const [selectedDate, setSelectedDate] = useState<string>(DATES[0]);
  const [events, setEvents] = useState<Event[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [userEventIds, setUserEventIds] = useState<string[]>([]);
  const [showOnlyFavorites, setShowOnlyFavorites] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const allEvents = await eventService.getAllEvents();
        // Events für den Festivaltag inkl. Nach-Mitternacht-Events filtern
        const filtered = getEventsForFestivalDay(allEvents, selectedDate);
        setEvents(filtered);
      } catch (err) {
        setEvents([]);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [selectedDate]);

  // Load user schedule on mount
  useEffect(() => {
    scheduleService.getUserSchedule().then(sch => setUserEventIds(sch.events));
  }, []);

  // Filter events based on favorites toggle
  const filteredEvents = React.useMemo(() => {
    if (!showOnlyFavorites) return events;
    return events.filter(event => userEventIds.includes(event.id));
  }, [events, userEventIds, showOnlyFavorites]);

  // Get time slots based on filtered events
  const displayedTimeSlots = React.useMemo(() => {
    return getQuarterHourSlots(
      showOnlyFavorites ? filteredEvents : events,
      selectedDate
    );
  }, [filteredEvents, events, selectedDate, showOnlyFavorites]);

  // Get unique locations from filtered events and sort according to fixed order
  const displayedLocations = React.useMemo(() => {
    const LOCATION_ORDER = [
      'Mozartsaal',
      'Musensaal',
      'Crunchyroll Cinema',
      'CineMagic 1',
      'CineMagic 2',
      'AnimagiC-Kino 1',
      'AnimagiC-Kino 2',
      'AnimagiC-Kino 3',
      'Ramen-Wok-Wok-Karaoke',
    ];

    const locs = new Set(events.map(e => e.location));
    const sortedLocs = Array.from(locs).sort((a, b) => {
      const aIndex = LOCATION_ORDER.indexOf(a);
      const bIndex = LOCATION_ORDER.indexOf(b);

      // If both locations are in the fixed order, sort by their position
      if (aIndex !== -1 && bIndex !== -1) return aIndex - bIndex;
      // If only a is in the fixed order, it comes first
      if (aIndex !== -1) return -1;
      // If only b is in the fixed order, it comes first
      if (bIndex !== -1) return 1;
      // If neither is in the fixed order, sort alphabetically
      return a.localeCompare(b);
    });

    return sortedLocs;
  }, [events]);

  // Handler für Zeitplan-Button
  const handleToggleEvent = async (eventId: string) => {
    if (userEventIds.includes(eventId)) {
      const sch = await scheduleService.removeEventFromSchedule(eventId);
      setUserEventIds(sch.events);
    } else {
      const sch = await scheduleService.addEventToSchedule(eventId);
      setUserEventIds(sch.events);
    }
  };

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
  const locationEventGrid: Record<
    string,
    { event: Event | null; rowSpan: number; renderCell: boolean }[]
  > = {};

  // Helper function to build grid for a location
  const buildLocationGrid = (location: string) => {
    const grid: {
      event: Event | null;
      rowSpan: number;
      renderCell: boolean;
    }[] = [];
    let currentSlotIndex = 0;
    while (currentSlotIndex < displayedTimeSlots.length) {
      // Finde Event, das in diesem Slot (nach Viertelstunden-Rundung) startet
      // eslint-disable-next-line no-loop-func
      const event = filteredEvents.find(
        e =>
          e.location === location &&
          eventStartsInSlotQuarter(e, displayedTimeSlots[currentSlotIndex])
      );
      if (event) {
        let span = getEventRowSpanQuarter(
          event,
          displayedTimeSlots.slice(currentSlotIndex)
        );
        if (!span || span < 1) span = 1; // Schutz gegen Endlosschleife
        grid.push({ event, rowSpan: span, renderCell: true });
        for (let i = 1; i < span; i++) {
          grid.push({ event: null, rowSpan: 0, renderCell: false });
        }
        currentSlotIndex += span;
      } else {
        grid.push({ event: null, rowSpan: 1, renderCell: true });
        currentSlotIndex++;
      }
    }
    while (grid.length < displayedTimeSlots.length) {
      grid.push({ event: null, rowSpan: 1, renderCell: true });
    }
    return grid;
  };

  displayedLocations.forEach(loc => {
    locationEventGrid[loc] = buildLocationGrid(loc);
  });

  // Calculate grid column template
  const gridColumnTemplate = `100px repeat(${displayedLocations.length}, minmax(180px, 1fr))`;

  // Calculate grid template rows for the schedule grid
  const gridTemplateRows = `auto repeat(${displayedTimeSlots.length}, 20px)`;

  return (
    <div>
      <div className="schedule-header-container">
        <h1>Kalenderübersicht</h1>
        <div className="favorites-filter">
          <label>
            <input
              type="checkbox"
              checked={showOnlyFavorites}
              onChange={e => setShowOnlyFavorites(e.target.checked)}
              style={{ marginRight: '8px' }}
            />
            Nur Favoriten anzeigen
          </label>
        </div>
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
      </div>
      <div className="schedule-grid-container">
        {loading ? (
          <div className="loading">Lade Veranstaltungen...</div>
        ) : (
          <div className="schedule-grid-wrapper">
            <div
              className="schedule-grid"
              style={
                {
                  '--time-slots': displayedTimeSlots.length,
                  '--locations': displayedLocations.length,
                  gridTemplateRows,
                  gridTemplateColumns: gridColumnTemplate,
                  minWidth: `${100 + displayedLocations.length * 180}px`,
                } as React.CSSProperties
              }
            >
              {/* Time column header */}
              <div className="schedule-header time-column-header">Zeit</div>

              {/* Location headers */}
              {displayedLocations.map((loc, locIdx) => (
                <div
                  key={`header-${loc}`}
                  className="schedule-header location-header"
                  style={{ gridColumn: locIdx + 2 }}
                >
                  {loc}
                </div>
              ))}

              {/* Time slots and events */}
              {displayedTimeSlots.map((slot, rowIdx) => (
                <React.Fragment key={`row-${rowIdx}`}>
                  {/* Time label */}
                  <div
                    className="time-slot time-slot-cell"
                    style={{
                      gridRow: rowIdx + 2,
                      gridColumn: 1,
                    }}
                  >
                    {slot.start.getMinutes() === 0
                      ? formatTime(slot.start.toISOString())
                      : ''}
                  </div>

                  {/* Event cells */}
                  {displayedLocations.map((loc, locIdx) => {
                    const cell = locationEventGrid[loc][rowIdx];
                    if (!cell.renderCell) return null;

                    if (cell.event && cell.rowSpan > 0) {
                      const event = cell.event;
                      const isInSchedule = userEventIds.includes(event.id);
                      const categoryColor = getCategoryColor(event.category);

                      return (
                        <div
                          key={`${loc}-${rowIdx}`}
                          className="event-cell"
                          style={{
                            gridRow: `${rowIdx + 2} / span ${cell.rowSpan}`,
                            gridColumn: locIdx + 2,
                            padding: '2px',
                          }}
                        >
                          <div
                            className="event-item"
                            style={{ background: categoryColor }}
                          >
                            <div className="event-header">
                              <strong className="event-title">
                                {event.title}
                              </strong>
                              <IconButton
                                size="small"
                                onClick={e => {
                                  e.stopPropagation();
                                  handleToggleEvent(event.id);
                                }}
                                aria-label="Zeitplan"
                                className="event-favorite-button"
                              >
                                {isInSchedule ? (
                                  <StarIcon color="warning" fontSize="small" />
                                ) : (
                                  <StarBorderIcon fontSize="small" />
                                )}
                              </IconButton>
                            </div>
                            <div className="event-time">
                              {formatTime(event.startTime)} -{' '}
                              {formatTime(event.endTime)}
                            </div>
                          </div>
                        </div>
                      );
                    } else if (cell.renderCell) {
                      // Empty cell
                      return (
                        <div
                          key={`${loc}-${rowIdx}`}
                          className="empty-cell"
                          style={{
                            gridRow: rowIdx + 2,
                            gridColumn: locIdx + 2,
                          }}
                        />
                      );
                    }
                    return null;
                  })}
                </React.Fragment>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ScheduleGrid;
