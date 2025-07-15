import { Event } from '../models/types';
import { mozartsaalEvents } from '../data/mozartsaalEvents';
import { musensaalEvents } from '../data/musensaalEvents';
import { crunchyrollCinemaEvents } from '../data/crunchyrollCinemaEvents';
import { cineMagic1Events } from '../data/cineMagic1Events';
import { cineMagic2Events } from '../data/cineMagic2Events';
import { animagicKino1Events } from '../data/animagicKino1Events';
import { animagicKino2Events } from '../data/animagicKino2Events';
import { animagicKino3Events } from '../data/animagicKino3Events';
import { ramenWokWokKaraokeEvents } from '../data/ramenWokWokKaraokeEvents';
import { verlagsstandEvents } from '../data/verlagsstandEvents';

// Mock data for convention events
// Original mock events (keeping for reference)
const originalMockEvents: Event[] = [
  {
    id: '1',
    title: 'Eröffnungszeremonie',
    description: 'Offizielle Eröffnung der Convention mit Vorstellung der Highlights',
    startTime: '2025-08-01T10:00:00',
    endTime: '2025-08-01T11:30:00',
    location: 'Haupthalle',
    category: 'Zeremonie',
    speakers: ['Convention Leiter']
  },
  {
    id: '2',
    title: 'Cosplay-Wettbewerb',
    description: 'Jährlicher Cosplay-Wettbewerb mit Preisverleihung',
    startTime: '2025-08-01T14:00:00',
    endTime: '2025-08-01T16:30:00',
    location: 'Bühne 1',
    category: 'Wettbewerb',
    tags: ['Cosplay', 'Wettbewerb']
  },
  {
    id: '3',
    title: 'Anime-Diskussionsrunde',
    description: 'Offene Diskussion über aktuelle Anime-Trends',
    startTime: '2025-08-01T13:00:00',
    endTime: '2025-08-01T14:30:00',
    location: 'Raum 3B',
    category: 'Panel',
    speakers: ['Anime-Experte 1', 'Anime-Experte 2'],
    tags: ['Anime', 'Diskussion']
  },
  {
    id: '4',
    title: 'Manga-Zeichenworkshop',
    description: 'Lerne die Grundlagen des Manga-Zeichnens',
    startTime: '2025-08-02T10:00:00',
    endTime: '2025-08-02T12:00:00',
    location: 'Workshop-Raum 2',
    category: 'Workshop',
    speakers: ['Manga-Künstler'],
    tags: ['Manga', 'Zeichnen', 'Workshop']
  },
  {
    id: '5',
    title: 'Gaming-Turnier',
    description: 'Wettkampf in beliebten Videospielen',
    startTime: '2025-08-02T13:00:00',
    endTime: '2025-08-02T18:00:00',
    location: 'Gaming-Bereich',
    category: 'Turnier',
    tags: ['Gaming', 'Wettbewerb']
  },
  {
    id: '6',
    title: 'Autogrammstunde',
    description: 'Treffe berühmte Synchronsprecher und hole dir Autogramme',
    startTime: '2025-08-02T15:00:00',
    endTime: '2025-08-02T17:00:00',
    location: 'Autogrammbereich',
    category: 'Meet & Greet',
    speakers: ['Synchronsprecher 1', 'Synchronsprecher 2'],
    tags: ['Autogramme', 'Synchronsprecher']
  },
  {
    id: '7',
    title: 'Abschlussparty',
    description: 'Feiere mit Musik, Tanz und Unterhaltung',
    startTime: '2025-08-03T19:00:00',
    endTime: '2025-08-03T23:00:00',
    location: 'Haupthalle',
    category: 'Party',
    tags: ['Musik', 'Tanz', 'Unterhaltung']
  }
];

// Combine original mock events with the new events from the program
const mockEvents: Event[] = [
  ...mozartsaalEvents,
  ...musensaalEvents,
  ...crunchyrollCinemaEvents,
  ...cineMagic1Events,
  ...cineMagic2Events,
  ...animagicKino1Events,
  ...animagicKino2Events,
  ...animagicKino3Events,
  ...ramenWokWokKaraokeEvents,
  ...verlagsstandEvents,
  // You can add more events from other halls here
];

/**
 * Service to handle event-related operations
 * This service is designed to be replaced with a real backend service later
 */
export class EventService {
  /**
   * Get all events
   * @returns Promise with all events
   */
  async getAllEvents(): Promise<Event[]> {
    // Simulate API call delay
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(mockEvents);
      }, 300);
    });
  }

  /**
   * Get event by ID
   * @param id Event ID
   * @returns Promise with the event or undefined if not found
   */
  async getEventById(id: string): Promise<Event | undefined> {
    // Simulate API call delay
    return new Promise((resolve) => {
      setTimeout(() => {
        const event = mockEvents.find(event => event.id === id);
        resolve(event);
      }, 200);
    });
  }

  /**
   * Get events by category
   * @param category Event category
   * @returns Promise with filtered events
   */
  async getEventsByCategory(category: string): Promise<Event[]> {
    // Simulate API call delay
    return new Promise((resolve) => {
      setTimeout(() => {
        const events = mockEvents.filter(event => event.category === category);
        resolve(events);
      }, 200);
    });
  }

  /**
   * Search events by query string (searches in title and description)
   * @param query Search query
   * @returns Promise with filtered events
   */
  async searchEvents(query: string): Promise<Event[]> {
    const normalizedQuery = query.toLowerCase();
    
    // Simulate API call delay
    return new Promise((resolve) => {
      setTimeout(() => {
        const events = mockEvents.filter(event => 
          event.title.toLowerCase().includes(normalizedQuery) || 
          event.description.toLowerCase().includes(normalizedQuery) ||
          (event.tags && event.tags.some(tag => tag.toLowerCase().includes(normalizedQuery)))
        );
        resolve(events);
      }, 300);
    });
  }
}

// Export a singleton instance
export const eventService = new EventService();
