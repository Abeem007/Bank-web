import { useState } from "react";
import Logo from "../../images/logo.svg"

import { motion,AnimatePresence } from "framer-motion";

const Contact = () => {
  const [activeTab,setActiveTab] = useState("office")
  return (
    <div className="min-h-screen bg-[hsl(220,16%,96%)] ">
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 50 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="relative w-full h-[50vh] bg-cover bg-center flex items-center justify-center text-white bg-[url('/src/images/Contactus.jpg')]"
      >
        <motion.div
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8, ease: "easeOut" }}
          className="w-full max-w-4xl lg:absolute lg:bottom-[-30px] lg:left-4  bg-opacity-100 p-4 sm:p-6 m-4 lg:m-0 rounded-lg text-left will-change-transform"
          style={{
            backgroundColor: "#b45309",
            background: "#b45309", 
          }}
        >
          <img src={Logo} alt="" className="w-20 sm:w-40" />
          <h1 className="text-lg sm:text-xl md:text-2xl font-bold mt-3">
            Our Promise Kept
          </h1>
          <p className="mt-2 text-xs sm:text-sm md:text-base">
            Our Customer care agents are available round the clock to provide
            assistance on all your enquiries.
          </p>
          <p className="mt-2 text-xs sm:text-sm md:text-base">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odio id
            inventore earum, nisi assumenda provident laboriosam quam voluptates
            sit! Asperiores nobis rem sunt fuga molestias! Quasi quisquam veniam
            placeat accusamus.
          </p>
        </motion.div>
      </motion.div>

      <div className="   mt-16 mb-4 lg:mb-0  flex flex-col items-center px-4sm:px-6 py-0 md:py-15">
        <h1 className="text-2xl sm:text-2xl md:text-3xl p- text-center font-bold mb-3 md:mb-7">
          Contact Details
        </h1>
        <div className="w-[90%] max-w-4xl p-4 sm:p-6 bg-[hsl(0,0%,100%)] rounded-md shadow-md flex flex-col space-y-6">
          <div className="flex flex-col sm:flex-row sm:space-x-4">
            <h3
              className={`font-bold text-base sm:text-lg cursor-pointer px-4 py-2 ${
                activeTab === "office"
                  ? "border-b-2 border-[hsl(136,65%,51%)] text-[hsl(136,65%,51%)]"
                  : ""
              }`}
              onClick={() => setActiveTab("office")}
            >
              Office Address
            </h3>
            <h3
              className={`font-bold text-sm sm:text-base cursor-pointer px-4 py-2  ${
                activeTab === "helpdesk"
                  ? "border-b-2 border-[hsl(136,65%,51%)] text-[hsl(136,65%,51%)]"
                  : ""
              }`}
              onClick={() => setActiveTab("helpdesk")}
            >
              Helpdesk
            </h3>
          </div>
          <div className=" relative min-h-[150px]">
            <AnimatePresence mode="wait">
              {activeTab === "office" && (
                <motion.div
                  key="office"
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 30 }}
                  transition={{ duration: 0.3 }}
                  className=" absolute lg:static w-full "
                >
                  <h4 className="text-base sm:text-lg pb-2 text-[hsl(233,26%,24%)]">
                    <img src={Logo} alt="" className="w-20 sm:w-30" />
                  </h4>
                  <h4 className="text-sm sm:text-base font-bold pt-1 pb-2 text-[hsl(233,26%,24%)] ">
                    {" "}
                    Head Office Address
                  </h4>
                  <p className=" text-sm sm:text-base text-gray-700">
                    1234 Main Street
                  </p>
                  <p className="text-sm sm:text-base text-gray-700">
                    Springfield, NY 10001
                  </p>
                  <p className=" text-sm sm:text-base text-gray-700">
                    United States
                  </p>
                </motion.div>
              )}
              {activeTab === "helpdesk" && (
                <motion.div
                  key="helpdesk"
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -30 }}
                  transition={{ duration: 0.3 }}
                  className="absolute lg:static w-full text-[hsl(233,26%,24%)]  pl-3"
                >
                  <p className="pb-2 text-sm sm:text-base ">
                    Tel: +44 000 010 57
                  </p>
                  <p className="pb-2 text-sm sm:text-base">
                    Tel: +44 000 010 57
                  </p>
                  <p className="pb-2 text-sm sm:text-base">
                    Tel: +44 000 010 57
                  </p>
                  <p className=" text-sm lg:text-base text-[hsl(136,65%,51%)]">
                    Email: EasyContact.Compalints@easybankgroup.com
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Contact;

{
 
}
