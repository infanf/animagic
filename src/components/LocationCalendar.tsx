import React, { useState, useEffect } from 'react';
import { Event } from '../models/types';
import { eventService } from '../services/eventService';
import { formatDate, getDayOfWeek, formatTime } from '../utils/dateUtils';
import '../styles/LocationCalendar.css';

interface LocationGroup {
  location: string;
  events: Event[];
}

const LocationCalendar: React.FC = () => {
  const [locationGroups, setLocationGroups] = useState<LocationGroup[]>([]);
  const [selectedDate, setSelectedDate] = useState<string>('2025-08-01');
  const [loading, setLoading] = useState<boolean>(true);

  const dates = ['2025-08-01', '2025-08-02', '2025-08-03'];

  useEffect(() => {
    const fetchEvents = async () => {
      setLoading(true);
      try {
        const allEvents = await eventService.getAllEvents();

        // Filter events for the selected date
        const filteredEvents = allEvents.filter(event => {
          const eventDate = event.startTime.split('T')[0];
          return eventDate === selectedDate;
        });

        // Group events by location
        const groupedByLocation: { [key: string]: Event[] } = {};

        filteredEvents.forEach(event => {
          if (!groupedByLocation[event.location]) {
            groupedByLocation[event.location] = [];
          }
          groupedByLocation[event.location].push(event);
        });

        // Sort events within each location by startTime
        Object.keys(groupedByLocation).forEach(location => {
          groupedByLocation[location].sort(
            (a, b) =>
              new Date(a.startTime).getTime() - new Date(b.startTime).getTime()
          );
        });

        // Convert to array of location groups
        const groups: LocationGroup[] = Object.keys(groupedByLocation)
          .sort() // Sort locations alphabetically
          .map(location => ({
            location,
            events: groupedByLocation[location],
          }));

        setLocationGroups(groups);
      } catch (error) {
        console.error('Error fetching events:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchEvents();
  }, [selectedDate]);

  return (
    <div className="location-calendar">
      <h1>AnimagiC 2025 Kalenderübersicht</h1>

      <div className="date-selector">
        {dates.map(date => (
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
        <div className="location-groups">
          {locationGroups.map(group => (
            <div key={group.location} className="location-group">
              <h2 className="location-title">{group.location}</h2>
              <div className="events-list">
                {group.events.map(event => (
                  <div key={event.id} className="event-card">
                    <div className="event-time">
                      {formatTime(event.startTime)} -{' '}
                      {formatTime(event.endTime)}
                    </div>
                    <div className="event-details">
                      <h3 className="event-title">{event.title}</h3>
                      <div className="event-category">{event.category}</div>
                      <p className="event-description">{event.description}</p>
                      {event.tags && event.tags.length > 0 && (
                        <div className="event-tags">
                          {event.tags.map(tag => (
                            <span key={tag} className="tag">
                              {tag}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default LocationCalendar;
