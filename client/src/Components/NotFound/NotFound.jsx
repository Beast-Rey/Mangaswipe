import {Link} from 'react-router-dom'
import { Helmet} from 'react-helmet-async'

const NotFound = () => {
  return (
    <>
    <Helmet>
        <title>Manga Swipe - Page Not Found</title>
        <link rel="canonical" href="/404" />
        <meta name="description" content="website for reading latest manga" />
    </Helmet>
    <section className="text-black flex dark:text-white h-screen">
      <div className="mx-auto w-[90%] m-auto text-center space-y-8 px-4 h-[50%]">
        <h1 className="text-7xl">
         Oops!! <br/><br />
         404 - PAGE NOT FOUND
        </h1>
        <p className="lg:text-2xl">
          The Page you are looking for might have been removed or its temporarily unavailable.
        </p>
        <Link to="/">
        <button className="rounded-full font-bold bg-[#EFC416] w-[200px] h-[2rem]">GOT TO HOME PAGE</button>
        </Link>
      </div>
    </section>
    </>
  );
};

export default NotFound;
