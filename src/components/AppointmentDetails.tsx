import React, { useState } from "react";
import Button from "./Button";

const AppointmentBooking: React.FC = () => {
  const [selectedMode, setSelectedMode] = useState<
    "In-Clinic" | "Video" | "Chat"
  >("Video");
  const [selectedDate, setSelectedDate] = useState<string>("Mon, 10 Oct");
  const [selectedTime, setSelectedTime] = useState<string>("11:00 AM");

  const sessionModes = [
    { mode: "In-Clinic", duration: "45 Mins" },
    { mode: "Video", duration: "45 Mins" },
    { mode: "Chat", duration: "10 Mins" },
  ];

  const dateSlots = [
    { date: "Mon, 10 Oct", slots: 10 },
    { date: "Tue, 11 Oct", slots: 2 },
    { date: "Wed, 12 Oct", slots: 5 },
  ];

  const timeSlots = {
    morning: [
      "09:00 AM",
      "09:30 AM",
      "10:00 AM",
      "10:15 AM",
      "10:45 AM",
      "11:00 AM",
    ],
    evening: ["04:00 PM", "04:15 PM", "04:30 PM", "04:45 PM", "05:15 PM"],
  };

  return (
    <div className="max-w-md mx-auto p-6 border border-gray-300 rounded-lg">
      <div className="flex justify-between mb-4">
        <h3 className="font-semibold text-lg">Appointment Fee</h3>
        <h3 className="font-semibold text-lg text-primary-200">₹699.00</h3>
      </div>
      <hr />
      <br />
      <h2 className="text-lg font-semibold mb-4">
        Select your mode of session
      </h2>
      <div className="flex gap-4 mb-6">
        {sessionModes.map((mode) => (
          <button
            key={mode.mode}
            className={`flex flex-col items-center justify-center border px-8 py-2 rounded-lg text-sm font-medium ${
              selectedMode === mode.mode
                ? "bg-[#3A643B85]/10 text-primary-200 border-primary-200"
                : "bg-white text-gray-700 border-gray-300"
            }`}
            onClick={() =>
              setSelectedMode(mode.mode as "In-Clinic" | "Video" | "Chat")
            }
          >
            {mode.mode}{" "}
            <span className="text-xs text-gray-500">{mode.duration}</span>
          </button>
        ))}
      </div>

      <h2 className="text-lg font-semibold mb-4">Pick a time slot</h2>
      <div className="flex gap-4 mb-6">
        {dateSlots.map((date) => (
          <button
            key={date.date}
            className={`flex flex-col items-center justify-center border px-3 py-3 rounded-lg text-sm font-medium ${
              selectedDate === date.date
                ? "bg-[#3A643B85]/10 text-primary-200 border-primary-200"
                : "bg-white text-gray-700 border-gray-300"
            }`}
            onClick={() => setSelectedDate(date.date)}
          >
            {date.date}{" "}
            <span className="text-xs text-gray-500">{date.slots} slots</span>
          </button>
        ))}
      </div>

      <div className="mb-6">
        <h3 className="text-md font-semibold mb-2">Morning</h3>
        <div className="flex gap-2 flex-wrap">
          {timeSlots.morning.map((time) => (
            <button
              key={time}
              className={`px-3 py-2 rounded-lg text-sm font-medium border ${
                selectedTime === time
                  ? "bg-primary-200 text-white"
                  : "bg-white text-gray-700 border-gray-300"
              }`}
              onClick={() => setSelectedTime(time)}
            >
              {time}
            </button>
          ))}
        </div>

        <h3 className="text-md font-semibold mt-4 mb-2">Evening</h3>
        <div className="flex gap-2 flex-wrap">
          {timeSlots.evening.map((time) => (
            <button
              key={time}
              className={`px-3 py-2 rounded-lg text-sm font-medium border ${
                selectedTime === time
                  ? "bg-primary-200 text-white"
                  : "bg-white text-gray-700 border-gray-300"
              }`}
              onClick={() => setSelectedTime(time)}
            >
              {time}
            </button>
          ))}
        </div>
      </div>

      <Button classname="w-full" variant="primary">
        Make An Appointment
      </Button>
    </div>
  );
};

export default AppointmentBooking;
