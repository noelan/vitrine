import React, { useEffect } from "react";

const ScrollHelper = () => {
  let breakPoints = ["0", "800", "1662", "2521"];
  let lastScroll = 0;

  useEffect(() => {
    scrollTo();
  });

  const scrollTo = () => {
    let index = getIndex();
    console.log(index);
    let scrollDirection = getScrollDirection();
    if (scrollDirection === "down") {
      index += 1;
    } else if (scrollDirection === "up") {
      index -= 1;
    }
    window.scrollTo({
      top: breakPoints[index],
      behavior: "smooth",
    });
  };

  /* Return the scroll direction. */
  const getScrollDirection = () => {
    let scrollPosition =
      window.pageYOffset || document.documentElement.scrollTop;
    let direction = "";
    if (scrollPosition > lastScroll) {
      /* Down */
      direction = "down";
    } else {
      /* Up */
      direction = "up";
    }
    lastScroll = scrollPosition;
    return direction;
  };

  /* Return the next breakPoints to go (window.scrollY) based on direction. */
  const getIndex = () => {
    let position = window.scrollY;
    let index = 0;

    if (position >= breakPoints[0] && position <= breakPoints[1]) {
      index = 0;
    } else if (position >= breakPoints[1] && position <= breakPoints[2]) {
      index = 1;
    } else if (position >= breakPoints[2] && position <= breakPoints[3]) {
      index = 2;
    }
    return index;
  };

  return <></>;
};

export default ScrollHelper;
