import React from "react";
import Box from "./BoxComponent";

interface WorkExperience {
  company: string;
  position: string;
  duration: string;
}

const experiences: WorkExperience[] = [
  {
    company: "Midtown Medical Clinic",
    position: "Senior doctor",
    duration: "2016-PRESENT",
  },
  {
    company: "Midtown Medical Clinic",
    position: "Senior doctor",
    duration: "2010-2015",
  },
];

const WorkExperience: React.FC = () => {
  return (
    <Box title="My Work Experience">
      <p className="text-sm font-medium text-primary-200 mb-4">
        I HAVE BEEN IN PRACTICE FOR : 7+ YEARS
      </p>
      <hr />
      <br />
      <div className="space-y-4">
        {experiences.map((experience, index) => (
          <div key={index} className="flex justify-between items-center mb-2">
            <div className="flex items-center">
              <img
                src="src/assets/building-icon.png"
                alt="building"
                className="w-10 h-10 rounded-full mr-3"
              />
              <div>
                <p className="font-medium">{experience.company}</p>
                <p className="text-sm text-gray-500">{experience.position}</p>
              </div>
            </div>
            <p className="text-sm text-gray-500">{experience.duration}</p>
          </div>
        ))}
      </div>
    </Box>
  );
};

export default WorkExperience;
