const Reason = () => {
    const data = [
      {
        image: "src/images/icon-online.svg",
        header: "Online Banking",
        text: "Our modern web and mobile application allow you to keep track of your finances wherever you are in the world.",
      },
      {
        image: "src/images/icon-budgeting.svg",
        header: "Simple Budgeting",
        text: "See exactly where your money goes each month. Receive notification when you are close to hitting your limits.",
      },
      {
        image: "src/images/icon-onboarding.svg",
        header: "Fast Onboarding",
        text: "We dont do branches.Open your account in minutes online and start taking control of your finances right away.",
      },
      {
        image: "src/images/icon-api.svg",
        header: "Open API",
        text: "Manage your savings,investments,pension,and much more from one account.Tracking your money has never been easier.",
      },
    ];
    return (
      <div className="bg-[hsl(220,16%,96%)] pt-12 mt-[-10px] pb-5 px-4 sm:px-10 lg:px-16">
       
        <div className="w-full  lg:w-[50%] p-6  sm:p-12 md:p-16 lg:p-[2rem_1rem_0.5rem_2rem] text-left md:text-left">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl text-[hsl(233,26%,24%)] break-words ">
            Why choose Easybank
          </h1>
          <p className="mt-4 text-md sm:text-lg leading-relaxed text-[hsl(233,8%,62%)] ">
            We leverage Open Banking to turn your bank account into your
            financial hub. Control your finances like never before.
          </p>
        </div>
        <div className="flex flex-wrap justify-center sm:justify-between w-full gap-x-8 gap-y-12 mt-8 sm:mt-12 md:mt-16 lg:mt-[5rem] px-4 sm:px-8">
          {data.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center sm:items-start text-center sm:text-left w-full sm:w-[48%] lg:w-[23%]"
            >
              <img src={item.image} alt="" className="w-[60px] mb-6" />
              <h1 className="text-black text-xl font-semibold mb-2">
                {item.header}
              </h1>
              <p className="w-[90%] sm:w-[80%] text-[hsl(233,8%,62%)] lg:w-[70%] text-md">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    );
};
export default Reason;

