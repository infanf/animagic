import React, { useState, useEffect } from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { eventService } from '../services/eventService';
import { Event } from '../models/types';
import EventList from '../components/EventList';
import SearchBar from '../components/SearchBar';

const ProgramPage: React.FC = () => {
  const [events, setEvents] = useState<Event[]>([]);
  const [filteredEvents, setFilteredEvents] = useState<Event[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [searchQuery, setSearchQuery] = useState<string>('');

  // Load all events
  useEffect(() => {
    const loadEvents = async () => {
      try {
        setLoading(true);
        const allEvents = await eventService.getAllEvents();
        setEvents(allEvents);
        setFilteredEvents(allEvents);
      } catch (error) {
        console.error('Error loading events:', error);
      } finally {
        setLoading(false);
      }
    };

    loadEvents();
  }, []);

  // Handle search
  const handleSearch = async (query: string) => {
    setSearchQuery(query);

    if (!query.trim()) {
      setFilteredEvents(events);
      return;
    }

    try {
      setLoading(true);
      const searchResults = await eventService.searchEvents(query);
      setFilteredEvents(searchResults);
    } catch (error) {
      console.error('Error searching events:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container maxWidth="md">
      <Box sx={{ my: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Programm
        </Typography>
        <Typography variant="body1" color="text.secondary" paragraph>
          Hier findest du alle Veranstaltungen der Convention. Füge sie deinem
          persönlichen Zeitplan hinzu, um keine Veranstaltung zu verpassen.
        </Typography>

        <Paper sx={{ p: 2, mb: 3 }}>
          <SearchBar onSearch={handleSearch} />

          {searchQuery && (
            <Typography variant="body2" sx={{ mt: 1 }}>
              {filteredEvents.length} Ergebnisse für "{searchQuery}"
            </Typography>
          )}
        </Paper>

        <EventList
          events={filteredEvents}
          loading={loading}
          title={searchQuery ? 'Suchergebnisse' : 'Alle Veranstaltungen'}
        />
      </Box>
    </Container>
  );
};

export default ProgramPage;
