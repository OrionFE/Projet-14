import React from "react"

const Toast = ({ setToastIsOn }) => {
  return (
    <div className="bg-slate-700/70 w-full h-full absolute top-0">
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bottom-24 right-5 bg-green-100 drop-shadow font-semibold text-center flex flex-col justify-around items-center rounded w-64 h-32 ">
        <svg
          className="fill-green-600 w-12 h-12"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
        >
          <path d="M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-111 111-47-47c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9l64 64c9.4 9.4 24.6 9.4 33.9 0L369 209z" />
        </svg>
        <p>Employee created</p>
        <svg
          onClick={() => {
            setToastIsOn(false)
          }}
          className="cursor-pointer w-8 h-8 absolute top-2 right-2"
          xmlns="http://www.w3.org/2000/svg"
          height="1em"
          viewBox="0 0 384 512"
        >
          <path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" />
        </svg>
      </div>
    </div>
  )
}

export default Toast
