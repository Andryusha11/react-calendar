import React, { useState } from 'react';
import Modal from '../modal/Modal';
import './header.scss';

const Header = ({
  changeWeekToNext,
  changeWeekToPrevious,
  changeWeekToCurrent,
  month,
}) => {
  const [openModal, setOpenModal] = useState(false);

  const openModalWindow = () => {
    setOpenModal(true);
  };
  const closeModalWindow = () => {
    setOpenModal(false);
  };
  return (
    <header className="header">
      <button onClick={openModalWindow} className="button create-event-btn">
        <i className="fas fa-plus create-event-btn__icon"></i>Create
      </button>
      <div className="navigation">
        <button
          onClick={changeWeekToCurrent}
          className="navigation__today-btn button"
        >
          Today
        </button>
        <button
          onClick={changeWeekToPrevious}
          className="icon-button navigation__nav-icon"
        >
          <i className="fas fa-chevron-left"></i>
        </button>
        <button
          onClick={changeWeekToNext}
          className="icon-button navigation__nav-icon"
        >
          <i className="fas fa-chevron-right"></i>
        </button>
        <span className="navigation__displayed-month">{month}</span>
      </div>
      <Modal close={closeModalWindow} open={openModal} />
    </header>
  );
};

export default Header;
