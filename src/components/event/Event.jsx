import React from 'react';
import { fetchDeleteEvent, fetchEventData } from '../../gateway/gateway';
import './event.scss';

const Event = ({ height, marginTop, title, time, id, setEvents }) => {
  const eventStyle = {
    height,
    marginTop,
  };

  const deleteEvent = (eventId) => {
    fetchDeleteEvent(eventId).then(() =>
      fetchEventData().then((resultData) =>
        setEvents(
          resultData.map((event) => ({
            ...event,
            dateFrom: new Date(event.dateFrom),
            dateTo: new Date(event.dateTo),
            date: new Date(event.date),
          }))
        )
      )
    );
  };

  return (
    <div id={id} style={eventStyle} className="event ">
      <div className="event__title">{title}</div>
      <div className="event__time">{time}</div>
      <button
        onClick={(e) =>
          e.target.parentElement.id
            ? deleteEvent(e.target.parentElement.id)
            : deleteEvent(e.target.parentElement.parentElement.id)
        }
        className="delete-event-btn"
      >
        <i className="fa-solid fa-trash"></i>
        <span className="delete-event-btn__text">Delete</span>
      </button>
    </div>
  );
};

export default Event;
