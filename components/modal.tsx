import React from "react";

export default function Modal(props: {
  isGameOver: boolean;
  className: string;
}) {
  return (
    <div
      id="defaultModal"
      tabIndex={-1}
      aria-hidden="true"
      className={`overflow-y-auto overflow-x-hidden fixed top-0 right-0 z-50 w-full inset-0  h-full bg-[#21212179] ${
        props.isGameOver ? "" : "hidden"
      } ${props.className} `}
    >
      <div className="relative p-4 w-full max-w-2xl h-full md:h-auto mx-auto ">
        <div className="relative  rounded-lg shadow bg-gray-900 text-center p-12 ">
          <p className="w-full text-6xl font-bold text-center p-10 text-green-400 font-mono capitalize">
            Game Over!
          </p>

          <button
            data-modal-toggle="defaultModal"
            type="button"
            className="text-white bg-green-400 rounded p-4 font-mono text-xl"
            onClick={() => {
              window.location.reload();
            }}
          >
            restart
          </button>
        </div>
      </div>
    </div>
  );
}
