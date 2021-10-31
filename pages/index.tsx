import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import AboutMe from "../components/AboutMe";
import { NextPage } from "next";
import Projects from "../components/Projects";
const Home: NextPage = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <AboutMe />
      <Projects/>
    </div>
  );
};

export default Home;
