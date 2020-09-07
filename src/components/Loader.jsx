import React, { useState, useEffect } from "react";

const Loader = () => {
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
      <div className={"loader " + (isLoaded ? " hide" : "")}>
        <div className="center">
          <div className="sk-fold">
            <div className="sk-fold-cube"></div>
            <div className="sk-fold-cube"></div>
            <div className="sk-fold-cube"></div>
            <div className="sk-fold-cube"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Loader;
