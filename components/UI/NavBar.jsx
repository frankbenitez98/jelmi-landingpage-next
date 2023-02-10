import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "../../public/assets/logo.png";
import Container from "../Container";
import { Bars3Icon as MenuIcon } from "@heroicons/react/20/solid";
import ButtonLink from "./ButtonLink";

const menuitems = [
  {
    //   title: "Vacantes",
    //   path: "#",
    //   // children: [
    //   //   { title: "Action", path: "#" },
    //   //   { title: "Another action", path: "#" },
    //   //   { title: "Dropdown Submenu", path: "#" },
    //   // ],
    // },
    // {
    //   title: "Construir",
    //   path: "/pricing",
    // },
    // {
    title: "Contáctanos",
    path: "/contact",
  },
];

const NavBar = () => {
  const [toggleMobile, setToggleMobile] = useState(false);
  const handleToggleMobile = () => {
    setToggleMobile(!toggleMobile);
  };
  return (
    <Container>
      <header className="flex flex-col lg:flex-row justify-between items-center my-5">
        <div className="flex w-full lg:w-auto items-center justify-between">
          <Link href="/" className="text-lg">
            <Image
              src={logo}
              alt="Jelmi Recruitment | Logo | Top talent"
              width={100}
              height={42}
              sizes="(max-width: 200px) 100vw, 80px"
            />
          </Link>

          <div className="block lg:hidden" onClick={handleToggleMobile}>
            <MenuIcon className="w-8 h-8 text-gray-800" />
          </div>
        </div>
        {toggleMobile && (
          <div
            className={
              "lg:flex flex-grow items-center" +
              (toggleMobile ? " flex" : " hidden")
            }
          >
            <ul className="flex flex-col lg:flex-row lg:gap-3">
              {menuitems.map((item, index) => (
                <>
                  {item.children && (
                    <Dropdown
                      title={item.title}
                      children={item.children}
                      lastItem={index === menuitems.length - 1}
                    />
                  )}

                  {!item.children && (
                    <li key={item.title}>
                      <ButtonLink href={item.path}>{item.title}</ButtonLink>
                    </li>
                  )}
                </>
              ))}
            </ul>
          </div>
        )}

        {/* <div className="lg:hidden flex items-center mt-3 gap-4">
          <Link href="/contact">Contactar</Link>
          <Link href="/contact">Contratar</Link>
        </div> */}
        <div>
          <div className="hidden lg:flex items-center gap-4">
            <p>¿Necesitas contratar?</p>
            <ButtonLink href="/contact">Contáctanos</ButtonLink>
          </div>
        </div>
      </header>
    </Container>
  );
};

export default NavBar;
