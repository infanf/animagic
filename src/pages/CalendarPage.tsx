import React from 'react';
import LocationCalendar from '../components/LocationCalendar';
import '../styles/CalendarPage.css';

const CalendarPage: React.FC = () => {
  return (
    <div className="calendar-page">
      <LocationCalendar />
    </div>
  );
};

export default CalendarPage;
