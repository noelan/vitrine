import React from "react";
import { Parallax } from "react-parallax";

const SectionParallax = () => {
  return (
    <>
      <div className="section-parallax section scroll-snap" id="parallax">
        <Parallax
          blur={0.5}
          bgImage="https://images.pexels.com/photos/167698/pexels-photo-167698.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
          bgImageAlt="the cat"
          strength={500}
        >
          <div style={{ height: "100vh" }} />
          <div className="card">
            <p className="upper-text">Environnement</p>
            <h1 className="title">Pour une planète propre</h1>
            <p className="sub-text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus
              ipsum quo nostrum perferendis ducimus harum magnam, laborum veniam
              neque consequatur? Deserunt ad mollitia, vitae officia dolorem
              deleniti adipisci repudiandae repellat!
            </p>
          </div>
        </Parallax>
      </div>
    </>
  );
};

export default SectionParallax;
