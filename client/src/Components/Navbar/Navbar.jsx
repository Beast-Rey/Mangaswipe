import { Link } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import axios from "../../../axios/MangaFinder";
import Search from "../Search/Search";
import { ChangeLogo } from "../CustomComponents/ChangeLogo";
import { ThemeChange } from "../CustomComponents/ChangeTheme";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [openn, setOpenn] = useState(false);
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


  let domNode = useClickOutside(() => {
    setData(false);
  });

  const NavLinks = [
    {
      link: '/',
      title: 'Home'
    },
    {
      link: '/',
      title: 'mobile App'
    },
    {
      link: '/',
      title: 'Join Discord'
    },
    {
      link: '/',
      title: 'Request A Scan'
    },
  ]


  return (
    <header>
      <nav className="font-bold h-[4.5rem] font-fred flex justify-between py-6 bg-manga-white drop-shadow-2xl  text-black dark:bg-manga-black dark:text-white">
        {/* logo and navlinks */}
        <div className="flex">
          <Link to="/">
            <ChangeLogo />
          </Link>
          <div className="hidden lg:flex lg:ml-12 lg:space-x-4 text-base">
            {openn && NavLinks.map((links, i) => (
              <Link to={`${links.link}`} className="hover:text-manga-yellow" key={i}>{links.title}</Link>
            ))}
          </div>
        </div>

        {/* searchbar and user */}
        <div ref={domNode} className="lg:flex xl:ml-16">
          <button className="mr-6 mt-1">
            <ThemeChange />
          </button>
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
                <button className="rounded-full bg-manga-yellow w-[14rem] lg:w-[8rem] h-[2rem]">
                  Register
                </button>
              </Link>
            </div>
          )}
          <i
            className="fa-solid fa-bars fa-xl mx-2 lg:hidden cursor-pointer hover:text-manga-yellow"
            onClick={() => setOpenn(!openn)}
          ></i>
          {openn && (
            <div className="bg-manga-white dark:bg-manga-black absolute left-0 h-fit w-full mt-3 border-t-[1px] lg:hidden">
              <input
                type="text"
                placeholder="Search"
                className="rounded-full h-8 w-[300px] mx-8 my-6 md:w-[500px] border-2 placeholder pl-2 text-black"
                onChange={handlechange}
              />
              <div className="flex flex-col space-y-3 align-middle text-left ml-8 mb-8">
                {NavLinks.map((links, i) => (
                  <Link to={`${links.link}`} className="hover:text-manga-yellow" key={i}>{links.title}</Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
