import React from "react";

const SocialNetwork = () => {
  const anim = () => {
    let navLinks = document.querySelectorAll(".social-network a");

    navLinks.forEach((link) => {
      link.addEventListener("mouseover", (e) => {
        let attrX = e.offsetX - 20;
        let attrY = e.offsetY - 13;

        link.style.transform = `translate(${attrX}px, ${attrY}px)`;
      });
      link.addEventListener("mouseleave", (e) => {
        link.style.transform = ``;
      });
    });
  };
  return (
    <div className="social-network">
      <ul>
        <a
          href="https://www.facebook.com/luke.dussart/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover"
          onMouseOver={anim}
        >
          <i className="fab fa-facebook-f"></i>
        </a>
        <a
          href="https://github.com/DUSSARTLuke/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover"
          onMouseOver={anim}
        >
          <i className="fab fa-github"></i>
        </a>
        <a
          href="https://www.facebook.com/luke.dussart/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover"
          onMouseOver={anim}
        >
          <i className="fab fa-instagram"></i>
        </a>
      </ul>
    </div>
  );
};

export default SocialNetwork;
