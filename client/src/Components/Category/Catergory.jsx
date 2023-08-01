import {Link} from 'react-router-dom'

const Catergory = () => {
  return (
    <section className="text-blackdark:text-white mt-4 mb-8 xl:mt-8 xl:w-[100%]">
      <h1 className="mx-auto cursor-pointer mb-8 border-l-4 border-[#EFC416] indent-[4px] font-bold transition duration-1000 ease-out hover:ease-in hover:bg-[#EFC416] text-3xl w-[80%]">
        Categories &rarr;
      </h1>
      <div className="text-black text-center mx-auto w-[90%]">
        <ul className="flex flex-wrap text-sm font-bold cursor-pointer ml-4">
          <Link to="/ongoing" className="bg-[#EFC416] rounded-lg m-2 w-[40%] h-[40px]">New Ongoing Release</Link>
          <Link to="/comingsoon" className="bg-[#EFC416] rounded-lg m-2 w-[40%] h-[40px] py-2">Coming Soon</Link>
          <Link to="/recent" className="bg-[#EFC416] rounded-lg m-2 w-[40%] h-[40px] py-2">Recently Update</Link>
          <Link to="/popular" className="bg-[#EFC416] rounded-lg m-2 w-[40%] h-[40px] py-2">Popular This Week</Link>
          <Link to="/read" className="bg-[#EFC416] rounded-lg m-2 w-[40%] h-[40px] py-2">Most Read Manga</Link>
          <Link to="/recommended" className="bg-[#EFC416] rounded-lg m-2 w-[40%] h-[40px]">Most Recommnended</Link>
        </ul>
      </div>
    </section>
  );
};

export default Catergory;
