import React from "react";

const Button = ({ className, title, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`${className} py-3.5 px-4 rounded-[30px] text-center`}
    >
      {title}
    </button>
  );
};

export default Button;
