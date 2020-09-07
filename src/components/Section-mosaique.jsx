import React from "react";

const SectionMosaique = () => {
  let images = [
    "https://images.pexels.com/photos/3636074/pexels-photo-3636074.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    "https://images.pexels.com/photos/3774024/pexels-photo-3774024.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    "https://images.pexels.com/photos/242827/pexels-photo-242827.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    "https://images.pexels.com/photos/2004904/pexels-photo-2004904.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    "https://images.pexels.com/photos/2072066/pexels-photo-2072066.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
  ];

  return (
    <>
      <div className="mosaique-wrapper section scroll-snap " id="mosaique">
        {/* Desktop */}
        <div className="row-one">
          <div className="col-responsive col-big">
            <img className="with-color" src={images[0]} alt="" />

            <p className="centered-text">Fauteuil</p>
          </div>
          <div className="col col-small">
            <div className="small-image-top">
              <img src={images[1]} alt="" />
              <p className="centered-text">Canapé</p>
            </div>
            <div className="small-image-bottom">
              <img src={images[2]} alt="" />
              <p className="centered-text">Table</p>
            </div>
          </div>
        </div>
        <div className="row-two">
          <div className="col col-medium-left">
            <img src={images[3]} alt="" />
            <p className="centered-text">Chaise</p>
          </div>
          <div className="col col-medium-right">
            <img src={images[4]} alt="" />
            <p className="centered-text">Cuisine</p>
          </div>
        </div>
        {/* Responsive  */}
        <div className="mosaique-responsive">
          <div>
            <img className="with-color" src={images[0]} alt="" />
            <p className="centered-text">Fauteuil</p>
          </div>
          <div>
            <img src={images[1]} alt="" />
            <p className="centered-text">Canapé</p>
          </div>
          <div>
            <img src={images[2]} alt="" />
            <p className="centered-text">Table</p>
          </div>

          <div>
            <img src={images[3]} alt="" />
            <p className="centered-text">Chaise</p>
          </div>
          <div>
            <img src={images[4]} alt="" />
            <p className="centered-text">Cuisine</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default SectionMosaique;
