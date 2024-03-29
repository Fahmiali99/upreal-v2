import React from "react";
interface ModalProps {
  open: boolean;
  image: any;
  handleClose: () => void;
}
function Modal({ open, handleClose, image }: ModalProps) {
  return (
    <div
      id="defaultModal"
      aria-hidden="true"
      className={`fixed top-0 left-0 right-0 z-50  w-full flex justify-center items-center  md:inset-0 h-[calc(100%-1rem)] max-h-full ${
        open ? "block" : "hidden"
      }`}
    >
      <div className=" bg-gray-900 w-screen h-screen absolute opacity-70"></div>
      <div className="relative w-full max-w-4xl max-h-full">
        <div className="relative bg-slate-800 rounded-lg shadow ">
          <div className="flex items-start justify-between px-5 py-4 border-b rounded-t border-gray-600">
            <h3 className="text-lg font-normal text-white">{image?.name}</h3>
            <button
              onClick={handleClose}
              type="button"
              className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
              data-modal-hide="defaultModal"
            >
              <svg
                aria-hidden="true"
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
              <span className="sr-only">Close modal</span>
            </button>
          </div>

          <div className="p-6 space-y-6">
            <img src={image?.link} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;
