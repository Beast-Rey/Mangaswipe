import { Link } from "react-router-dom";
import { useState, useEffect, useContext } from "react";

import LogoDark from "../../assets/images/blackandyellow.png";
import LogoLight from "../../assets/images/whitenyellow.png";
import { Themecontext } from "../../Context/Themecontext";
import FooterLinks from "./FooterLinks";

const Footer = () => {
  const CurrentDate = new Date();
  const CurrentYear = CurrentDate.getFullYear();
  const { theme } = useContext(Themecontext);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const ChangeLogo = () => {
    if (!mounted) return null;

    if (theme === "light") {
      return <img src={LogoDark} alt="MangaSwipe" className="h-6 w-36" />;
    } else {
      return <img src={LogoLight} alt="MangaSwipe" className="h-6 w-36" />;
    }
  };

  return (
    <footer className="bg-manga-white drop-shadow-2xl text-black font-normal h-56 px-8 flex flex-col justify-around align-middle lg:flex-row-reverse lg:py-20 lg:px-32 xl:px-60 dark:bg-manga-black dark:text-white">
      <FooterLinks />
      <div>
        <div>
          <Link to="/" className="hidden h-4 w-40 lg:flex mb-4">
            {ChangeLogo()}
          </Link>
        </div>
        <div className="space-x-4">
          <i className="fa-brands fa-facebook lg:fa-2xl hoverEffect"></i>
          <i className="fa-brands fa-twitter lg:fa-2xl hoverEffect"></i>
          <i className="fa-brands fa-discord lg:fa-2xl hoverEffect"></i>
        </div>
        <div className="flex justify-between lg:flex lg:flex-col">
          <p className="text-sm lg:my-5">
            All Right Reserved © Manga Swipe {CurrentYear}
          </p>
          <Link to="/" className="h-4 w-40 lg:hidden">
            {ChangeLogo()}
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
