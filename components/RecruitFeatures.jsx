import React, { useState } from "react";
import FeatureItem from "./FeatureItem";
import { CSSTransition, SwitchTransition } from "react-transition-group";

const features = [
  {
    key: "entendemos",
    title: "Entendemos tus necesidades ✍🏻",
    description: `En Jelmi entendemos las necesidades específicas de tu empresa y
              trabajamos para satisfacerlas con precisión. Nuestra metodología
              de vanguardia nos permite entender de manera profunda las vacantes
              y los perfiles que necesitas.`,
  },
  {
    key: "reclutamos",
    title: "Reclutamos & Seleccionamos 👩🏼‍💻",
    description: ` Nos dedicamos a reclutar y atraer al mejor talento del mercado.
              Contamos con una amplia red de contactos y una metodología
              personalizada para encontrar los perfiles adecuados para tu
              empresa`,
  },
  {
    key: "filtramos",
    title: "Filtramos",
    description: ` Utilizamos la inteligencia artificial para realizar procesos de
              selección rigurosos y precisos, garantizando que los candidatos
              seleccionados cumplan con las habilidades, la experiencia y los
              requerimientos específicos de tu empresa.`,
  },
];

const RecruitFeatures = () => {
  const [select, setSelect] = useState("entendemos");

  const feature = features.filter((item) => item.key === select)[0];

  const onClickEntendemos = () => {
    setSelect("entendemos");
  };
  const onClickReclutamos = () => {
    setSelect("reclutamos");
  };
  const onClickFiltramos = () => {
    setSelect("filtramos");
  };

  const classH2 =
    "pb-2 text-5xl font-extrabold cursor-pointer lg:text-6xl hover:text-gray-900";

  return (
    <section className="w-full py-12 md:py-16">
      <div className="flex flex-col mx-auto md:px-0 md:flex-row">
        <div className="text-center md:text-left w-full mb-6 space-y-1 md:mb-0 md:space-y-4 md:w-5/12">
          <h2
            className={
              select === "entendemos"
                ? classH2 + " text-black"
                : classH2 + " text-gray-400"
            }
            onClick={onClickEntendemos}
          >
            Entendemos
          </h2>
          <h2
            className={
              select === "reclutamos"
                ? classH2 + " text-black"
                : classH2 + " text-gray-400"
            }
            onClick={onClickReclutamos}
          >
            Reclutamos
          </h2>
          <h2
            className={
              select === "filtramos"
                ? classH2 + " text-black"
                : classH2 + " text-gray-400"
            }
            onClick={onClickFiltramos}
          >
            Filtramos
          </h2>
        </div>

        <div className="relative w-full mt-6 overflow-hidden md:mt-1 md:w-9/12">
          <SwitchTransition>
            <CSSTransition
              classNames="fade"
              key={select}
              addEndListener={(node, done) =>
                node.addEventListener("transitionend", done, false)
              }
            >
              <FeatureItem
                title={feature.title}
                description={feature.description}
              />
            </CSSTransition>
          </SwitchTransition>
        </div>
      </div>
    </section>
  );
};

export default RecruitFeatures;
