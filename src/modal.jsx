import React, { useState } from 'react';
import './ModalStyle.css'

const Modal = ({ isOpen, onClose, children }) => {
  return (
    <div className={`modal ${isOpen ? 'open' : ''}`}>
      <div className="modal-content">
        {children}
        <button className='buttonn' onClick={onClose}>Cerrar</button>
      </div>
    </div>
  );
};

export default Modal;
