import hero from "../data/hero";

const Heor = () => {
  return (
    <>
      <header className="bg-blue-400/50 bg-no-repeat">
        <div className="container flex-col-reverse mx-auto px-4 py-10 flex  lg:flex-row items-center justify-between  gap-5 h-[90vh]">
          {/* Left Text Section */}
          <div className="w-full lg:w-1/2 flex flex-col gap-4 text-center lg:text-left">
            <h4 className="text-2xl sm:text-3xl font-medium">{hero.im}</h4>
            <h1 className="text-4xl sm:text-5xl font-bold text-orange-600 leading-tight">
              {hero.name}
            </h1>
            <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
              {hero.paragraph}
            </p>

            <div className="flex  flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button className="bg-orange-600/10 py-2 px-6 rounded-md border-2 border-orange-600 font-semibold text-orange-600 hover:bg-orange-600 hover:text-white transition-all cursor-pointer flex gap-3 justify-center">
                <i className={hero.icon}></i>
                {hero.btnCV}
              </button>

              <button className="bg-orange-600 py-2 px-6 text-white rounded-md font-semibold hover:bg-orange-700 transition-all cursor-pointer">
                {hero.btnContact}
              </button>
            </div>
          </div>

          {/* Right Image Section */}
          <div className="flex justify-center items-center">
            <img src={hero.heroImg} alt="hero" className=" w-60 md:w-[50%]" />
          </div>
        </div>
      </header>
    </>
  );
};

export default Heor;
