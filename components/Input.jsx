"use client";

const Input = ({ label, id, children }) => {
  return (
    <div className="flex flex-col">
      <label className="font-medium py-2" htmlFor={id}>
        {label}
      </label>
      {children}
    </div>
  );
};

export default Input;
