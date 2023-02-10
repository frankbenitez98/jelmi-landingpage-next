import Link from "next/link";
import React from "react";

const ButtonLink = ({ href, children }) => {
  return (
    <Link
      className="rounded-3xl text-center transition focus-visible:ring-2 ring-offset-2 ring-gray-200 px-4 py-2 bg-black text-white hover:bg-gray-800 border-2 border-transparent"
      href={href}
    >
      {children}
    </Link>
  );
};

export default ButtonLink;
