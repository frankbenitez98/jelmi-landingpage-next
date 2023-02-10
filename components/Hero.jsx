import Image from "next/image";
import React from "react";
import heroImage from "../public/assets/astronaut.jpeg";
import Link from "next/link";
import ButtonLink from "./UI/ButtonLink";
const Hero = () => {
  return (
    <main className="grid lg:grid-cols-2 place-items-center pb-8 md:pt-12 lg:pt-0 md:pb-24 min-h-[90vh]">
      <div className="py-6 md:order-1 hidden md:block">
        <Image
          className="rounded-3xl w-full aspect-square"
          src={heroImage}
          alt="Astronaut in the air"
          width={620}
          sizes="(max-width: 800px) 100vw, 620px"
          loading="eager"
          format="avif"
        />
      </div>
      <div>
        <h1 className="text-5xl lg:text-6xl xl:text-7xl font-bold lg:tracking-tight xl:tracking-tighter">
          Excelencia en candidatos, <br />
          <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            tu empresa en lo más alto
          </span>
          {/* <!-- No solo encontramos el talento, lo preparamos para el éxito --> */}
        </h1>
        <p className="sm:text-lg mt-4 text-slate-600 max-w-xl">
          {/* <!-- En Jelmi, estamos cambiando la forma en que las empresas encuentran
      talento. En 10 años hemos ayudado a posicionar a candidatos destacados en
      grandes compañías en LATAM y Estados Unidos. <wbr /> Somos el mejor aliado
      para empresas que buscan un enfoque fresco y disruptivo en la búsqueda de talento. -->
			<!-- "Excelencia en candidatos" es la clave para llevar tu empresa al siguiente
      nivel. Contáctanos para acceder a los mejores perfiles del mercado y alcanzar
      tus objetivos empresariales. --> */}
          Lideres en reclutamiento y selección, con más de 10 años mejorando la
          forma en que las empresas encuentran talento. <br />
          <strong>Construyamos tu equipo ganador</strong>
        </p>
        <div className="mt-6 flex flex-col sm:flex-row gap-3">
          <ButtonLink href="/contact">Contactar</ButtonLink>
          {/* <!-- <Link
				size="lg"
				style="outline"
				rel="noopener"
				href="#_"
				className="flex gap-1 items-center justify-center"
				target="_blank">
				Publicar vacante
			</Link> --> */}
        </div>
      </div>
    </main>
  );
};

export default Hero;
