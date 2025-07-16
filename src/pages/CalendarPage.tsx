import React from 'react';
import ScheduleGrid from '../components/ScheduleGrid';
import '../styles/CalendarPage.css';

const CalendarPage: React.FC = () => {
  return (
    <div className="calendar-page">
      <ScheduleGrid />
    </div>
  );
};

export default CalendarPage;
