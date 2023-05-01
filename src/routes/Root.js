import React from "react";
import Navbar from "../components/Navbar";
import Intro from "../components/Intro";
import Cards from "../components/Cards";
import Footer from "../components/Footer";
import projectData from "../data/projectData";

let featuredData = projectData.slice(0, 3);

function Root() {
  return (
    <div className="block mx-auto w-full sm:w-[640px] mx-6 font-montserrat">
      <Navbar />
      <Intro />
      <div className="px-4">
        <div className="mt-12">
          <h1 className="text-3xl mb-4">Featured Projects</h1>
          <hr className="mb-12 w-24" />
        </div>
        {featuredData.map((item) => (
          <Cards img={item.img} title={item.title} text={item.details} />
        ))}
        <div className="mt-6 mb-12">
          <a
            href="/profile"
            className="text-lg text-accent no-underline hover:underline"
          >
            View All Projects &rarr;
          </a>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Root;
