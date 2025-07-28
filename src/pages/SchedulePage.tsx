import React, { useState, useEffect } from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Alert from '@mui/material/Alert';
import CircularProgress from '@mui/material/CircularProgress';
import { eventService } from '../services/eventService';
import { scheduleService } from '../services/scheduleService';
import { Event } from '../models/types';
import EventList from '../components/EventList';
import DeleteIcon from '@mui/icons-material/Delete';

const SchedulePage: React.FC = () => {
  const [scheduledEvents, setScheduledEvents] = useState<Event[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  // Load user's scheduled events
  useEffect(() => {
    const loadSchedule = async () => {
      try {
        setLoading(true);

        // Get user's schedule
        const userSchedule = await scheduleService.getUserSchedule();

        // If schedule is empty, return early
        if (userSchedule.events.length === 0) {
          setScheduledEvents([]);
          setLoading(false);
          return;
        }

        // Get all events
        const allEvents = await eventService.getAllEvents();

        // Filter events that are in the user's schedule
        const events = allEvents.filter(event =>
          userSchedule.events.includes(event.id)
        );

        setScheduledEvents(events);
      } catch (error) {
        console.error('Error loading schedule:', error);
      } finally {
        setLoading(false);
      }
    };

    loadSchedule();
  }, []);

  // Handle clearing the schedule
  const handleClearSchedule = async () => {
    try {
      await scheduleService.clearSchedule();
      setScheduledEvents([]);
    } catch (error) {
      console.error('Error clearing schedule:', error);
    }
  };

  return (
    <Container maxWidth="md">
      <Box sx={{ my: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Mein Zeitplan
        </Typography>
        <Typography variant="body1" color="text.secondary" paragraph>
          Hier findest du alle Veranstaltungen, die du zu deinem persönlichen
          Zeitplan hinzugefügt hast.
        </Typography>

        {loading ? (
          <Box sx={{ display: 'flex', justifyContent: 'center', p: 3 }}>
            <CircularProgress />
          </Box>
        ) : scheduledEvents.length > 0 ? (
          <>
            <Box sx={{ display: 'flex', justifyContent: 'flex-end', mb: 2 }}>
              <Button
                variant="outlined"
                color="error"
                startIcon={<DeleteIcon />}
                onClick={handleClearSchedule}
              >
                Zeitplan leeren
              </Button>
            </Box>

            <EventList
              events={scheduledEvents}
              loading={false}
              title="Meine Veranstaltungen"
            />
          </>
        ) : (
          <Alert severity="info" sx={{ mt: 2 }}>
            Du hast noch keine Veranstaltungen zu deinem Zeitplan hinzugefügt.
            Gehe zum{' '}
            <Button color="primary" href="/program">
              Programm
            </Button>{' '}
            und füge Veranstaltungen hinzu.
          </Alert>
        )}
      </Box>
    </Container>
  );
};

export default SchedulePage;
