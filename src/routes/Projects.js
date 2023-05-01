import React from "react";
import Navbar from "../components/Navbar";
import Cards from "../components/Cards";
import Footer from "../components/Footer";
import projectData from "../data/projectData";

function Projects() {
  return (
    <div className="block mx-auto w-full sm:w-[640px] mx-6 font-montserrat">
      <Navbar />
      <div className="mt-6 px-4">
        <div className="mt-12">
          <h1 className="text-3xl mb-4">All Projects</h1>
          <hr className="mb-12 w-24" />
        </div>
        {projectData.map((item) => (
          <Cards img={item.img} title={item.title} text={item.details} />
        ))}
      </div>
      <Footer />
    </div>
  );
}

export default Projects;
