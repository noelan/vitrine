import React from "react";

const Footer = () => {
  return (
    <>
      <section className="footer-wrapper section">
        <div className="column-left">
          <div className="column-one">
            <div className="logo-footer">
              <span className="title">FIL</span>
              <span className="tm">™ </span>
            </div>
          </div>
          <div className="column-two">
            <p>Concept</p>
            <p>Products</p>
            <p>Story</p>
          </div>
          <div className="column-three">
            <p>Twitter</p>
            <p>Facebook</p>
            <p>Instagram</p>
          </div>
        </div>
        <div className="column-right">
          <p>
            Head Office <br />
            41 Great Pulteney Street
            <br />
            London, W1F 9NZ
            <br />
            United Kingdom
          </p>
        </div>
      </section>
    </>
  );
};

export default Footer;
