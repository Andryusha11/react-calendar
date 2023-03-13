import React from 'react';
import Day from '../day/Day';
import { PropTypes } from 'prop-types';
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

Week.propTypes = {
  weekDates: PropTypes.array.isRequired,
  events: PropTypes.array.isRequired,
  setEvents: PropTypes.func.isRequired,
};

export default Week;
