import React from 'react';
import { days } from '../../utils/dateUtils.js';
import { PropTypes } from 'prop-types';
import './navigation.scss';

const Navigation = ({ weekDates }) => {
  const styleForCurrentDay = (dayDate) =>
    dayDate === new Date().getDate()
      ? {
          backgroundColor: '#1A73E8',
          borderRadius: '50%',
          color: '#FFFFFF',
          width: '36px',
          height: '36px',
          textAlign: 'center',
          lineHeight: '36px',
        }
      : null;
  return (
    <header className="calendar__header">
      {weekDates.map((dayDate) => (
        <div key={dayDate.getDay()} className="calendar__day-label day-label">
          <span className="day-label__day-name">{days[dayDate.getDay()]}</span>
          <span
            style={styleForCurrentDay(dayDate.getDate())}
            className="day-label__day-number"
          >
            {dayDate.getDate()}
          </span>
        </div>
      ))}
    </header>
  );
};

Navigation.propTypes = {
  weekDates: PropTypes.array.isRequired,
};

export default Navigation;
