const AboutMe: React.FC = () => {
  return (
    <div
      id="aboutme"
      className=" px-6 md:px-44 py-10 tracking-wider bg-customGreen-three text-black "
    >
      <div className="">
        <h2 className="text-3xl text-center pb-4 bg-customGreen-two w-40 bg-gray-50 mx-auto">About me</h2>
        <p className="text-center customclass">
          My name is Tamjid Ahmed. BSc. Engineering in EEE. I am from
          Bangladesh. I’m a full-stack web developer who’s working with the
          latest and most effective technologies. The main stack of technologies
          I specialize in is React plus frameworks/libraries based on this
          library. I am a self-motivated person who is always looking for new
          challenges and challenges to overcome. i name my stack NFT stack which
          means NextJS + Firebase + TailwindCSS.
        </p>
      </div>
    </div>
  );
};

export default AboutMe;
