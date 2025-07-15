export interface Event {
  id: string;
  title: string;
  description: string;
  startTime: string;
  endTime: string;
  location: string;
  category: string;
  speakers?: string[];
  tags?: string[];
}

export interface UserSchedule {
  userId: string;
  events: string[]; // Array of event IDs
}
