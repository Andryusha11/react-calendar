import React, { useEffect, useState } from 'react';
import events from '../../gateway/events';

import './modal.scss';

const Modal = ({ open, close }) => {
  if (!open) return null;

  const [eventTask, setEventTask] = useState({
    id: events.length + 1,
    title: '',
    description: '',
    dateFrom: `${new Date().getHours()}:${new Date().getSeconds()}`,
    dateTo: `${new Date().getHours()}:${new Date().getSeconds()}`,
    date: new Date().toISOString().split('T')[0],
  });

  useEffect(() => {
    console.log(eventTask);
  }, [eventTask]);

  const handleChange = (e) => {
    const { name, value, type } = e.target;
    setEventTask({
      ...eventTask,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    events.push(eventTask);
    close();
    console.log(events);
  };
  return (
    <div className="modal overlay">
      <div className="modal__content">
        <div className="create-event">
          <button onClick={close} className="create-event__close-btn">
            +
          </button>
          <form onSubmit={handleSubmit} className="event-form">
            <input
              type="text"
              name="title"
              placeholder="Title"
              className="event-form__field"
              value={eventTask.title}
              onChange={handleChange}
            />
            <div className="event-form__time">
              <i className="fa-regular fa-clock"></i>
              <input
                value={eventTask.date}
                onChange={handleChange}
                type="date"
                name="date"
                className="event-form__field"
              />
              <input
                type="time"
                name="dateFrom"
                className="event-form__field"
                value={eventTask.dateFrom}
                onChange={handleChange}
              />
              <span>-</span>
              <input
                value={eventTask.dateTo}
                onChange={handleChange}
                type="time"
                name="dateTo"
                className="event-form__field"
              />
            </div>
            <div className="event-form__description">
              <i className="fa-solid fa-bars-staggered"></i>
              <textarea
                value={eventTask.description}
                onChange={handleChange}
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

export default Modal;
