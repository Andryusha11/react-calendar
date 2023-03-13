import React from 'react';
import Day from '../day/Day';
import './week.scss';

const Week = ({ weekDates, events, setEvents }) => {
  return (
    <div className="calendar__week">
      {weekDates.map((dayStart) => {
        const dayEnd = new Date(dayStart.getTime()).setHours(
          dayStart.getHours() + 24
        );

        const dayEvents = events.filter(
          (event) => event.dateFrom > dayStart && event.dateTo < dayEnd
        );

        return (
          <Day
            key={Math.random()}
            dataDay={dayStart.getDate()}
            dayEvents={dayEvents}
            setEvents={setEvents}
          />
        );
      })}
    </div>
  );
};

export default Week;
