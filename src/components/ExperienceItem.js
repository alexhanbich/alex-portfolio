import React from "react";

function ExperienceItem({ year, title, duration, details }) {
  return (
    <ol className="flex flex-col relative border-l">
      <li className="mb-10 ml-4">
        <div className="absolute w-3 h-3 rounded-full mt-1.5 -left-1.5 border border-black bg-gray" />
        <p className="flex flex-wrap gap-4 flex-row items-center justify-start text-xs">
          <span className="inline-block px-2 py-1 font-semibold rounded-md">
            {year}
          </span>
          <h3 className="text-lg font-semibold">{title}</h3>
          <div className="my-1 text-sm font-normal leading-none">
            {duration}
          </div>
        </p>
        <p className="my-2 text-base font-normal">{details}</p>
      </li>
    </ol>
  );
}

export default ExperienceItem;
