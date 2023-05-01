import React from "react";
import Cards from "./Cards";
import background from "../img/placeholder.jpeg";

let img1 = background;
let title1 = "Title";
let text1 =
  "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla!";
let img2 = background;
let title2 = "Title";
let text2 =
  "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla!";
let img3 = background;
let title3 = "Title";
let text3 =
  "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla!";

function FeaturedProjects() {
  return (
    <div className="my-6">
      <h1 className="text-2xl mb-6">Featured Projects</h1>
      <Cards img={img1} title={title1} text={text1} />
      <Cards img={img2} title={title2} text={text2} />
      <Cards img={img3} title={title3} text={text3} />
      <button className="w-38 z-50 mt-4 mb-12 bg-transparent hover:bg-gray-500 text-black font-semibold hover:text-white py-2 px-4 border border-gray-300 hover:border-transparent rounded">
        More Projects
      </button>
    </div>
  );
}

export default FeaturedProjects;
