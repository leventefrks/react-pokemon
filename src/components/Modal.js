import { createPortal } from 'react-dom';
import { HiX } from 'react-icons/hi';

const Modal = ({ isVisible, onHideModal }) => {
  const modal = document.querySelector('#modal');

  return createPortal(
    <div
      className="fixed z-50 min-h-screen w-full flex items-center justify-center bg-gray-600 bg-opacity-50"
      role="dialog"
      onClick={onHideModal}
    >
      <div
        className="w-4/12 h-96 rounded-xl shadow-2xl p-4 bg-white"
        onClick={e => e.stopPropagation()}
      >
        <div className="relative bg-white">
          <button aria-label="Close Modal">
            <HiX
              className="absolute -top-4 -right-4 w-6 h-6 m-5 cursor-pointer text-indigo-600 hover:animate-spin"
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
