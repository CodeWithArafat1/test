import skills from "../data/skills";

const Skills = () => {
  return (
    <>
      {skills.map((item, index) => {
        return (
          <div className="mt-20 container mx-auto px-2" key={index}>
            <div className="flex flex-col gap-5">
              <h1 className="text-4xl text-center font-bold">{item.title}</h1>
              <p className="text-center text-gray-700">{item.description}</p>
            </div>

            <div className="grid mt-20 grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {item.card.map((data, i) => {
                return (
                  <div
                    className="flex flex-col gap-5 bg-blue-400/30 shadow-md p-2 rounded-md"
                    key={i}
                  >
                    <div className="">
                      <img src={data.icons} alt="" />
                    </div>

                    <div className="flex flex-col gap-2 py-2">
                      <h1 className="text-2xl font-bold">{data.subTitle}</h1>
                      <p>{data.subDascription}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        );
      })}
    </>
  );
};

export default Skills;
