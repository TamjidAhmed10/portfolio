import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import AboutMe from "../components/AboutMe";
import { NextPage } from "next";
import Projects from "../components/Projects";
import Certification from "../components/Certification";
import ContactUse from "../components/ContactUse";
import Footer from "../components/Footer";


const Home: NextPage = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <AboutMe />
      <Projects />
      <Certification />
      <ContactUse />
      <Footer/>
    </div>
  );
};

export default Home;
