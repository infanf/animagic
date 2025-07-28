import { UserSchedule } from '../models/types';

/**
 * Service to handle user schedule operations
 * This service is designed to be replaced with a real backend service later
 */
export class ScheduleService {
  private readonly STORAGE_KEY = 'convention-user-schedule';

  /**
   * Get the user's schedule
   * @returns Promise with the user's schedule
   */
  async getUserSchedule(): Promise<UserSchedule> {
    // In a real app, this would fetch from a backend API
    // For now, we'll use localStorage
    return new Promise(resolve => {
      setTimeout(() => {
        const storedSchedule = localStorage.getItem(this.STORAGE_KEY);
        if (storedSchedule) {
          resolve(JSON.parse(storedSchedule));
        } else {
          // Create a default schedule if none exists
          const defaultSchedule: UserSchedule = {
            userId: 'user1', // In a real app, this would be the authenticated user's ID
            events: [],
          };
          localStorage.setItem(
            this.STORAGE_KEY,
            JSON.stringify(defaultSchedule)
          );
          resolve(defaultSchedule);
        }
      }, 200);
    });
  }

  /**
   * Add an event to the user's schedule
   * @param eventId ID of the event to add
   * @returns Promise with the updated schedule
   */
  async addEventToSchedule(eventId: string): Promise<UserSchedule> {
    const schedule = await this.getUserSchedule();

    // Check if event is already in schedule
    if (!schedule.events.includes(eventId)) {
      schedule.events.push(eventId);
      localStorage.setItem(this.STORAGE_KEY, JSON.stringify(schedule));
    }

    return schedule;
  }

  /**
   * Remove an event from the user's schedule
   * @param eventId ID of the event to remove
   * @returns Promise with the updated schedule
   */
  async removeEventFromSchedule(eventId: string): Promise<UserSchedule> {
    const schedule = await this.getUserSchedule();

    schedule.events = schedule.events.filter(id => id !== eventId);
    localStorage.setItem(this.STORAGE_KEY, JSON.stringify(schedule));

    return schedule;
  }

  /**
   * Check if an event is in the user's schedule
   * @param eventId ID of the event to check
   * @returns Promise with boolean indicating if event is in schedule
   */
  async isEventInSchedule(eventId: string): Promise<boolean> {
    const schedule = await this.getUserSchedule();
    return schedule.events.includes(eventId);
  }

  /**
   * Clear the user's schedule
   * @returns Promise with the empty schedule
   */
  async clearSchedule(): Promise<UserSchedule> {
    const schedule = await this.getUserSchedule();
    schedule.events = [];
    localStorage.setItem(this.STORAGE_KEY, JSON.stringify(schedule));
    return schedule;
  }
}

// Export a singleton instance
export const scheduleService = new ScheduleService();
