import React, { useState } from "react";

const Tooltip = ({ text, position = "top", children }) => {
  const [visible, setVisible] = useState(false);

  const positionClasses = {
    top: "bottom-full left-1/2 -translate-x-1/2 mb-2",
    bottom: "top-full left-1/2 -translate-x-1/2 mt-2",
    left: "right-full top-1/2 -translate-y-1/2 mr-2",
    right: "left-full top-1/2 -translate-y-1/2 ml-2",
  };

  return (
    <div
      className="relative inline-block"
      onMouseEnter={() => setVisible(true)}
      onMouseLeave={() => setVisible(false)}
    >
      {children}
      {visible && (
        <div
          className={`absolute bg-zinc-800 text-white text-sm px-3 py-1 rounded-md shadow-md whitespace-nowrap ${positionClasses[position]} transition-opacity duration-200`}
        >
          {text}
        </div>
      )}
    </div>
  );
};

const Tool = () => {
  return (
    <div className="w-full h-screen flex flex-col items-center justify-center bg-zinc-900 text-white">
      <Tooltip text="I'm a tooltip!" position="top">
        <button className="bg-green-600 px-6 py-2 rounded-md font-semibold">
          Hover me
        </button>
      </Tooltip>
    </div>
  );
};

export default Tool;
