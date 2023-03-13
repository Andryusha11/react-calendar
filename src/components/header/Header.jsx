import moment from 'moment';
import React from 'react';
import { PropTypes } from 'prop-types';
import './header.scss';

const Header = ({
  openModalWindow,
  weekStartDate,
  weekDates,
  setWeekStartDay,
}) => {
  const changeWeek = (e) => {
    if (e.target.classList.contains('navigation__today-btn')) {
      setWeekStartDay(new Date());
    } else {
      e.target.classList.contains('navigation__nav-icon-right') ||
      e.target.classList.contains('fa-chevron-right')
        ? setWeekStartDay(new Date(moment(weekStartDate).add(7, 'days')))
        : setWeekStartDay(new Date(moment(weekStartDate).subtract(7, 'days')));
    }
  };

  const month =
    weekDates[0].getDate() < weekDates[6].getDate()
      ? moment(weekDates[0]).format('MMM')
      : moment(weekDates[0]).format('MMM') +
        ' - ' +
        moment(weekDates[6]).format('MMM');

  return (
    <header className="header">
      <button onClick={openModalWindow} className="button create-event-btn">
        <i className="fas fa-plus create-event-btn__icon"></i>Create
      </button>
      <div className="navigation">
        <button onClick={changeWeek} className="navigation__today-btn button">
          Today
        </button>
        <button
          onClick={changeWeek}
          className="icon-button navigation__nav-icon-left"
        >
          <i className="fas fa-chevron-left"></i>
        </button>
        <button
          onClick={changeWeek}
          className="icon-button navigation__nav-icon-right"
        >
          <i className="fas fa-chevron-right"></i>
        </button>
        <span className="navigation__displayed-month">{month}</span>
      </div>
    </header>
  );
};

Header.propTypes = {
  openModalWindow: PropTypes.func.isRequired,
  weekStartDate: PropTypes.object.isRequired,
  weekDates: PropTypes.array.isRequired,
  setWeekStartDay: PropTypes.func.isRequired,
};

export default Header;
