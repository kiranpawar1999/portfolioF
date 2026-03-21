// ✅ ALL IMPORTS AT TOP
import React from "react";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

// ✅ THEN DATA
const social_links = [
  { icon: <FaGithub />, link: "https://github.com/" },
  { icon: <FaLinkedin />, link: "https://linkedin.com/" },
  { icon: <FaInstagram />, link: "https://instagram.com/" },
];

// ✅ COMPONENT
const Hero = () => {
  return (
    <div>
      <div className="flex gap-5">
        {social_links.map((item, i) => (
          <a
            key={i}
            href={item.link}
            target="_blank"
            rel="noreferrer"
            className="text-white text-2xl"
          >
            {item.icon}
          </a>
        ))}
      </div>
    </div>
  );
};

export default Hero;