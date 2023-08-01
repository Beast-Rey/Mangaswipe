import { Link } from "react-router-dom";
import { useState, useEffect, useRef, useContext } from "react";
import { Themecontext } from "../../Context/Themecontext";
import axios from "../../../axios/MangaFinder";
import LogoLight from "../../assets/images/whitenyellow.png";
import LogoDark from "../../assets/images/blackandyellow.png";
import Search from "../Search/Search";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [openn, setOpenn] = useState(false);
  const { theme, setTheme } = useContext(Themecontext);
  const [mounted, setMounted] = useState(false);
  const [data, setData] = useState([]);
  const [message, setMessage] = useState();

  let useClickOutside = (handler) => {
    let domNode = useRef();

    useEffect(() => {
      let maybeHandler = (event) => {
        if (!domNode.current.contains(event.target)) {
          handler();
        }
      };
      document.addEventListener("mousedown", maybeHandler);
      return () => {
        document.removeEventListener("mousedown", maybeHandler);
      };
    });

    return domNode;
  };

  const search = async (q) => {
    if (q.trim() === 0) {
      return;
    }
    const result = await axios.get(`/search?q=${q}`);
    setData(result.data.data);
  };

  const handlechange = (e) => {
    setMessage(e.target.value);
    search(e.target.value);
  };

  useEffect(() => {
    setMounted(true);
  }, []);

  const ChangeLogo = () => {
    if (!mounted) return null;

    if (theme === "light") {
      return (
        <img src={LogoDark} alt="MangaSwipe" className="h-[24px] w-[150px]" />
      );
    } else {
      return (
        <img src={LogoLight} alt="MangaSwipe" className="h-[24px] w-[150px]" />
      );
    }
  };

  const renderThemeChanger = () => {
    if (!mounted) return null;

    if (theme === "light") {
      return (
        <i className="fa-solid fa-sun" onClick={() => setTheme("dark")}></i>
      );
    } else {
      return (
        <i className="fa-solid fa-moon" onClick={() => setTheme("light")}></i>
      );
    }
  };

  let domNode = useClickOutside(() => {
    setData(false);
  });

  return (
    <header>
      <nav className="font-bold h-[4.5rem] font-fred flex justify-between p-6 bg-[#FFFFFF] drop-shadow-2xl  text-black xl:px-60 dark:bg-[#313131] dark:text-white">
        {/* logo and navlinks */}
        <div className="flex">
          <Link to="/">{ChangeLogo()}</Link>
          <div className="hidden lg:flex lg:ml-12 lg:space-x-4 text-base">
            <Link to="/" className="hoverEffect">
              Home
            </Link>
            <Link to="/" className="hoverEffect">
              Mobile App
            </Link>
            <Link to="/" className="hoverEffect">
              Join Discord
            </Link>
            <Link to="/" className="hoverEffect">
              Request A Scan
            </Link>
          </div>
        </div>

        {/* searchbar and user */}
        <div ref={domNode} className="lg:flex xl:ml-16">
          <button className="mr-6 mt-1">{renderThemeChanger()}</button>
          <input
            type="text"
            placeholder="Search"
            className="border-2 hidden lg:flex lg:rounded-full lg:h-8 lg:w-32 placeholder lg:pl-4 lg:text-sm lg:focus:w-44 focus:ring focus:ring-[#EFC416] focus:outline-none text-black"
            onChange={handlechange}
          />
          {message ? <Search data={data} /> : ""}

          <i
            className="fa-solid fa-user fa-xl mx-2 cursor-pointer lg:mx-6 lg:mt-4 hover:text-[#EFC416]"
            onClick={() => setOpen(!open)}
          ></i>
          {open && (
            <div className="rounded-lg lg:border-0 text-white absolute left-0 mt-3 h-32 flex flex-col space-y-8 py-4 w-[100%] border-t-[1px] bg-[#FFFFFF] dark:bg-[#313131] lg:w-[200px] lg:mt-12 lg:left-[75%]">
              <Link to="/login" className="mx-auto hover:text-white">
                <button className="rounded-full bg-[#EFC416] w-[14rem] lg:w-[8rem] h-[2rem]">
                  Login
                </button>
              </Link>
              <Link to="/register" className="mx-auto">
                <button className="rounded-full bg-[#EFC416] w-[14rem] lg:w-[8rem] h-[2rem]">
                  Register
                </button>
              </Link>
            </div>
          )}
          <i
            className="fa-solid fa-bars fa-xl mx-2 lg:hidden cursor-pointer hover:text-[#EFC416]"
            onClick={() => setOpenn(!openn)}
          ></i>
          {openn && (
            <div className="bg-[#FFFFFF] dark:bg-[#313131] absolute left-0 h-fit w-full mt-3 border-t-[1px] lg:hidden">
              <input
                type="text"
                placeholder="Search"
                className="rounded-full h-8 w-[300px] mx-8 my-6 md:w-[500px] border-2 placeholder pl-2 text-black"
                onChange={handlechange}
              />
              <div className="flex flex-col space-y-3 align-middle text-left ml-8 mb-8">
                <Link to="/" className="hoverEffect">
                  Home
                </Link>
                <Link to="/" className="hoverEffect">
                  Mobile App
                </Link>
                <Link to="/" className="hoverEffect">
                  Join Discord
                </Link>
                <Link to="/" className="hoverEffect">
                  Request A Scan
                </Link>
              </div>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
