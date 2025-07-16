import { format, parseISO } from 'date-fns';
import { de } from 'date-fns/locale';

/**
 * Format a date string to a human-readable format
 * @param dateString ISO date string
 * @param formatStr Format string for date-fns
 * @returns Formatted date string
 */
export const formatDate = (dateString: string, formatStr: string = 'dd.MM.yyyy HH:mm'): string => {
  try {
    const date = parseISO(dateString);
    return format(date, formatStr, { locale: de });
  } catch (error) {
    console.error('Error formatting date:', error);
    return dateString;
  }
};

/**
 * Get the day of the week from a date string
 * @param dateString ISO date string
 * @returns Day of the week (e.g., "Montag")
 */
export const getDayOfWeek = (dateString: string): string => {
  try {
    const date = parseISO(dateString);
    return format(date, 'EEEE', { locale: de });
  } catch (error) {
    console.error('Error getting day of week:', error);
    return '';
  }
};

/**
 * Group events by day
 * @param events Array of events
 * @returns Object with days as keys and arrays of events as values
 */
export const groupEventsByDay = (events: any[]): Record<string, any[]> => {
  return events.reduce((acc: Record<string, any[]>, event) => {
    const day = format(parseISO(event.startTime), 'yyyy-MM-dd');
    if (!acc[day]) {
      acc[day] = [];
    }
    acc[day].push(event);
    return acc;
  }, {});
};

/**
 * Sort events by start time
 * @param events Array of events
 * @returns Sorted array of events
 */
export const sortEventsByStartTime = (events: any[]): any[] => {
  return [...events].sort((a, b) => {
    return new Date(a.startTime).getTime() - new Date(b.startTime).getTime();
  });
};

/**
 * Format a time string from an ISO date string
 * @param dateString ISO date string
 * @returns Formatted time string (e.g., "14:30")
 */
export const formatTime = (dateString: string): string => {
  try {
    const date = parseISO(dateString);
    return format(date, 'HH:mm', { locale: de });
  } catch (error) {
    console.error('Error formatting time:', error);
    return dateString;
  }
};
