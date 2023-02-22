import React, { useEffect, useState } from 'react';
import Header from './components/header/Header.jsx';
import Calendar from './components/calendar/Calendar.jsx';
import { getWeekStartDate, generateWeekRange } from '../src/utils/dateUtils.js';
import './common.scss';
import moment from 'moment/moment.js';
import Modal from './components/modal/Modal.jsx';
import events from './gateway/events.js';

const App = () => {
  const [weekStartDate, setWeekStartDay] = useState(new Date());
  const weekDates = generateWeekRange(getWeekStartDate(weekStartDate));

  const changeWeek = (e) => {
    if (e.target.classList.contains('navigation__today-btn')) {
      setWeekStartDay(new Date());
    } else {
      e.target.classList.contains('navigation__nav-icon') ||
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

  const [openModal, setOpenModal] = useState(false);

  const openModalWindow = () => {
    setOpenModal(true);
  };
  const closeModalWindow = () => {
    setOpenModal(false);
  };

  const [eventTask, setEventTask] = useState({
    id: events.length + 1,
    title: '',
    description: '',
    dateFrom: moment().format('HH:SS'),
    dateTo: moment().format('HH:SS'),
    date: moment().format('yyyy-MM-DD'),
  });

  const handleChangeEvent = (e) => {
    const { name, value } = e.target;
    setEventTask({
      ...eventTask,
      [name]: value,
    });
    console.log(moment().format('HH:SS'));
  };

  const handleSubmitModalWindow = (e) => {
    e.preventDefault();
    events.push({
      ...eventTask,
      dateFrom: new Date(
        moment(`${eventTask.date}/${eventTask.dateFrom}`).format()
      ),
      dateTo: new Date(
        moment(`${eventTask.date}/${eventTask.dateTo}`).format()
      ),
    });
    setEventTask({
      id: events.length + 1,
      title: '',
      description: '',
      dateFrom: moment().format('HH:SS'),
      dateTo: moment().format('HH:SS'),
      date: moment().format('yyyy-MM-DD'),
    });
    closeModalWindow();
  };

  return (
    <>
      <Header
        openModalWindow={openModalWindow}
        changeWeek={changeWeek}
        month={month}
      />
      <Calendar weekDates={weekDates} />
      <Modal
        eventTask={eventTask}
        handleSubmitModalWindow={handleSubmitModalWindow}
        handleChangeEvent={handleChangeEvent}
        closeModalWindow={closeModalWindow}
        open={openModal}
      />
    </>
  );
};

export default App;
