import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import AboutMe from "../components/AboutMe";
import { NextPage } from "next";
import Projects from "../components/Projects";
import Certification from "../components/Certification";
import ContactUse from "../components/ContactUse";
import Footer from "../components/Footer";
import Head from "next/head";


const Home: NextPage = () => {
  return (
    <div className="select-none ">
      <Head>
        <title>Portfolio By Tamjid</title>
        <link rel="icon" type="image/png" href="/portfoliologo.png" />
      </Head>
      <Navbar />
      <Hero />
      <AboutMe />
      <Projects />
      <Certification />
      <ContactUse />
      <Footer />
    </div>
  );
};

export default Home;
