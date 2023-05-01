import React from "react";
import experienceData from "../data/experienceData";
import ExperienceItem from "./ExperienceItem";

function Experience() {
  return (
    <div>
      <div className="mt-12">
        <h1 className="text-3xl mb-4">Experience</h1>
        <hr className="mb-12 w-24" />
      </div>
      <div className="flex flex-col justify-center my-12 p-4 bg-primary bg-opacity-10">
        <div className="w-full">
          {experienceData.map((item) => (
            <ExperienceItem
              year={item.year}
              title={item.title}
              duration={item.duration}
              details={item.details}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Experience;
