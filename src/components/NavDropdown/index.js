import React from "react";

const NavDropdown = ({ onClose }) => {
  return (
    <div
      className={`fixed top-0 left-0 w-full h-screen z-50 bg-gray-500 bg-opacity-25 transition duration-300 ease-in-out shadow-navShadow transform  ${
        !onClose
          ? "-translate-y-full opacity-0"
          : "opacity-100 translate-y-0"
      }`}
      onClick={onClose}
    >
      <div className="border border-[#E0E4E8] rounded-3xl bg-white">
        <p className="text-black">Hello dropdown</p>
      </div>

      {/* Your dropdown content */}
    </div>
  );
};

export default NavDropdown;
