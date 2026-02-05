import { useState } from "react";
import Logo from "../images/logo.svg";
import Hamburger from "../images/icon-hamburger.svg";
import Close from "../images/icon-close.svg";
import { NavLink } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header className="text-[hsl(233,8%,62%)] px-6 py-3 md:py-7 lg:py-4  md:px-8 lg:px-12 xl:px-16 flex items-center justify-between text-[18px] fixed top-0 left-0 right-0 z-50 bg-white shadow-sm ">
      <div className="flex items-center">
        <img src={Logo} alt="logo" className="h-7 sm:h-10" />
      </div>

      <nav className="hidden lg:flex items-center space-x-6 xl:space-x-8 ">
        {" "}
        <NavLink
          to="/"
          className={({ isActive }) =>
            `relative hover:text-gray-900 after:content-[''] after:absolute after:left-0 after:bottom-[-17px] after:w-full after:h-[4px] after:bg-[hsl(136,65%,51%)] after:transition-transform after:duration-300 ${
              isActive
                ? "text-gray-900 after:scale-x-100"
                : "after:scale-x-0 hover:after:scale-x-100"
            }`
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) =>
            `relative hover:text-gray-900 after:content-[''] after:absolute after:left-0 after:bottom-[-17px] after:w-full after:h-[4px] after:bg-[hsl(136,65%,51%)] after:transition-transform after:duration-300 ${
              isActive
                ? "text-gray-900 after:scale-x-100"
                : "after:scale-x-0 hover:after:scale-x-100"
            }`
          }
        >
          About
        </NavLink>
        <NavLink
          to="/contact"
          className={({ isActive }) =>
            `relative hover:text-gray-900 after:content-[''] after:absolute after:left-0 after:bottom-[-17px] after:w-full after:h-[4px] after:bg-[hsl(136,65%,51%)] after:transition-transform after:duration-300 ${
              isActive
                ? "text-gray-900 after:scale-x-100"
                : "after:scale-x-0 hover:after:scale-x-100"
            }`
          }
        >
          Contact
        </NavLink>
        <NavLink
          to="/blog"
          className={({ isActive }) =>
            `relative hover:text-gray-900 after:content-[''] after:absolute after:left-0 after:bottom-[-17px] after:w-full after:h-[4px] after:bg-[hsl(136,65%,51%)] after:transition-transform after:duration-300 ${
              isActive
                ? "text-gray-900 after:scale-x-100"
                : "after:scale-x-0 hover:after:scale-x-100"
            }`
          }
        >
          Blog
        </NavLink>
        <NavLink
          to="/careers"
          className={({ isActive }) =>
            `relative hover:text-gray-900 after:content-[''] after:absolute after:left-0 after:bottom-[-17px] after:w-full after:h-[4px] after:bg-[hsl(136,65%,51%)] after:transition-transform after:duration-300 ${
              isActive
                ? "text-gray-900 after:scale-x-100"
                : "after:scale-x-0 hover:after:scale-x-100"
            }`
          }
        >
          Careers
        </NavLink>
      </nav>
      <button className="hidden lg:block text-white text-sm px-4 sm:px-5 py-3 rounded-full bg-gradient-to-r from-green-400 to-blue-400 cursor-pointer w-[10rem]">
        Request Invite
      </button>
      <div className="lg:hidden">
        <button onClick={() => setIsOpen(!isOpen)}>
          {!isOpen ? (
            <img src={Hamburger} alt="Open Menu" className="h-6 w-6" />
          ) : (
            <img src={Close} alt="Close Menu" className="h-6 w-6 " />
          )}
        </button>
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className=" lg:hidden fixed inset-0 bg-[rgba(19,19,21,0.5)] z-40"
            onClick={() => setIsOpen(false)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          ></motion.div>
        )}
        {isOpen && (
          <motion.div
            key="menu"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden fixed top-[4.5rem] left-4 right-4 bg-white shadow-lg rounded-md py-6 z-50"
          >
            <ul className="flex flex-col items-center space-y-4 text-gray-700">
              {["/", "/about", "/contact", "/blog", "/careers"].map(
                (path, i) => {
                  const labels = [
                    "Home",
                    "About",
                    "Contact",
                    "Blog",
                    "Careers",
                  ];
                  return (
                    <NavLink
                      to={path}
                      key={path}
                      onClick={() => setIsOpen(false)}
                      className="hover:text-gray-900 cursor-pointer text-lg font-medium"
                    >
                      {labels[i]}
                    </NavLink>
                  );
                },
              )}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
export default Header;
