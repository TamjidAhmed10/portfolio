import { useRouter } from "next/router";
import Image from "next/image";

const Projects: React.FC = () => {
  const router = useRouter();

  return (
    <div className="bg-customGreen-four py-10">
      <h1
        className="text-3xl text-center w-36 bg-customGreen-two mx-auto shadow-2xl"
        id="projects"
      >
        Projects
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 p-10">
        <div
          className="card text-center customclass cursor-pointer select-none  "
          onClick={() => {
            router.push("https://memoirbynatasha.vercel.app/");
          }}
        >
          <figure className="px-10 pt-10">
            <div className="h-48 w-full relative">
              <Image
                src="/blog_by_nata.png"
                alt="Picture of the author"
                layout="fill"
                objectFit="cover"
                className=""
              />
            </div>
          </figure>
          <div className="card-body ">
            <h2 className="card-title ">Full Stack Blog Site</h2>
            <p>
              This project is a full stack blog site. It is built with React,
              NextJS, and Firebase. It is a multi page application. Admin panel
              is separeted from the blog.
            </p>
            <div className="justify-center card-actions">
              <button className="btn btn-outline ">More info</button>
            </div>
          </div>
        </div>
        <div
          className="card text-center  customclass cursor-pointer select-none  "
          onClick={() => {
            router.push("https://galleryxd.vercel.app/");
          }}
        >
          <figure className="px-10 pt-10">
            <div className="h-48 w-full relative">
              <Image
                src="/gallery.png"
                alt="Picture of the author"
                layout="fill"
                objectFit="cover"
              />
            </div>
          </figure>
          <div className="card-body">
            <h2 className="card-title">Photo Gallery App</h2>
            <p>
              This is a simple full stack gallery project. It is built with
              React, NextJS , Firebase and Tailwind. Admin can easily add images
              from a simple admin panel.
            </p>
            <div className="justify-center card-actions">
              <button className="btn btn-outline ">More info</button>
            </div>
          </div>
        </div>
        <div
          className="card text-center  customclass cursor-pointer select-none  "
          onClick={() => {
            router.push("https://weatherapplite.vercel.app/");
          }}
        >
          <figure className="px-10 pt-10">
            <div className="h-48 w-full relative">
              <Image
                src="/weatherApp.png"
                alt="Picture of the author"
                layout="fill"
                objectFit="cover"
              />
            </div>
          </figure>
          <div className="card-body">
            <h2 className="card-title">Weather App</h2>
            <p>
              This is a frontend weather app. It is built with React, NextJS,
              and OpenWeatherMap API. It is a single page application. One can
              search for any city and get the weather.
            </p>
            <div className="justify-center card-actions">
              <button className="btn btn-outline">More info</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
