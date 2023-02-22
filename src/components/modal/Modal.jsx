import React from 'react';

import './modal.scss';

const Modal = ({
  open,
  closeModalWindow,
  handleChangeEvent,
  handleSubmitModalWindow,
  eventTask,
}) => {
  if (!open) return null;

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
              type="text"
              name="title"
              placeholder="Title"
              className="event-form__field"
              value={eventTask.title}
              onChange={handleChangeEvent}
            />
            <div className="event-form__time">
              <i className="fa-regular fa-clock"></i>
              <input
                value={eventTask.date}
                onChange={handleChangeEvent}
                type="date"
                name="date"
                className="event-form__field"
              />
              <input
                type="time"
                name="dateFrom"
                className="event-form__field"
                value={eventTask.dateFrom}
                onChange={handleChangeEvent}
              />
              <span>-</span>
              <input
                value={eventTask.dateTo}
                onChange={handleChangeEvent}
                type="time"
                name="dateTo"
                className="event-form__field"
              />
            </div>
            <div className="event-form__description">
              <i className="fa-solid fa-bars-staggered"></i>
              <textarea
                value={eventTask.description}
                onChange={handleChangeEvent}
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
