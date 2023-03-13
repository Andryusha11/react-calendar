import moment from 'moment';
import React, { useState } from 'react';
import { fetchCreateEvent, fetchEventData } from '../../gateway/gateway';
import { PropTypes } from 'prop-types';

import './modal.scss';

const Modal = ({ closeModalWindow, setEvents }) => {
  const [eventTask, setEventTask] = useState({
    title: '',
    description: '',
    dateFrom: moment().format('HH:mm'),
    dateTo: moment().format('HH:mm'),
    date: moment().format('yyyy-MM-DD'),
  });

  const handleCreateEvent = (e) => {
    const { name, value } = e.target;
    setEventTask({
      ...eventTask,
      [name]: value,
    });
  };

  const handleSubmitModalWindow = (e) => {
    e.preventDefault();
    fetchCreateEvent({
      ...eventTask,
      dateFrom: moment(`${eventTask.date}/${eventTask.dateFrom}`).format(),
      dateTo: moment(`${eventTask.date}/${eventTask.dateTo}`).format(),
    }).then(() =>
      fetchEventData().then((resultData) =>
        setEvents(
          resultData.map((event) => ({
            ...event,
            dateFrom: moment(event.dateFrom).format(),
            dateTo: moment(event.dateTo).format(),
            date: moment(event.date).format(),
          }))
        )
      )
    );
    setEventTask({
      title: '',
      description: '',
      dateFrom: new Date(moment().format('HH:mm')),
      dateTo: new Date(moment().format('HH:mm')),
      date: new Date(moment().format('yyyy-MM-DD')),
    });
    closeModalWindow();
  };
  return (
    <div className="modal overlay">
      <div className="modal__content">
        <div className="create-event">
          <button
            onClick={closeModalWindow}
            className="create-event__close-btn"
          >
            +
          </button>
          <form onSubmit={handleSubmitModalWindow} className="event-form">
            <input
              value={eventTask.title}
              onChange={handleCreateEvent}
              type="text"
              name="title"
              placeholder="Title"
              className="event-form__field"
            />
            <div className="event-form__time">
              <i className="fa-regular fa-clock"></i>
              <input
                value={eventTask.date}
                onChange={handleCreateEvent}
                type="date"
                name="date"
                className="event-form__field"
              />
              <input
                value={eventTask.dateFrom}
                onChange={handleCreateEvent}
                type="time"
                name="dateFrom"
                className="event-form__field"
              />
              <span>-</span>
              <input
                value={eventTask.dateTo}
                onChange={handleCreateEvent}
                type="time"
                name="dateTo"
                className="event-form__field"
              />
            </div>
            <div className="event-form__description">
              <i className="fa-solid fa-bars-staggered"></i>
              <textarea
                value={eventTask.description}
                onChange={handleCreateEvent}
                name="description"
                placeholder="Description"
                className="event-form__field"
              />
            </div>
            <button type="submit" className="event-form__submit-btn">
              Create
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

Modal.propTypes = {
  setEvents: PropTypes.func.isRequired,
  closeModalWindow: PropTypes.func.isRequired,
};

export default Modal;
