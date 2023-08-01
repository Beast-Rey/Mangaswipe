import axios from "../../../axios/MangaFinder";
import { Link} from "react-router-dom";
import { useQuery } from "react-query";
import SkeletonComingSoon from "../../Skeleton/SkeletonComingSoon";


const ComingSoon = () => {
  const FetchComingSoon = async () => {
    const result = await axios.get("/coming");
    return result.data.data;
  };

  const { data: coming } = useQuery("comingpage", FetchComingSoon);


  return (
    <section className="w-[90%] lg:w-[85%] xl:w-[69%] my-12 mx-auto">
      <div className="font-fred flex justify-between w-[90%] md:w-[90%] mx-auto lg:w-[100%]">
        <h1 className="cursor-pointer mb-4 border-l-4 border-[#EFC416] indent-[4px] font-bold w-fit transition duration-1000 ease-out hover:ease-in hover:bg-[#EFC416] hover:w-fit">Coming Soon &rarr;</h1>
        <Link to="/comingsoon">
          <span className="underline decoration-[#EFC416] decoration-2 underline-offset-8 cursor-pointer">
            View All
          </span>
        </Link>
      </div>
      <div className="bg-white dark:bg-black drop-shadow-sm rounded-lg">
        {coming &&
          coming.map((item) => {
            const {_id, mangaTitle, description, mangaImageUrl} = item;
            return (
             <Link to={`/manga/${_id}/chapter`} key={_id}>
                <div
                className="rounded-lg flex mx-4 py-4 h-[8.125rem] relative z-[-1]"
                
              >
                <img src={mangaImageUrl} alt={mangaTitle} className="w-[100px] h-[100px]"/>
                <div className="ml-4">
                  <h2 className="line-clamp-1 font-fred text-black dark:text-white">
                    {mangaTitle}
                  </h2>
                  <p className="line-clamp-3 text-gray-400">
                    {description}
                  </p>
                </div>
              </div>
             </Link>
            );
          })}
      </div>
    </section>
  );
};

export default ComingSoon;
