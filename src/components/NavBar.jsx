import navBar from "../data/nav";

const NavBar = () => {
  return (
    <>
      <div>
        <nav className="flex items-center justify-between container mx-auto my-4 px-2">
          <a href="#" className="text-4xl font-bold text-orange-600">
            {navBar.logo}
          </a>

          <div className="flex gap-5 text-xl font-medium items-center">
            <a href="#">{navBar.portfolio}</a>
            <a href="#">{navBar.blog}</a>
            <a
              href={navBar.hireLink}
              className="bg-orange-500 text-white py-1 px-2 rounded-md"
            >
              {navBar.hireMe}
            </a>
          </div>
        </nav>
      </div>
    </>
  );
};

export default NavBar;
