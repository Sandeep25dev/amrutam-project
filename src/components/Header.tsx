import React from "react";
import Button from "./Button";

const Header: React.FC = () => {
  return (
    <header className="bg-[#F9F4E5] px-6 py-4">
      <div className="max-w-[1220px] mx-auto flex justify-between items-center">
        <img src="src/assets/logo.png" alt="logo" />
        <nav className="space-x-4">
          <a
            href="#"
            className="text-gray-600 font-semibold hover:text-green-800"
          >
            Home
          </a>
          <a
            href="#"
            className="text-gray-600 font-semibold hover:text-green-800"
          >
            Find Doctors
          </a>
          <a
            href="#"
            className="text-gray-600 font-semibold hover:text-green-800"
          >
            About Us
          </a>
        </nav>
        <div className="space-x-4">
          <Button variant="secondary">Login</Button>
          <Button variant="primary">Sign-up</Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
