import React, { useEffect, useState } from 'react';
import Hour from '../hour/Hour';
import './day.scss';

const Day = ({ dataDay, dayEvents, setEvents }) => {
  const currentDay = dataDay === new Date().getDate();
  const hours = Array(24)
    .fill()
    .map((val, index) => index);

  const [styleForRedLine, setStyleForRedLine] = useState({
    top: new Date().getHours() * 60 + new Date().getMinutes(),
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setStyleForRedLine({
        top: new Date().getHours() * 60 + new Date().getMinutes(),
      });
    }, 60000);

    return clearInterval(interval);
  });

  return (
    <>
      <div key={Math.random()} className="calendar__day" data-day={dataDay}>
        {hours.map((hour) => {
          const hourEvents = dayEvents.filter(
            (event) => event.dateFrom.getHours() === hour
          );

          return (
            <>
              <Hour
                key={Math.random()}
                dataHour={hour}
                hourEvents={hourEvents}
                setEvents={setEvents}
              />
            </>
          );
        })}
        {currentDay && (
          <div
            key={Math.random()}
            style={styleForRedLine}
            className="red-line"
          ></div>
        )}
      </div>
    </>
  );
};

export default Day;
