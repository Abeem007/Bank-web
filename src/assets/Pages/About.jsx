import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import backgroundImage from "../../images/Money.jpg";

const About = () => {
  const [isVisible, setIsVisible] = useState(false)
  
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 30) {
        setIsVisible(true)
      } else {(setIsVisible(false));
    }
  };
  window.addEventListener("scroll", handleScroll);
  return () => window.removeEventListener("scroll", handleScroll);
},
    [])

  return (
    <div className="pb-3 bg-[hsl(220,16%,96%)] min-h-screen w-full">
      <div className="relative h-[50vh] w-full overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center "
          style={{ backgroundImage: `url(${backgroundImage})` }}
        />

        {/* Overlay Text */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative text-white flex items-end justify-start h-full w-full p-6 sm:p-10"
          // className={`relative text-white flex items-end justify-start h-full w-full p-6 sm:p-10 transition-all duration-700 ease-in-out ${
          //   isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          // }`}
        >
          <span className="bg-[rgba(183,151,107,0.5)] px-4 sm:px-6 py-12 sm:py-20">
            <motion.h2
              initial={{ opacity: 0 }}
              animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
              transition={{ delay: 0.3 }}
              className="text-xl sm:text-2xl font-bold"
            >
              Making Banking as easy as 1, 2, 3.
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
              transition={{ delay: 0.5 }}
              className="text-sm sm:text-base mt-2 "
            >
              We seek to impart financial literacy at every phase of life.
            </motion.p>
          </span>
        </motion.div>
      </div>

      {/* About Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: true }}
        className="px-8 py-10 md:px-16 md:py-20 text-[hsl(233,26%,24%)]"
      >
        <h2 className="text-2xl sm:text-3xl pb-5 font-bold">
          About <span className="italic">easy Bank</span>
        </h2>
        <p className="text-base sm:text-lg pb-3 leading-relaxed">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sint minus
          fugiat necessitatibus maxime unde soluta impedit repellendus a
          repudiandae eaque illum id quae aperiam, praesentium quod ipsum alias
          tempora facere. Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Ad alias accusantium iusto, nostrum quibusdam vitae eligendi
          magni unde, eveniet aspernatur qui corporis fugit repellat
          voluptatibus hic vel? Inventore, impedit adipisci.
        </p>
        <p className="text-base sm:text-lg leading-relaxed">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque ullam
          quo error ex! Aperiam, perferendis illum consectetur inventore qui
          culpa obcaecati facilis delectus commodi dicta adipisci architecto
          provident velit fugiat. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Quas, facere optio ducimus doloribus amet nesciunt
          assumenda maiores ipsum veniam quia nam quae quod fugit eaque voluptas
          rem hic repellat dicta!
        </p>
      </motion.div>
    </div>
  );
};

export default About;


