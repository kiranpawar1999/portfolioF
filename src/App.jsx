import Navbar from "./Component/Navbar.jsx"
import About from "./Component/About.jsx";
import Hero from "./Component/Hero.jsx";
import Skills from "./Component/Skills.jsx";
import Project from "./Component/Project.jsx";
import Education from "./Component/Education.jsx";
import Contact from "./Component/Contact.jsx";
import Footer from "./Component/Footer.jsx";
import Hireme from "./Component/Hireme.jsx";



function App(props) {
  return (
    <>
    <Navbar/>
     <Hero/>
    <About/>
   <Skills/>
     <Project/>
   {/* <Hireme/> */}
     <Education/>
    <Contact/>
    <Footer/>
      
    </>
  );
}

export default App;
