import Image from "next/image";
import React from "react";
import mainImage from "../public/assets/professionals.jpeg";
import Link from "next/link";
import ButtonLink from "./UI/ButtonLink";
const features = [
  {
    title: "Atracción de talento de primer nivel",
    text: "nuestros profesionales están altamente capacitados para encontrar y atraer a los mejores candidatos del mercado.",
  },
  {
    title: "Asesoría y capacitación continua:",
    text: "brindamos orientación y capacitación continua a nuestros clientes para mejorar su proceso de contratación y mantenerse al día con las mejores prácticas.",
  },
  {
    title: "Flexibilidad y adaptabilidad:",
    text: "contamos con la capacidad de adaptarnos a las necesidades y requerimientos específicos de cada cliente y brindar soluciones personalizadas.",
  },
  {
    title: "Amplio alcance geográfico:",
    text: "atendemos vacantes en Colombia, México y Estados Unidos 🇨🇴🇲🇽🇺🇸🌎",
  },
];

const Features = () => {
  return (
    <section className="w-full bg-white">
      <div className="flex flex-col py-20 mx-auto max-w-7xl lg:flex-row space-y-10 lg:space-y-0 lg:space-x-10">
        <Image
          className="rounded-3xl max-w-md md:max-w-lg lg:max-w-full mx-auto hidden md:block"
          src={mainImage}
          alt="Impulsamos tu negocio a lo más alto | Unicornio"
          about="About that?"
          width={500}
          sizes="(max-width: 800px) 100vw, 500px"
          loading="lazy"
        />

        <div className="relative w-full mb-10 lg:text-left sm:text-center lg:w-1/2 xl:w-7/12 lg:mb-0">
          <p className="text-sm font-semibold tracking-wide uppercase flex flex-col">
            ¿Quiénes somos?
          </p>
          <h2 className="text-5xl font-bold sm:text-6xl mt-7">
            Profesionales de <br className="hidden lg:block" />
            <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              atracción de talento.
            </span>
          </h2>
          <p className="text-gray-600 text-center md:text-left mt-9">
            Nuestros servicios de reclutamiento y selección te ofrece una
            experiencia intuitiva y personalizada para contratar a los mejores
            candidatos del mercado.
          </p>
          <ul className="relative text-justify sm:text-left mx-auto lg:mx-0 max-w-xl">
            {features.map((feature) => (
              <li className="flex pl-6 mt-5" key={feature.title}>
                <svg
                  className="absolute left-0 w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="text-sm text-gray-600">
                  <span className="font-bold text-gray-900">
                    {feature.title}
                  </span>
                  {feature.text}
                </span>
              </li>
            ))}
          </ul>

          <Link
            href="/contact"
            className="mt-8 inline-block rounded-3xl text-center transition focus-visible:ring-2 ring-offset-2 ring-gray-200 px-4 py-2 bg-black text-white hover:bg-gray-800 border-2 border-transparent"
          >
            <span className="font-light">Consultoria</span>
            <span className="font-medium"> gratuita</span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Features;
