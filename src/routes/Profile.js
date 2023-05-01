import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Timeline from "../components/Experience";

function Profile() {
  return (
    <div className="block mx-auto w-full sm:w-[640px] mx-6 font-montserrat">
      <Navbar />
      <div className="px-4">
        <div className="mt-12">
          <h1 className="text-3xl mb-4">Profile</h1>
          <hr className="mb-6 w-24" />
        </div>
        <div className="bg-primary bg-opacity-10 p-4">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <div className="mt-6 mb-12">
            <a
              href="#"
              className="text-lg text-accent no-underline hover:underline"
            >
              Download Resume &rarr;
            </a>
          </div>
        </div>
        <Timeline />
      </div>
      <Footer />
    </div>
  );
}

export default Profile;
