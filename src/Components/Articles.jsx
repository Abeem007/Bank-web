const Articles = () => {
    const Articledata = [
      {
        images: "src/images/image-currency.jpg",
        text1: "By Claire Robinson",
        header: "Receive money in any currency with no fees",
        text2:
          "The world is getting smaller and we are becoming more mobile. So why should you be forced to only receive money in a single...",
      },
      {
        images: "src/images/image-restaurant.jpg",
        text1: "By Wilson Hurtton",
        header: "Treat yourself without worrying about money",
        text2:
          "Our simple budgeting feature allows you to separate out your spending and set realistic limits each month.That means you...",
      },
      {
        images: "src/images/image-plane.jpg",
        text1: "By Wilson Hutton",
        header: "Take your Easybank card wherever you go",
        text2:
          "We want you to enjoy your travels. This is why we dont charge any fees on purchase while you are abroad.We will even show you...",
      },
      {
        images: "src/images/image-confetti.jpg",
        text1: "By Claire Robinson",
        header: "Our invite-only Beta accounts are now live!",
        text2:
          " After a lot of hardwork by thhe whole team, we are excited to launch our closed beta.It is easy to request an invite through the site...",
      },
    ];
    return (
      <div className="bg-[hsl(0,0%,98%)] pt-15 py-8 px-4 sm:px-8 lg:px-16">
       
        <h1 className="pl-2 sm:pl-5 pb-5 text-[hsl(233,26%,24%)] text-4xl text-center sm:text-left ">
          Latest Articles
        </h1>

        
        <div className="flex flex-wrap justify-center sm:justify-between gap-6 w-full">
          {Articledata.map((item, index) => (
            <div
              key={index}
              className="flex flex-col w-full sm:w-[48%] lg:w-[23%] p-2"
            >
             
              <img
                src={item.images}
                alt=""
                className="w-full h-[200px] object-cover rounded-sm"
              />

          
              <div className="bg-[hsl(0,0%,100%)] p-6 rounded-sm text-[hsl(233,8%,62%)]">
                <p className="pb-3 text-sm">{item.text1}</p>
                <h1 className="text-[hsl(233,26%,24%)] text-lg font-[500] cursor-pointer hover:text-[hsl(136,65%,51%)] pb-2.5">
                  {item.header}
                </h1>
                <p className="text-sm">{item.text2}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
}
export default Articles;
