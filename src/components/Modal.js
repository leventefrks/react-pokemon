import React from 'react';
import ReactDOM from 'react-dom';
import { HiX } from 'react-icons/hi';

const Modal = ({ isVisible, onHideModal }) => {
  return ReactDOM.createPortal(
    <div
      className="fixed z-50 min-h-screen w-full flex items-center justify-center"
      onClick={onHideModal}
    >
      <div className="w-4/12 h-96 rounded-xl shadow-2xl p-4 bg-white">
        <div className="relative bg-white">
          <HiX
            className="absolute -top-4 -right-4 w-6 h-6 m-5 cursor-pointer text-indigo-600"
            onClick={onHideModal}
          />
        </div>
      </div>
    </div>,

    document.querySelector('#modal')
  );
};

export default Modal;
