

import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header className="text-[hsl(233,8%,62%)] px-6 py-3 sm:px-6 md:px-8 lg:px-12 xl:px-16 flex items-center justify-between text-[18px] relative">
      <div className="flex items-center">
        <img src="src/images/logo.svg" alt="logo" className="h-7 sm:h-10" />
      </div>

      {/* Desktop Menu (Hidden on small screens, shown on lg+) */}
      <nav className="hidden lg:flex items-center space-x-6 xl:space-x-8 ;">
        {" "}
        <Link
          to="/"
          className="relative hover:text-gray-900 after:content-[''] after:absolute after:left-0 after:bottom-[-17px] after:w-full after:h-[4px] after:bg-[hsl(136,65%,51%)] after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300"
        >
          Home
        </Link>
        <Link
          to="/about"
          className="relative hover:text-gray-900 after:content-[''] after:absolute after:left-0 after:bottom-[-17px] after:w-full after:h-[4px] after:bg-[hsl(136,65%,51%)] after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300"
        >
          About
        </Link>
        <Link
          to="/contact"
          className="relative hover:text-gray-900 after:content-[''] after:absolute after:left-0 after:bottom-[-17px] after:w-full after:h-[4px] after:bg-[hsl(136,65%,51%)] after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300"
        >
          Contact
        </Link>
        <Link
          to="/blog"
          className="relative hover:text-gray-900 after:content-[''] after:absolute after:left-0 after:bottom-[-17px] after:w-full after:h-[4px] after:bg-[hsl(136,65%,51%)] after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300"
        >
          Blog
        </Link>
        <Link
          to="/careers"
          className="relative hover:text-gray-900 after:content[''] after:absolute after:left-0 after:bottom-[-17px] after:w-full after:h-[4px] after:bg-[hsl(136,65%,51%)] after:scale-x-0 hover:after:scale-x-100 after:transistion-transform after:duration-300"
        >
          Careers
        </Link>
      </nav>

      {/* Request Invite Button (Hidden on small screens, visible from md and larger) */}
      <button className="hidden md:block text-white text-sm px-4 sm:px-5 py-3 rounded-full bg-gradient-to-r from-green-400 to-blue-400 cursor-pointer w-[10rem]">
        Request Invite
      </button>

      {/* Hamburger Menu Button (Only visible on small and medium screens) */}
      <div className="md:hidden">
        <button onClick={() => setIsOpen(!isOpen)}>
          {!isOpen ? (
            <img
              src="src/images/icon-hamburger.svg"
              alt="Open Menu"
              className="h-6 w-6"
            />
          ) : (
            <img
              src="src/images/icon-close.svg"
              alt="Close Menu"
              className="h-6 w-6 "
            />
          )}
        </button>
      </div>

      {/* Mobile Menu (Only visible when open) */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className=" md:hidden fixed inset-0 bg-[rgba(19,19,21,0.5)] z-40"
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
            className="md:hidden absolute top-full left-1/2 transform -translate-x-1/2 w-[90%] max-w-[full] bg-white shadow-lg rounded-md py-6 mt-2 z-50"
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
                    <Link
                      to={path}
                      key={path}
                      onClick={() => setIsOpen(false)}
                      className="hover:text-gray-900 cursor-pointer text-lg font-medium"
                    >
                      {labels[i]}
                    </Link>
                  );
                }
              )}
            </ul>
            {/* <ul className="flex flex-col items-center space-y-4 text-gray-700 ">
            <Link
              to="/"
              onClick={() => setIsOpen(false)}
              className="hover:text-gray-900 cursor-pointer"
            >
              Home
            </Link>
            <Link
              to="/about"
              onClick={() => setIsOpen(false)}
              className="hover:text-gray-900 cursor-pointer"
            >
              About
            </Link>
            <Link to="/contact" className="hover:text-gray-900 cursor-pointer">
              Contact
            </Link>
            <Link
              to="/blog"
              onClick={() => setIsOpen(false)}
              className="hover:text-gray-900 cursor-pointer"
            >
              Blog
            </Link>
            <Link
              to="/careers"
              onClick={() => setIsOpen(false)}
              className="hover:text-gray-900 cursor-pointer"
            >
              Careers
            </Link>
          </ul> */}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
export default Header;
