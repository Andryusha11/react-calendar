import React, { useEffect, useState } from 'react';
import Hour from '../hour/Hour';
import './day.scss';

const Day = ({ dataDay, dayEvents }) => {
  const currentDay = dataDay === new Date().getDate();
  const hours = Array(24)
    .fill()
    .map((val, index) => index);

  const [styleForRedLine, setStyleForRedLine] = useState({
    top: new Date().getHours() * 60 + new Date().getMinutes(),
  });

  useEffect(() => {
    setTimeout(() => {
      setStyleForRedLine({
        top: new Date().getHours() * 60 + new Date().getMinutes(),
      });
    }, 60000);
  });

  return (
    <>
      <div className="calendar__day" data-day={dataDay}>
        {hours.map((hour) => {
          //getting all events from the day we will render
          const hourEvents = dayEvents.filter(
            (event) => event.dateFrom.getHours() === hour
          );

          return (
            <>
              <Hour
                key={dataDay + hour}
                dataHour={hour}
                hourEvents={hourEvents}
              />
            </>
          );
        })}
        {currentDay ? (
          <div
            key={styleForRedLine.top}
            style={styleForRedLine}
            className="red-line"
          ></div>
        ) : null}
      </div>
    </>
  );
};

export default Day;
