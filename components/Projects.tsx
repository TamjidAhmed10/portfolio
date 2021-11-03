/* eslint-disable @next/next/no-img-element */
const Projects: React.FC = () => {
  return (
    <div className="bg-customGreen-four py-10">
      <h1
        className="text-3xl text-center w-36 bg-customGreen-two mx-auto shadow-2xl"
        id="projects"
      >
        Projects
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 p-10">
        <div className="card text-center hover:shadow-2xl customclass">
          <figure className="px-10 pt-10">
            <img
              src="https://picsum.photos/id/1005/400/250"
              className="rounded-xl"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">shadow, center, padding</h2>
            <p>
              Rerum reiciendis beatae tenetur excepturi aut pariatur est eos.
              Sit sit necessitatibus veritatis sed molestiae voluptates incidunt
              iure sapiente.
            </p>
            <div className="justify-center card-actions">
              <button className="btn btn-outline btn-accent">More info</button>
            </div>
          </div>
        </div>
        <div className="card text-center shadow-2xl customclass">
          <figure className="px-10 pt-10">
            <img
              src="https://picsum.photos/id/1005/400/250"
              className="rounded-xl"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">shadow, center, padding</h2>
            <p>
              Rerum reiciendis beatae tenetur excepturi aut pariatur est eos.
              Sit sit necessitatibus veritatis sed molestiae voluptates incidunt
              iure sapiente.
            </p>
            <div className="justify-center card-actions">
              <button className="btn btn-outline btn-accent">More info</button>
            </div>
          </div>
        </div>
        <div className="card text-center shadow-2xl customclass">
          <figure className="px-10 pt-10">
            <img
              src="https://picsum.photos/id/1005/400/250"
              className="rounded-xl"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">shadow, center, padding</h2>
            <p>
              Rerum reiciendis beatae tenetur excepturi aut pariatur est eos.
              Sit sit necessitatibus veritatis sed molestiae voluptates incidunt
              iure sapiente.
            </p>
            <div className="justify-center card-actions">
              <button className="btn btn-outline btn-accent">More info</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
