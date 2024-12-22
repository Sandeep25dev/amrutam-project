import React from "react";

interface BoxProps {
  title: string;
  children: React.ReactNode;
}

const Box: React.FC<BoxProps> = ({ title, children }) => {
  return (
    <div className="border border-gray-300 rounded-lg bg-white shadow-md ">
      <div className="bg-gradient-to-r from-[#F4F7EC] to-[#FBFCFB] p-3 rounded-t-lg">
        <h2 className="text-lg font-semibold">{title}</h2>
      </div>
      <div className="p-4">{children}</div>
    </div>
  );
};

export default Box;
