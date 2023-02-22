import React, { useState } from 'react';
import './header.scss';

const Header = ({ openModalWindow, changeWeek, month }) => {
  return (
    <header className="header">
      <button onClick={openModalWindow} className="button create-event-btn">
        <i className="fas fa-plus create-event-btn__icon"></i>Create
      </button>
      <div className="navigation">
        <button onClick={changeWeek} className="navigation__today-btn button">
          Today
        </button>
        <button
          onClick={changeWeek}
          className="icon-button navigation__nav-icon"
        >
          <i className="fas fa-chevron-left"></i>
        </button>
        <button
          onClick={changeWeek}
          className="icon-button navigation__nav-icon"
        >
          <i className="fas fa-chevron-right"></i>
        </button>
        <span className="navigation__displayed-month">{month}</span>
      </div>
    </header>
  );
};

export default Header;
