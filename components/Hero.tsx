import Image from "next/image";
const Hero: React.FC = () => {
  return (
    <div className=" bg-customGreen-two w-full text-black py-10" id="hero">
      <div className="grid grid-cols-1 md:grid-cols-4 ">
        <div className="md:col-span-2 m-auto order-last customclass p-10">
          <h1 className=" text-3xl">I am Tamjid Ahmed.</h1>
          <p className="">React Developer</p>
          <p className=" text-sm">Email: tamjidahammad1996@gmail.com</p>
        </div>
        <div className="avatar md:col-span-2 m-auto py-4">
          <div className="rounded-full shadow-3xl w-64 h-64 ring ring-offset-1 relative">
            <Image
              src="/tamjid.jpg"
              alt="Picture of the author"
              layout="fill"
              objectFit="cover"
              priority={true}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
