import React from "react";

function Intro() {
  return (
    <div className="flex flex-col p-4 overflow-hidden h-intro pb-6">
      <div className="relative">
        <div className="wrapper">
          <span className="shape absolute"></span>
          <span className="shape absolute"></span>
          <span className="shape absolute"></span>
        </div>
        <div className="absolute">
          <div className="text-4xl my-12 font-medium">
            <h1>Hi, I'm Alex.</h1>
            <h1>
              I like to develop software and share what I learn along the way.
            </h1>
          </div>
          <a
            href="/profile"
            className="text-lg text-accent no-underline hover:underline"
          >
            View Profile &rarr;
          </a>
        </div>
      </div>
    </div>
  );
}

export default Intro;
