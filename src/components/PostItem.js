import React from "react";

function PostItem({ title, details }) {
  return (
    <div class="p-4 bg-primary bg-opacity-10 mb-6">
      <div className="font-semibold text-xl my-4">{title}</div>
      <hr className="mb-4 w-12 " />
      <p>{details}</p>
      <div className="pt-6">
        <a
          href="/profile"
          className="text-lg text-sm text-accent no-underline hover:underline"
        >
          READ MORE &rarr;
        </a>
      </div>
    </div>
  );
}

export default PostItem;
