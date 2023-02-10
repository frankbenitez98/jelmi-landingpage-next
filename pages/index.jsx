import React from "react";
import Hero from "../components/Hero";
import Container from "../components/Container";
import Information from "../components/information";
import Features from "../components/Features";
import RecruitFeatures from "../components/RecruitFeatures";
import Cta from "../components/Cta";

const Home = () => {
  return (
    <Container>
      <Hero />
      <Information />
      <Features />
      <RecruitFeatures />
      <Cta />
    </Container>
  );
};

export default Home;
