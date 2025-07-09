import resume from "../data/resume";

const Resume = () => {
  return (
    <>
      {resume.map((item, index) => {
        return (
          <div className="mt-20 container mx-auto px-2" key={index}>
            <div className="">
              <h1 className="text-4xl  text-center font-bold mb-15">
                {item.title}
              </h1>
            </div>

            <div className=" grid grid-cols-1 md:grid-cols-2 gap-10">
              {item.moreInfo.map((element, i) => {
                return (
                  <div
                    className="flex flex-col gap-2 border-b-2 border-gray-600/60 pb-2"
                    key={i}
                  >
                    <div className="mb-5">
                      <h1 className="text-3xl font-bold text-gray-600">
                        {element.subTitle}
                      </h1>
                    </div>

                    <h2 className="text-xl font-bold text-gray-600">
                      {element.digri}
                    </h2>
                    <h3 className="text-xl font-semibold text-gray-600">
                      {element.univercity}
                    </h3>
                    <p className="text-lg tracking-wide text-gray-700">
                      {element.discription}
                    </p>
                  </div>
                );
              })}
            </div>

            <div className="flex mt-10 w-fit mx-auto">
              <button className="bg-orange-600/10 py-2 px-6 rounded-md border-2 border-orange-600 font-semibold text-orange-600 hover:bg-orange-600 hover:text-white transition-all cursor-pointer flex gap-3">
                <i className={item.icon}></i>
                {item.downloadCV}
              </button>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default Resume;
