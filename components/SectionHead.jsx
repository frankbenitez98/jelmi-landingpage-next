import React from "react";

const SectionHead = ({ title, description }) => {
  return (
    <div className="mt-16 center text-center">
      <h1 className="text-4xl lg:text-5xl font-bold lg:tracking-tight">
        {title}
      </h1>
      <p className="text-lg mt-4 text-slate-600">{description}</p>
    </div>
  );
};

export default SectionHead;
