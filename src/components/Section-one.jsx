import React from "react";

const SectionOne = () => {
  return (
    <>
      <div className="section-one-wrapper section scroll-snap" id="section-one">
        {/* Text */}
        <div className="text-section">
          <div className="column-left">
            <p className="upper-text">Concept</p>
            <h1>The meaning of Tradition</h1>
            <p className="sub-text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit
              provident mollitia deleniti non amet quis. Nihil voluptatum ullam
              excepturi, hic temporibus, dolorem harum non minima dignissimos
              aliquid, aliquam fugit! Labore?
            </p>
            <p className="standard-text bold pointer">Read more</p>
          </div>
        </div>
        {/* Image */}
        <div className="image-section">
          <div className="wrapper-img-one">
            <img
              className="img-one"
              src="https://images.pexels.com/photos/3269643/pexels-photo-3269643.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
              alt=""
            />
          </div>
          <div className="wrapper-img-two">
            <img
              className="img-two"
              src="https://images.pexels.com/photos/355757/pexels-photo-355757.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
              alt=""
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default SectionOne;
