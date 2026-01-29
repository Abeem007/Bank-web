const Main = () => {
  return (
    <div className=" bg-[hsl(0,0%,98%)] flex flex-col lg:flex-row items-center justify-center lg:justify-between lg:h-auto px-6 md:px-18 py-0 overflow-hidden relative pb-5">
     
      <div className="relative lg:left-[100px] sm:left-0 sm:top-[-85px] lg:w-[60%] flex justify-center mt-10 sm:mt-0 order-1 lg:order-2 ">
       
        <img
          src="src/images/bg-intro-desktop.svg"
          alt="Background"
          className="absolute w-full h-full top-0 lg:top-[-3rem] right-9 md:top-[-80px] lg:right-20 z-0"
          style={{ marginTop: "-80px", clipPath: "inset(80px 0 0 0)" }}
        />
        <img
          src="src/images/image-mockups.png"
          alt="Mockups"
          className="relative w-[100%] top-0 left-7 md:top-[-10px] z-10 "
          style={{ marginTop: "-80px", clipPath: "inset(80px 0 0 0)" }}
        />
      </div>
     
      <div className="flex flex-col lg:w-1/2  text-center lg:text-left lg:pl-10 order-2 lg:order-1 mt-1 md:mt-0">
        
        <h1 className=" text-4xl  md:text-nowrap lg:text-wrap md:text-[3.2rem] lg:text-5xl leading-snug font-medium w-full lg:w-[90%] xl:w-[80%] mb-4 text-[hsl(233,26%,24%)]">
          Next Generation Digital Banking
        
        </h1>
        <p className="text-[hsl(233,8%,62%)] w-full lg:w-[80%] mb-6 text-xl md:text-2xl lg:text-lg ">
          Take your financial life online. Your Easybank Account will be a
          one-stop-shop for spending, saving, budgeting, investing, and much
          more.
        </p>
        <button className="text-white cursor-pointer text-sm  px-4 py-3  md:px-6 lg:py-3  border-none rounded-full bg-gradient-to-r from-[hsl(136,65%,51%)] to-[hsl(192,70%,51%)] w-[10rem] m-4 md:m-0 self-center lg:self-start">
          Request Invite
        </button>
      </div>
    </div>
  );
};
export default Main;
