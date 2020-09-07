import React, { useState } from "react";
import Logo from "./Logo";

const Navbar = ({ className }) => {
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    setIsActive(!isActive);
    let navLinks = document.querySelectorAll(".nav-menu a li");
    let burger = document.querySelector(".burger");

    navLinks.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = "";
      } else {
        link.style.animation = `navLinkFade 0.5s ease forwards ${
          index / 7 + 0.5
        }s`;
      }
    });

    if (burger.classList.contains("toggle")) {
      burger.classList.remove("toggle");
    } else {
      burger.classList.add("toggle");
    }
  };

  return (
    <>
      <nav className={"navbar " + className}>
        <Logo />
        <ul className={"nav-menu" + (isActive ? " nav-active" : "")}>
          <a href="#header">
            <li>Home</li>
          </a>
          <a href="#section-one">
            <li>Concept</li>
          </a>
          <a href="#mosaique">
            <li>Products</li>
          </a>
          <a href="#parallax">
            <li>Story</li>
          </a>
          <a href="#parallax">
            <li>
              <p className="fa fa-facebook"></p>
              <p className="fa fa-twitter"></p>
              <p className="fa fa-instagram"></p>
            </li>
          </a>
        </ul>
        <div className="burger" onClick={handleClick}>
          <div className="line1"></div>
          <div className="line2"></div>
          <div className="line3"></div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;

/** Hide nav when scroll down and show it when scroll up
 * Not working anymore because snap-scroll
 * To enable it again dont forget to create ref on navbar **/

// let navbar = React.createRef();
// let lastScroll = 0;

// window.addEventListener(
//   "scroll",
//   () => {
//     let scrollPosition =
//       window.pageYOffset || document.documentElement.scrollTop;
//     if (scrollPosition > lastScroll) {
//       /* Down */
//       hideNav();
//     } else {
//       /* Up */
//       showNav();
//     }
//     lastScroll = scrollPosition;
//   },
//   false
// );

// let hideNav = () => {
//   window.setTimeout(function () {
//     navbar.current.classList.add("navHide");
//     navbar.current.classList.remove("navShow");
//   }, 50);
// };
// let showNav = () => {
//   window.setTimeout(function () {
//     navbar.current.classList.add("navShow");
//     navbar.current.classList.remove("navHide");
//   }, 50);
// };
