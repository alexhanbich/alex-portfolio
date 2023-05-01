import React from "react";

function Cards({ img, title, text }) {
  return (
    <div className="flex mb-12 rounded-lg bg-primary bg-opacity-10 hover:bg-secondary hover:bg-opacity-30">
      <div
        className="block m-auto h-48 aspect-3/2 bg-cover rounded-lg text-center"
        style={{ backgroundImage: `url(${img})` }}
        title="Project Image"
      ></div>
      <div className="flex flex-col justify-between m-4">
        <div className="mb-4">
          <div className="font-semibold text-xl mb-2">{title}</div>
          <span className="text-sm">{text}</span>
          <span className="text-xs"> ... READ MORE</span>
        </div>
        <div className="flex justify-around px-4">
          <a
            href="#"
            className="text-sm text-accent no-underline hover:underline"
          >
            Github &rarr;
          </a>
          <a
            href="#"
            className="text-sm text-accent no-underline hover:underline"
          >
            Demo &rarr;
          </a>
        </div>
      </div>
    </div>
  );
}

export default Cards;
