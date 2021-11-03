const Certification:React.FC = () => {
    return (
      <div className="py-14 bg-indigo-100 ">
        <h1
          className=" text-center text-3xl w-44 bg-indigo-200 mx-auto shadow-2xl"
          id="certification1"
        >
          Certification
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 p-10">
          <div className="card text-center shadow-lg bg-indigo-50">
            <figure className="px-10 pt-10">
              <img
                src="https://images.weserv.nl/?url=https%3A%2F%2Fcodedamn-user-screenshots.s3.amazonaws.com%2Fc360e28b1987edba03edd7fe81967b1053e0f223%2F1629241637052.png&w=1920&q=75"
                className="rounded-xl"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">shadow, center, padding</h2>
            </div>
          </div>
          <div className="card text-center shadow-lg bg-indigo-50">
            <figure className="px-10 pt-10">
              <img
                src="https://images.weserv.nl/?url=https%3A%2F%2Fcodedamn-user-screenshots.s3.amazonaws.com%2Fc360e28b1987edba03edd7fe81967b1053e0f223%2F1629241637052.png&w=1920&q=75"
                className="rounded-xl"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">shadow, center, padding</h2>
            </div>
          </div>
          <div className="card text-center shadow-lg bg-indigo-50">
            <figure className="px-10 pt-10">
              <img
                src="https://images.weserv.nl/?url=https%3A%2F%2Fcodedamn-user-screenshots.s3.amazonaws.com%2Fc360e28b1987edba03edd7fe81967b1053e0f223%2F1629241637052.png&w=1920&q=75"
                className="rounded-xl"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">shadow, center, padding</h2>
            </div>
          </div>
        </div>
      </div>
    );
}

export default Certification
