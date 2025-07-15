import React, { useState, useEffect } from 'react';
import { Box, Typography, CircularProgress, FormControl, InputLabel, Select, MenuItem, SelectChangeEvent } from '@mui/material';
import { Event } from '../models/types';
import EventCard from './EventCard';
import { scheduleService } from '../services/scheduleService';
import { groupEventsByDay, sortEventsByStartTime, getDayOfWeek, formatDate } from '../utils/dateUtils';

interface EventListProps {
  events: Event[];
  loading: boolean;
  title?: string;
}

const EventList: React.FC<EventListProps> = ({ events, loading, title }) => {
  const [userSchedule, setUserSchedule] = useState<string[]>([]);
  const [filter, setFilter] = useState<string>('all');
  const [filteredEvents, setFilteredEvents] = useState<Event[]>([]);
  
  // Load user schedule
  useEffect(() => {
    const loadSchedule = async () => {
      const schedule = await scheduleService.getUserSchedule();
      setUserSchedule(schedule.events);
    };
    
    loadSchedule();
  }, []);
  
  // Apply filters
  useEffect(() => {
    let result = [...events];
    
    if (filter !== 'all') {
      result = result.filter(event => event.category === filter);
    }
    
    setFilteredEvents(result);
  }, [events, filter]);
  
  // Handle adding event to schedule
  const handleAddToSchedule = async (eventId: string) => {
    await scheduleService.addEventToSchedule(eventId);
    setUserSchedule(prev => [...prev, eventId]);
  };
  
  // Handle removing event from schedule
  const handleRemoveFromSchedule = async (eventId: string) => {
    await scheduleService.removeEventFromSchedule(eventId);
    setUserSchedule(prev => prev.filter(id => id !== eventId));
  };
  
  // Handle filter change
  const handleFilterChange = (event: SelectChangeEvent) => {
    setFilter(event.target.value);
  };
  
  // Get unique categories for filter
  const categories = ['all', ...Array.from(new Set(events.map(event => event.category)))];
  
  // Group events by day
  const eventsByDay = groupEventsByDay(filteredEvents);
  const sortedDays = Object.keys(eventsByDay).sort();
  
  if (loading) {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center', p: 3 }}>
        <CircularProgress />
      </Box>
    );
  }
  
  if (filteredEvents.length === 0) {
    return (
      <Box sx={{ p: 2 }}>
        <Typography variant="h6" component="div" gutterBottom>
          {title || 'Veranstaltungen'}
        </Typography>
        
        <FormControl sx={{ mb: 2, minWidth: 200 }} size="small">
          <InputLabel id="category-filter-label">Kategorie</InputLabel>
          <Select
            labelId="category-filter-label"
            value={filter}
            label="Kategorie"
            onChange={handleFilterChange}
          >
            {categories.map((category) => (
              <MenuItem key={category} value={category}>
                {category === 'all' ? 'Alle Kategorien' : category}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        
        <Typography>Keine Veranstaltungen gefunden.</Typography>
      </Box>
    );
  }
  
  return (
    <Box sx={{ p: 2 }}>
      <Typography variant="h6" component="div" gutterBottom>
        {title || 'Veranstaltungen'}
      </Typography>
      
      <FormControl sx={{ mb: 2, minWidth: 200 }} size="small">
        <InputLabel id="category-filter-label">Kategorie</InputLabel>
        <Select
          labelId="category-filter-label"
          value={filter}
          label="Kategorie"
          onChange={handleFilterChange}
        >
          {categories.map((category) => (
            <MenuItem key={category} value={category}>
              {category === 'all' ? 'Alle Kategorien' : category}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      
      {sortedDays.map((day) => {
        const dayEvents = sortEventsByStartTime(eventsByDay[day]);
        const firstEvent = dayEvents[0];
        const dayLabel = `${getDayOfWeek(firstEvent.startTime)}, ${formatDate(firstEvent.startTime, 'dd.MM.yyyy')}`;
        
        return (
          <Box key={day} sx={{ mb: 4 }}>
            <Typography variant="h6" sx={{ mb: 2, borderBottom: '1px solid #eee', pb: 1 }}>
              {dayLabel}
            </Typography>
            
            {dayEvents.map((event) => (
              <EventCard
                key={event.id}
                event={event}
                isInSchedule={userSchedule.includes(event.id)}
                onAddToSchedule={handleAddToSchedule}
                onRemoveFromSchedule={handleRemoveFromSchedule}
              />
            ))}
          </Box>
        );
      })}
    </Box>
  );
};

export default EventList;
