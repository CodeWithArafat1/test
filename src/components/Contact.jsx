import contact from "../data/contact";

const Contact = () => {
  return (
    <>
      {contact.map((item, index) => {
        return (
          <div className="mt-20 bg-blue-300/40 py-10" key={index}>
            <div className="container mx-auto px-2 grid grid-cols-1 md:grid-cols-2 gap-5">
              <div className="flex flex-col gap-7 mb-10 md:mb-0">
                <h1 className="text-3xl font-bold">{item.title}</h1>
                <p className="text-lg text-gray-700 tracking-wide">
                  {item.discription}
                </p>

                <div className="flex gap-5">
                  {item.icons.map((ele, i) => {
                    return (
                      <a
                        href={ele.link}
                        target="_blank"
                        className="flex gap-5 bg-white  w-12 h-12 justify-center items-center rounded-full"
                        key={i}
                      >
                        <i className={`${ele.icon}  text-3xl text-orange-600`}></i>
                      </a>
                    );
                  })}
                </div>
              </div>

              <div className="">
                <form className="flex flex-col gap-5">
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full border-2 p-2 border-orange-600 rounded-md outline-0"
                  />
                  <input
                    type="text"
                    placeholder="Your Email"
                    className="w-full border-2 p-2 border-orange-600 rounded-md outline-0"
                  />
                  <textarea
                    rows="7"
                    className="w-full border-2 p-2 border-orange-600 rounded-md outline-0"
                    placeholder="Massage"
                  ></textarea>
                  <button
                    type="submit"
                    className="bg-orange-600 text-white py-2 px-4 rounded-md w-fit cursor-pointer"
                  >
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default Contact;
