import { Link } from "react-router-dom";


const footerLinks = [
  {
    link: '/about-us',
    title: 'About us'
  },
  {
    link: '/contact-us',
    title: 'Contact Us'
  },
  {
    link: '/terms-of-service',
    title: 'Terms of service'
  },
  {
    link: '/privacy-policy',
    title: 'Privacy Policy'
  },
  {
    link: '/dcma',
    title: 'DMCA'
  },
]

const FooterLinks = () => {
  return (
    <div className="flex space-x-10 lg:mx-auto lg:space-x-40">
      <div className="lg:grid lg:grid-cols-2 lg:gap-x-10">
        {footerLinks.map((links) => (
          <Link to={`{links.link}`} key={links.title} className="lg:py-2">
            <p className="hover:text-manga-yellow">{links.title}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default FooterLinks;
