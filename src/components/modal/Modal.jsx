import React from 'react';
import './modal.scss';

const Modal = ({ open, close }) => {
  if (!open) return null;
  return (
    <div className="modal overlay">
      <div className="modal__content">
        <div className="create-event">
          <button onClick={close} className="create-event__close-btn">
            +
          </button>
          <form className="event-form">
            <input
              type="text"
              name="title"
              placeholder="Title"
              className="event-form__field"
            />
            <div className="event-form__time">
              <i className="fa-regular fa-clock"></i>
              <input type="date" name="date" className="event-form__field" />
              <input
                type="time"
                name="startTime"
                className="event-form__field"
                // onChange={this.handleChange}
              />
              <span>-</span>
              <input type="time" name="endTime" className="event-form__field" />
            </div>
            <div className="event-form__description">
              <i className="fa-solid fa-bars-staggered"></i>
              <textarea
                name="description"
                placeholder="Description"
                className="event-form__field"
              ></textarea>
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
