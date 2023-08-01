import { Link } from "react-router-dom";

const FooterLinks = () => {
  return (
    <div className="flex space-x-10 lg:mx-auto lg:space-x-40">
      <div className="space-y-1">
        <Link to="/about-us">
          <p className="hoverEffect">About us</p>
        </Link>
        <Link to="/contact-us">
          <p className="hoverEffect">Contact Us</p>
        </Link>
      </div>
      <div className="space-y-1">
        <Link to="/terms-of-service">
          <p className="hoverEffect">Terms of service</p>
        </Link>
        <Link to="/privacy-policy">
          <p className="hoverEffect">Privacy Policy</p>
        </Link>
        <Link to="/dmca">
          <p className="hoverEffect">DMCA</p>
        </Link>
      </div>
    </div>
  );
};

export default FooterLinks;
