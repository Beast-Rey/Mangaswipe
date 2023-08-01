import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Footer from '../Footer/Footer'
import { useLocation } from "react-router-dom";

const Layout = () => {
  let location = useLocation()
  if (location.pathname === "/404") {
    return (
      <>
        <main>
          <Outlet />
        </main>
      </>
    );
  } else {
    return (
      <>
        <Navbar />
        <main>
          <Outlet />
        </main>
        <Footer />
      </>
    );
  }
};

export default Layout;
