const Careers = () => {
  return (
    <div className="bg-[hsl(220,16%,96%)] min-h-screen  text-[hsl(233,26%,24%)]">
      <div className="flex justify-center items-center bg-[hsl(220,16%,96%)]">
        <div className="bg-[hsl(0,0%,100%)] border-2 flex flex-col md:flex-row border-gray-100 m-10 md:m-20">
          <div className="w-full md:w-1/2 p-6 md:p-10">
            <h2 className="text-2xl md:text-3xl md:text-nowrap pb-2">
              Careers at <span className="italic">easyBank</span>
            </h2>
            <h3 className="text-xl pb-2 text-[hsl(136,65%,51%)]">
              A World of Opportunities
            </h3>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa
              voluptatibus minus delectus cum rem! Veritatis impedit,
              consectetur commodi ipsam earum vel corporis. Ut saepe, distinctio
              labore numquam porro magnam vitae.
            </p>
          </div>
          <div className="w-full md:w-1/2 flex justify-center">
            <img
              src="src/images/careers.jpg"
              alt="Careers"
              className="w-full h-auto object-cover "
            />
          </div>
        </div>
      </div>
      <div className="bg-[hsl(220,16%,96%)] mb-0">
        <div className="bg-[hsl(0,0%,100%)] p-6 md:p-[4rem_8rem] flex flex-col items-center pb-3.5">
          <p className="pb-4 text-center md:text-left">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi
            cupiditate molestias non repellendus minus architecto saepe porro
            dolorem, odit ex facere eveniet dolorum harum adipisci. Deserunt
            blanditiis quo mollitia eum. Lorem ipsum dolor sit amet, consectetur
            adipisicing elit. Nulla voluptas dolores, voluptates ipsum illum
            ipsa velit sit dolore laborum rerum aliquam deserunt repudiandae
            fugit repellendus architecto autem cum minima perferendis.
          </p>
          <button className="text-white text-sm px-5 py-3 rounded-full bg-gradient-to-r from-green-400 to-blue-400 cursor-pointer w-[10rem] mb-2 mt-2">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Careers;

// const Careers = () => {
//   return (
//     <div className="bg-[hsl(220,16%,96%)] min-h-screen text-[hsl(233,26%,24%)]">
//       <div className="flex flex-col md:flex-row bg-[hsl(220,16%,96%)] justify-center items-center p-4 md:p-20">
//         <div className="bg-[hsl(0,0%,100%)] border-2 flex flex-col md:flex-row border-gray-100 w-full md:w-auto m-4 md:m-20">
//           <div className="w-full md:w-1/2 p-6 md:p-10">
//             <h2 className="text-3xl pb-2">
//               Careers at <span className="italic">easyBank</span>
//             </h2>
//             <h3 className="text-xl pb-2 text-[hsl(136,65%,51%)]">
//               A World of Opportunities
//             </h3>
//             <p>
//               Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa
//               voluptatibus minus delectus cum rem! Veritatis impedit,
//               consectetur commodi ipsam earum vel corporis. Ut saepe, distinctio
//               labore numquam porro magnam vitae.
//             </p>
//           </div>
//           <div className="w-full md:w-1/2 h-auto flex justify-center">
//             <img
//               src="src/images/careers.jpg"
//               alt="Careers"
//               className="w-full h-auto object-cover"
//             />
//           </div>
//         </div>
//       </div>
//       <div className="bg-[hsl(220,16%,96%)] p-4 md:p-20">
//         <div className="bg-[hsl(0,0%,100%)] p-6 md:p-[4rem_8rem] flex flex-col items-center pb-3.5">
//           <p className="pb-4 text-center">
//             Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi
//             cupiditate molestias non repellendus minus architecto saepe porro
//             dolorem, odit ex facere eveniet dolorum harum adipisci. Deserunt
//             blanditiis quo mollitia eum. Lorem ipsum dolor sit amet, consectetur
//             adipisicing elit. Nulla voluptas dolores, voluptates ipsum illum
//             ipsa velit sit dolore laborum rerum aliquam deserunt repudiandae
//             fugit repellendus architecto autem cum minima perferendis.
//           </p>
//           <button className="text-white text-sm px-6 py-3 rounded-full bg-gradient-to-r from-green-400 to-blue-400 cursor-pointer w-[10rem] mb-2 mt-2">
//             Get Started
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Careers;

// const Careers = () => {
//   return (
//     <div className="bg-[hsl(220,16%,96%)] min-h-screen text-[hsl(233,26%,24%)]">
//       {" "}
//       <div className="  flex  bg-[hsl(220,16%,96%)]  justify-center  items-center">
//         <div className="bg-[hsl(0,0%,100%)] border-2 flex border-gray-100 m-20">
//           <div className=" w-[50%]  p-25">
//             <h2 className="text-3xl pb-2">
//               Careers at <span className="italic">easyBank</span>
//             </h2>
//             <h3 className="text-xl pb-2 text-[hsl(136,65%,51%)]">
//               A World of Opportunities
//             </h3>

//             <p>
//               Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa
//               voluptatibus minus delectus cum rem! Veritatis impedit,
//               consectetur commodi ipsam earum vel corporis. Ut saepe, distinctio
//               labore numquam porro magnam vitae.
//             </p>
//           </div>
//           <div className="w-[50%] h-[100%] ">
//             <img src="src/images/careers.jpg" alt="Careers" />
//           </div>
//         </div>
//       </div>
//       <div className="bg-[hsl(220,16%,96%)]">
//         <div className="bg-[hsl(0,0%,100%)] p-[4rem_8rem] flex flex-col items-center pb-3.5 ">
//           <p className="pb-4">
//             Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi
//             cupiditate molestias non repellendus minus architecto saepe porro
//             dolorem, odit ex facere eveniet dolorum harum adipisci. Deserunt
//             blanditiis quo mollitia eum.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla voluptas dolores, voluptates ipsum illum ipsa velit sit dolore laborum rerum aliquam deserunt repudiandae fugit repellendus architecto autem cum minima perferendis.
//           </p>
//           <button className="md:block text-white text-sm px-4 sm:px-5 py-3 rounded-full bg-gradient-to-r from-green-400 to-blue-400 cursor-pointer w-[10rem] mb-2 mt-2">
//             Get Started
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };
// export default Careers;
