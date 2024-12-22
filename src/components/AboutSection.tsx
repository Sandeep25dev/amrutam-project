import React from "react";
import Tags from "./Tags";

const AboutSection: React.FC = () => {
  return (
    <div className="bg-white shadow-md rounded-lg">
      <div className="flex bg-gradient-to-r from-[#F4F7EC] to-[#FBFCFB] p-3 rounded-t-lg justify-between items-center mb-4">
        <h2 className="text-lg font-semibold">A Little About me</h2>
        <button className="flex items-center text-green-800 border border-green-800 px-3 py-1 rounded-lg text-sm font-medium">
          Follow +
        </button>
      </div>

      <div className="p-4">
        <p className="text-gray-600 mb-2">
          Hello, I am Dr. Bruce Willis, a Gynecologist in Sanjivni Hospital,
          Surat. I love to work with all my hospital staff and senior doctors.
          Completed my graduation in Gynecologist Medicine from the ...
          <span className="text-green-800 font-medium cursor-pointer">
            Read More
          </span>
        </p>
      </div>

      <div className="p-4">
        <h3 className="text-gray-700 font-medium mb-2">Language Spoken</h3>
        <div className="flex space-x-2">
          {["English", "Hindi", "Telugu"].map((language, index) => (
            <Tags varient="primary" key={index}>
              {language}
            </Tags>
          ))}
        </div>
      </div>

      <div className="flex space-x-4 p-4">
        {["facebook", "instagram", "youtube", "twitter"].map(
          (platform, index) => (
            <button
              key={index}
              className="w-8 h-8 flex items-center justify-center rounded-full border border-gray-300 text-gray-600 hover:bg-gray-100"
            >
              <span className="sr-only">{platform}</span>
              <img
                src={`src/assets/${platform}-logo.png`}
                alt="social-media-icon"
              />
            </button>
          )
        )}
      </div>
    </div>
  );
};

export default AboutSection;
