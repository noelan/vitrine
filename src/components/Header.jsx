import React, { useState, useEffect } from "react";
import HeaderTitle from "./Header-title";
import Gradient from "./Gradient";
import Navbar from "./Navbar";

const Header = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  const loading = () => {
    setTimeout(() => {
      setIsLoaded("true");
    }, 3000);
  };

  useEffect(() => {
    loading();
  });
  return (
    <>
      <div
        className={
          "header-wrapper section scroll-snap" + (isLoaded ? " fade-in" : "")
        }
        id="header"
      >
        <Navbar className={isLoaded ? " fade-in" : ""} />
        <div className="title-wrapper">
          <HeaderTitle />
        </div>
        <img
          src="https://images.pexels.com/photos/1671325/pexels-photo-1671325.jpeg?cs=srgb&dl=pexels-francesco-ungaro-1671325.jpg&fm=jpg"
          alt=""
        />

        {/* <Gradient /> */}
        <Gradient />
      </div>
    </>
  );
};

export default Header;
