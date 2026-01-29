const Footer = () => {
  return (
    <footer className="bg-[hsl(233,26%,24%)] text-white py-8 px-6 sm:px-12 lg:px-16">
      
      <div className="flex flex-col sm:flex-row justify-between items-center sm:items-start gap-8 w-full">
        
        <div className="flex flex-col items-center sm:items-start ">
          <img
            className="mb-6 w-[150px] bg-white"
            src="src/images/logo.svg"
            alt="logo"
          />

        
          <div className="flex gap-4 cursor-pointer ">
            <a href="">
              <img
                src="src/images/icon-facebook.svg"
                alt="facebook"
                className="hover:scale-75"
              />
            </a>
            <a href="">
              <img
                src="src/images/icon-youtube.svg"
                alt="youtube"
                className="hover:scale-75"
              />
            </a>
            <a href="">
              <img
                src="src/images/icon-twitter.svg"
                alt="twitter"
                className="hover:scale-75"
              />
            </a>
            <a href="">
              <img
                src="src/images/icon-pinterest.svg"
                alt="pinterest"
                className="hover:scale-75"
              />
            </a>
            <a href="">
              <img
                src="src/images/icon-instagram.svg"
                alt="instagram"
                className="hover:scale-75"
              />
            </a>
          </div>
        </div>

       
        <div className="flex flex-col sm:flex-row text-[hsl(220,16%,96%)] text-sm text-center sm:text-left gap-6 ">
          <ul className="space-y-2">
            <li className="hover:text-[hsl(136,65%,51%)] cursor-pointer">
              About Us
            </li>
            <li className="hover:text-[hsl(136,65%,51%)] cursor-pointer">
              Contact
            </li>
            <li className="hover:text-[hsl(136,65%,51%)] cursor-pointer">
              Blog
            </li>
          </ul>
          <ul className="space-y-2">
            <li className="hover:text-[hsl(136,65%,51%)] cursor-pointer">
              Careers
            </li>
            <li className="hover:text-[hsl(136,65%,51%)] cursor-pointer">
              Support
            </li>
            <li className="hover:text-[hsl(136,65%,51%)] cursor-pointer">
              Privacy Policy
            </li>
          </ul>
        </div>

       
        <div className="flex flex-col items-center sm:items-end">
          <button className="text-white text-sm px-4 py-3 cursor-pointer rounded-full bg-gradient-to-r from-[hsl(136,65%,51%)] to-[hsl(192,70%,51%)] w-[10rem] hover:opacity-80 transition">
            Request Invite
          </button>

          <p className="text-[hsl(233,8%,62%)] mt-4 text-xs sm:text-sm">
            &copy; Easybank. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
  