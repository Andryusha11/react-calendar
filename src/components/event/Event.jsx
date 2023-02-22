import React from 'react';
import './event.scss';

const Event = ({ height, marginTop, title, time, deleteEvent, id }) => {
  const eventStyle = {
    height,
    marginTop,
  };

  return (
    <div id={id} style={eventStyle} className="event ">
      <div className="event__title">{title}</div>
      <div className="event__time">{time}</div>
      <button className="delete-event-btn">
        <i className="fa-solid fa-trash"></i>
        <span className="delete-event-btn__text">Delete</span>
      </button>
    </div>
  );
};

export default Event;
