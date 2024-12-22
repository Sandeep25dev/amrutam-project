import React from "react";
import Button from "./Button";

const ProfileCard: React.FC = () => {
  return (
    <div className="bg-secondary-200 shadow-md rounded-lg">
      <div
        style={{
          backgroundImage: `url("src/assets/bg-img.png")`,
        }}
        className="h-28 rounded-t-lg relative bg-cover bg-center"
      >
        <img
          src="src/assets/avatar.png"
          alt="Dr. Bruce Willis"
          className="w-24 h-24 rounded-full border-4 border-white absolute -bottom-12 left-6"
        />
      </div>

      <div className="p-6 pt-12">
        <div className="flex items-center space-x-2">
          <h2 className="text-xl font-bold">Dr. Bruce Willis</h2>
          <span>
            <img src="src/assets/verified-badge.png" alt="verified-badge" />
          </span>
        </div>
        <p className="text-gray-500">Gynecologist</p>
        <p className="text-yellow-500 flex items-center space-x-1">
          <span>4.2</span>
          <span className="flex">
            {[...Array(4)].map((_, i) => (
              <svg
                key={i}
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
                className="w-4 h-4 text-yellow-500"
              >
                <path d="M12 .587l3.668 7.568L24 9.748l-6 6.146 1.49 8.605L12 19.896l-7.49 4.603L6 15.894 0 9.748l8.332-1.593z" />
              </svg>
            ))}
          </span>
        </p>
      </div>

      <div className="p-6 pt-0 flex justify-between items-center">
        {/* Stats */}
        <div className="flex space-x-6 text-center">
          <div>
            <p className="text-lg font-bold">850</p>
            <p className="text-sm text-gray-500">Followers</p>
          </div>
          <div>
            <p className="text-lg font-bold">18K</p>
            <p className="text-sm text-gray-500">Following</p>
          </div>
          <div>
            <p className="text-lg font-bold">250</p>
            <p className="text-sm text-gray-500">Posts</p>
          </div>
        </div>

        <Button variant="primary">Book an Appointment</Button>
      </div>
    </div>
  );
};

export default ProfileCard;
