import React, { useState } from "react";
import { Link } from "react-scroll";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <header className="fixed top-0 left-0 w-full bg-blue-600 z-50">
      <nav className="flex justify-between items-center h-16 px-4">
        <div>
          <a href="#" className="text-white text-lg font-bold">
            John Doe
          </a>
        </div>

        <div className={`md:flex ${showMenu ? "block" : "hidden"}`}>
          <ul className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-8">
            {["Home", "About", "Skills", "Portfolio", "Contact"].map((item) => (
              <li key={item}>
                <Link
                  to={item.toLowerCase()}
                  smooth={true}
                  duration={500}
                  className="text-white hover:text-blue-300 cursor-pointer"
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-white text-2xl">
            <i className="bx bx-menu"></i>
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;