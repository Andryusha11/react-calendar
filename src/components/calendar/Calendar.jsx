import React from 'react';
import Navigation from './../navigation/Navigation';
import Week from '../week/Week';
import Sidebar from '../sidebar/Sidebar';
import { PropTypes } from 'prop-types';
import './calendar.scss';

const Calendar = ({ weekDates, events, setEvents }) => {
  return (
    <section className="calendar">
      <Navigation weekDates={weekDates} />
      <div className="calendar__body">
        <div className="calendar__week-container">
          <Sidebar />
          <Week
            key={Math.random()}
            events={events}
            setEvents={setEvents}
            weekDates={weekDates}
          />
        </div>
      </div>
    </section>
  );
};

Calendar.propTypes = {
  weekDates: PropTypes.array.isRequired,
  events: PropTypes.array.isRequired,
  setEvents: PropTypes.func.isRequired,
};

export default Calendar;
