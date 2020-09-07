import React from "react";
import Header from "../components/Header";
import SectionOne from "../components/Section-one";
import SectionParallax from "../components/Section-parallax";
import SectionMosaique from "../components/Section-mosaique";
import Footer from "../components/Footer";
import Loader from "../components/Loader";
const HomePage = () => {
  return (
    <>
      <Loader />
      <Header />
      <SectionOne />
      <SectionMosaique />
      <SectionParallax />
      <Footer />
    </>
  );
};

export default HomePage;
