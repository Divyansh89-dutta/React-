import React, { useState, useEffect } from "react";

function Scroll() {
  const [scrollBlocked, setScrollBlocked] = useState(true);

  // Block or unblock scrolling based on state
  useEffect(() => {
    if (scrollBlocked) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [scrollBlocked]);

  return (
    <div className="w-full h-screen flex flex-col justify-center items-center bg-zinc-900 text-white">
      <h2 className="text-2xl font-bold mb-4">
        {scrollBlocked ? "Scrolling is Blocked!" : "Scrolling is Enabled"}
      </h2>
      <button
        onClick={() => setScrollBlocked(false)}
        className="bg-green-600 px-6 py-2 rounded-md font-semibold"
      >
        Enable Scrolling
      </button>
    </div>
  );
}

export default Scroll;
