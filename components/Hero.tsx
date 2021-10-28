import Image from 'next/image'
const Hero = () => {
    return (
      <div>
        <div className="hero  bg-base-200">
          <div className="flex-col hero-content lg:flex-row-reverse">
            <div className=" max-w-sm"></div>
            <div className="h-64 w-96 relative">
              <Image
                src={"/tamjid.jpg"}
                alt="Picture of the author"
                layout="fill" // required
                objectFit="cover"
                priority // change to suit your needs
                className="rounded-sm" // just an example
              />
            </div>
            <div>
              <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
              <p className="mb-5">
                Provident cupiditate voluptatem et in. Quaerat fugiat ut
                assumenda excepturi exercitationem quasi. In deleniti eaque aut
                repudiandae et a id nisi.
              </p>
              <button className="btn btn-primary">Get Started</button>
            </div>
          </div>
        </div>
      </div>
    );
}

export default Hero
