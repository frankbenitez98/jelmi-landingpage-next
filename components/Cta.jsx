import React from "react";
import Link from "next/link";

const Cta = () => {
  return (
    <div className="bg-black p-8 md:px-20 md:py-20 mt-20 mx-auto rounded-lg flex flex-col items-center text-center">
      <h2 className="text-white text-4xl md:text-6xl tracking-tight">
        Complementa tu equipo más rápido ⚡️
      </h2>
      <p className="text-slate-400 mt-4 text-lg md:text-xl">
        Contrata el equipo que necesita desde cualquier parte del mundo con
        Jelmi, nosotros los buscamos y te los presentamos
      </p>
      <div className="flex mt-5">
        <Link
          href="/contact"
          className="rounded-3xl text-center transition focus-visible:ring-2 ring-offset-2 ring-gray-200 px-4 py-2 bg-white text-black hover:bg-gray-300 border-2 border-transparent"
        >
          Me interesa
        </Link>
      </div>
    </div>
  );
};

export default Cta;
