import Link from "next/link";
import React from "react";

const Dropdown = ({ title, children, lastItem }) => {
  return (
    <>
      <li className="relative" key={title}>
        <button className="flex items-center gap-1 w-full lg:w-auto lg:px-3 py-2 text-gray-600 hover:text-gray-900">
          <span>{title}</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="3"
            stroke="currentColor"
            className="w-3 h-3 mt-0.5 group-open:rotate-180"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19.5 8.25l-7.5 7.5-7.5-7.5"
            ></path>
          </svg>
        </button>

        <div className="lg:absolute  w-full  lg:w-48$ lg:right-0 origin-top-right">
          <div className="px-3 lg:py-2 lg:bg-white lg:rounded-md lg:shadow lg:border flex flex-col">
            {children.map((item) => (
              <Link
                href={item.path}
                className="rounded-3xl text-center transition focus-visible:ring-2 ring-offset-2 ring-gray-200 px-4 py-2 bg-black text-white hover:bg-gray-800 border-2 border-transparent"
              >
                {item.title}
              </Link>
            ))}
          </div>
        </div>
      </li>
    </>
  );
};

export default Dropdown;
