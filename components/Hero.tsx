
const Hero:React.FC = () => {
  return (
    <div className=" bg-green-300 w-full">
      <div className="grid grid-cols-1 md:grid-cols-4 ">
        <div className="md:col-span-2 m-auto order-last">
          <h1 className=" text-3xl">Hi I am Tamjid Ahmed.</h1>
          <p className="">Web Developer</p>
          <p className=" text-lg">Stack: NextJs | Firebase | Tailwind </p>
        </div>
        <div className="avatar md:col-span-2 m-auto py-4">
          <div className="rounded-full w-64 h-64 ring ring-offset-1">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/tamjid.jpg" alt="hey" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
