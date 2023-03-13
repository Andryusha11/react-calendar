import React, { useEffect, useState } from 'react';
import Header from './components/header/Header.jsx';
import Calendar from './components/calendar/Calendar.jsx';
import { getWeekStartDate, generateWeekRange } from '../src/utils/dateUtils.js';
import './common.scss';
import Modal from './components/modal/Modal.jsx';
import { fetchEventData } from './gateway/gateway.js';

const App = () => {
  const [weekStartDate, setWeekStartDay] = useState(new Date());
  const weekDates = generateWeekRange(getWeekStartDate(weekStartDate));
  const [openModal, setOpenModal] = useState(false);

  const openModalWindow = () => {
    setOpenModal(true);
  };
  const closeModalWindow = () => {
    setOpenModal(false);
  };

  const [events, setEvents] = useState([]);

  useEffect(() => {
    fetchEventData().then((resultData) =>
      setEvents(
        resultData.map((event) => ({
          ...event,
          dateFrom: new Date(event.dateFrom),
          dateTo: new Date(event.dateTo),
          date: new Date(event.date),
        }))
      )
    );
  }, [events.length]);

  return (
    <>
      <Header
        openModalWindow={openModalWindow}
        setWeekStartDay={setWeekStartDay}
        weekStartDate={weekStartDate}
        weekDates={weekDates}
      />
      <Calendar events={events} setEvents={setEvents} weekDates={weekDates} />
      {openModal && (
        <Modal setEvents={setEvents} closeModalWindow={closeModalWindow} />
      )}
    </>
  );
};

export default App;
