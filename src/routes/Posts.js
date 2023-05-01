import React from "react";
import Navbar from "../components/Navbar";
import PostItem from "../components/PostItem";
import Footer from "../components/Footer";
import postData from "../data/postData";

function Posts() {
  return (
    <div className="block mx-auto w-full sm:w-[640px] mx-6 font-montserrat">
      <Navbar />
      <div className="mt-6 px-4">
        <div className="mt-12">
          <h1 className="text-3xl mb-4">Featured Posts</h1>
          <hr className="mb-6 w-24" />
        </div>
        <div className="w-full">
          {postData.map((item) => (
            <PostItem title={item.title} details={item.details} />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Posts;
