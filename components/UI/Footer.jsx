import React from "react";

const Footer = () => {
  return (
    <footer className="my-20">
      <p className="text-center text-sm text-slate-500">
        Copyright © {new Date().getFullYear()} Jelmi. Todos los derechos
        reservados.
      </p>
      <p className="text-center text-xs text-slate-500 mt-1">
        Hecho desde 🇨🇴 para potenciar 🚀
      </p>
    </footer>
  );
};

export default Footer;
