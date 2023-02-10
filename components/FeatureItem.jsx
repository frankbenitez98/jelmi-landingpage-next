import React from "react";
import Link from "next/link";

const FeatureItem = ({ title, description }) => {
  return (
    <div className="w-full space-y-6 mt-3">
      <h3 className="text-2xl font-bold leading-7">{title}</h3>
      <p className="text-base font-normal leading-none text-gray-700 md:text-lg">
        {description}
      </p>

      <Link href="/contact" className="underline inline-flex" size={"none"}>
        Trabajemos juntos
        <svg
          className="w-5 h-5 ml-1 transform -rotate-45"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M14 5l7 7m0 0l-7 7m7-7H3"
          ></path>
        </svg>
      </Link>
    </div>
  );
};

export default FeatureItem;
