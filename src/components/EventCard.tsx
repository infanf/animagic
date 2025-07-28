import React from 'react';
import {
  Card,
  CardContent,
  CardActions,
  Typography,
  Button,
  Chip,
  Box,
} from '@mui/material';
import { Event } from '../models/types';
import { formatDate } from '../utils/dateUtils';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import PersonIcon from '@mui/icons-material/Person';
import { getCategoryColor } from '../styles/categoryColors';

interface EventCardProps {
  event: Event;
  isInSchedule: boolean;
  onAddToSchedule: (eventId: string) => void;
  onRemoveFromSchedule: (eventId: string) => void;
}

const EventCard: React.FC<EventCardProps> = ({
  event,
  isInSchedule,
  onAddToSchedule,
  onRemoveFromSchedule,
}) => {
  return (
    <Card
      sx={{
        mb: 2,
        borderLeft: isInSchedule ? '4px solid #4caf50' : 'none',
        background: getCategoryColor(event.category),
      }}
    >
      <CardContent>
        <Typography variant="h6" component="div" gutterBottom>
          {event.title}
        </Typography>

        <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
          <AccessTimeIcon fontSize="small" sx={{ mr: 1 }} />
          <Typography variant="body2" color="text.secondary">
            {formatDate(event.startTime)} - {formatDate(event.endTime, 'HH:mm')}
          </Typography>
        </Box>

        <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
          <LocationOnIcon fontSize="small" sx={{ mr: 1 }} />
          <Typography variant="body2" color="text.secondary">
            {event.location}
          </Typography>
        </Box>

        {event.speakers && event.speakers.length > 0 && (
          <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
            <PersonIcon fontSize="small" sx={{ mr: 1 }} />
            <Typography variant="body2" color="text.secondary">
              {event.speakers.join(', ')}
            </Typography>
          </Box>
        )}

        <Typography variant="body2" sx={{ mt: 1 }}>
          {event.description}
        </Typography>

        <Box sx={{ mt: 2, display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
          <Chip size="small" label={event.category} color="primary" />
          {event.tags?.map(tag => (
            <Chip key={tag} size="small" label={tag} variant="outlined" />
          ))}
        </Box>
      </CardContent>

      <CardActions>
        {isInSchedule ? (
          <Button
            size="small"
            color="error"
            onClick={() => onRemoveFromSchedule(event.id)}
          >
            Aus Zeitplan entfernen
          </Button>
        ) : (
          <Button
            size="small"
            color="primary"
            onClick={() => onAddToSchedule(event.id)}
          >
            Zum Zeitplan hinzufügen
          </Button>
        )}
      </CardActions>
    </Card>
  );
};

export default EventCard;
