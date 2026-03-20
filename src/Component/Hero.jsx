import { useRef } from "react";
import mypic from "../assets/images/mypic.jpeg";
import Type from "./Type.jsx";

const social_media = [
  "logo-instagram",
  "logo-github",
  "logo-linkedin",
];

const socialMediaLinks = [
  "https://www.instagram.com/kiru_6599/",
  "https://github.com/kiranpawar1999",
  "https://www.linkedin.com/in/kiran-pawar-9a891214a/",
];

function Hero() {
  const contactRef = useRef(null);

  const scrollToContact = () => {
    contactRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="min-h-screen flex py-10 md:flex-row flex-col items-center pt-24"
    >
      <div className="flex-1 flex items-center justify-center">
        <div className="w-[350px] h-[400px] overflow-hidden mx-auto">
          <img src={mypic} alt="Profile" className="w-full h-full object-cover" />
        </div>
      </div>

      <div className="flex-1 md:text-left text-center">
<h1 className="md:text-5xl text-2xl md:leading-normal leading-10 text-white font-bold">
            <span className="text-cyan-600 md:text-6xl text-5xl">
              Hello!
              <br />
            </span>
            My Name is <span>Kiran Pawar</span>
          </h1>

        <h4 className="md:text-2xl text-lg mt-4 font-bold text-gray-600">
          <Type
            words={[
              "Frontend Developer",
              "React Developer",
              "Tech Enthusiast",
              "Open Source Contributor",
            ]}
          />
        </h4>

        <button className="bg-cyan-500 hover:bg-cyan-600 text-white px-6 py-3 rounded-md w-full md:w-fit" onClick={scrollToContact}>
          Connect with Me
        </button>

        <div className="mt-8 text-3xl flex gap-5 justify-center md:justify-start">
          {social_media.map((icon, index) => (
            <a
              key={icon}
              href={socialMediaLinks[index]}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-white"
            >
              <ion-icon name={icon}></ion-icon>
            </a>
          ))}
        </div>
      </div>

      <div ref={contactRef}></div>
    </section>
  );
}

export default Hero;
