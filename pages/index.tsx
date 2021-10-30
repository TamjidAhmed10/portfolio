import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import AboutMe from "../components/AboutMe";
import { NextPage } from "next";
const Home: NextPage = () => {
  return (
    <div>
      <Navbar />

      <Hero />

      <AboutMe />
    </div>
  );
};

export default Home;
