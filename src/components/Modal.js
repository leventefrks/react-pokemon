import { createPortal } from 'react-dom';
import { HiX } from 'react-icons/hi';

const Modal = ({ isVisible, onHideModal }) => {
  const modal = document.querySelector('#modal');

  return createPortal(
    <div
      className="fixed z-50 w-full min-h-screen flex items-center justify-center bg-gray-600 bg-opacity-50"
      role="dialog"
      onClick={onHideModal}
    >
      <div
        className="w-full md:w-4/12 mx-4 md:mx-0 h-96 rounded-xl shadow-2xl p-4 bg-white"
        onClick={e => e.stopPropagation()}
      >
        <div className="relative bg-white">
          <button aria-label="Close Modal">
            <HiX
              className="absolute -top-4 -right-4 w-8 h-8 m-5 cursor-pointer text-indigo-600 rounded-full hover:bg-indigo-100 p-2"
              onClick={onHideModal}
            />
          </button>
        </div>
      </div>
    </div>,
    modal
  );
};

export default Modal;
