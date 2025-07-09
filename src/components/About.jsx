import about from "../data/about";

const About = () => {
  return (
    <>
      {about.map((item, index) => {
        return (
          <section className="mt-10 bg-blue-200/40 px-2 py-10" key={index}>
            <div className="container mx-auto border p-4 rounded-xl flex flex-col gap-8">
              <h1 className="text-center text-4xl font-bold">{item.title}</h1>

              <p className="text-gray-800 leading-7 tracking-wide text-center">
                {item.paragraph}
              </p>

              <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4">
                {item.info.map((element, i) => {
                  return (
                    <div className="text-center" key={i}>
                      <p className="text-xl font-semibold text-gray-700">
                        {element.subTitle}
                      </p>
                      <h4 className="text-xl font-bold text-orange-600">
                        {element.inFormation}
                      </h4>
                    </div>
                  );
                })}
              </div>
            </div>
          </section>
        );
      })}
    </>
  );
};

export default About;
