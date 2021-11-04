import { useRouter } from "next/router";
import Image from "next/image"
const Certification: React.FC = () => {
    const router = useRouter();

  return (
    <div className="py-14 customGreen-six ">
      <h1
        className=" text-center text-3xl w-44 customGreen-seven mx-auto shadow-2xl"
        id="certification1"
      >
        Certification
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 p-10">
        <div
          className="card text-center shadow-lg bg-indigo-50 cursor-pointer"
          onClick={() => {
            router.push(
              "https://codedamn.com/certificate/verify/c360e28b1987edba03edd7fe81967b1053e0f223"
            );
          }}
        >
          <figure className="px-10 pt-10">
            <div className="h-48 w-full relative">
              <Image
                src="/nextjs.png"
                alt="Picture of the author"
                layout="fill" // required
                objectFit="cover" // change to suit your needs
                className="" // just an example
              />
            </div>
            {/* <img
              src="/nextjs.png"
              className="object-cover h-48 w-full rounded-xl"
            /> */}
          </figure>
          <div className="card-body">
            <h2 className="card-title select-none">Next.js Fundamentals</h2>
          </div>
        </div>
        <div
          className="card text-center shadow-lg bg-indigo-50 cursor-pointer"
          onClick={() => {
            router.push(
              "https://codedamn.com/certificate/verify/fc5b2179946c3b77d9dfa557f2c25f439de2ebeb"
            );
          }}
        >
          <figure className="px-10 pt-10">
            {/* <img
              src="/react.png"
              className="object-cover h-48 w-full rounded-xl"
            /> */}
            <div className="h-48 w-full relative">
              <Image
                src="/react.png"
                alt="Picture of the author"
                layout="fill" // required
                objectFit="cover" // change to suit your needs
                className="" // just an example
              />
            </div>
          </figure>
          <div className="card-body">
            <h2 className="card-title select-none">React Tutorials</h2>
          </div>
        </div>
        <div
          className="card text-center shadow-lg bg-indigo-50 cursor-pointer"
          onClick={() => {
            router.push(
              "https://www.coursera.org/account/accomplishments/verify/62R3H6LDYZTC"
            );
          }}
        >
          <figure className="px-10 pt-10">
            <div className="h-48 w-full relative">
              <Image
                src="/CourseEra.png"
                alt="Picture of the author"
                layout="fill" // required
                objectFit="contain" // change to suit your needs
                className="" // just an example
              />
            </div>
            {/* <img
              src="/CourseEra.png"
              className="object-conatain h-48 w-full rounded-xl"
            /> */}
          </figure>
          <div className="card-body">
            <h2 className="card-title select-none">Javascript Fundamentals</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Certification;
