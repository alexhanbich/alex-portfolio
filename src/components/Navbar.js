import React from "react";

function Navbar() {
  return (
    <div>
      <nav className="w-full flex justify-between bg-primary bg-opacity-40">
        <li className="px-4 py-3 list-none">
          <a href="/">Alex Kang</a>
        </li>
        <ul className="flex list-none">
          <li className="px-4 py-3">
            <a href="/profile">Profile</a>
          </li>
          <li className="px-4 py-3">
            <a href="/posts">Posts</a>
          </li>
          <li className="px-4 py-3">
            <a href="/projects">Projects</a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
