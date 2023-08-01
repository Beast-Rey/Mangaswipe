import { Link } from "react-router-dom";
import { useQuery } from "react-query";

import axios from "../../../axios/MangaFinder";
import MostReadGrid from "./MostReadGrid";
import SkeletonGrid from '../../Skeleton/SkeletonGrid'

const MostRead = () => {
  let id;

  const FetchMostRead = async () => {
    const result = await axios.get("/mostread");
    return result.data.data;
  };

  const { data: complete, isLoading } = useQuery("read", FetchMostRead);

  if(isLoading) {
    return <SkeletonGrid />
  }

  return (
    <section className="w-[100%] mx-auto lg:w-[85%] xl:w-[69%] my-14">
      <div className="w-[90%] mx-auto lg:w-[100%] flex justify-between">
        <h1 className="mangaHead">
          Most Read Manga <span>&#187;</span>
        </h1>
        <Link to="/read">
          <span className="underline decoration-[#EFC416] decoration-2 underline-offset-8 cursor-pointer">
            View All
          </span>
        </Link>
      </div>
      <div className="pt-1 lg:pt-0 text-black dark:text-white mt-8 md:flex md:w-[90%] mx-auto rounded-lg lg:w-[85%] xl:w-[100%] bg-[#EFC416]">
        <div className="w-[90%] md:w-[50%] h-[516px] text-center space-y-3 rounded-lg m-4 bg-[#F3F4F6] dark:bg-[#131415] pt-[20px]">
        {complete &&
            complete.map((listData, index) => {
              const { _id, mangaImageUrl, mangaTitle, description, status } =
                listData;
              if (index === 3) {
                id = _id;
                return (
                  <div key={index} className="font-bold">
                    <div className="container">
                      <img
                        src={mangaImageUrl}
                        alt={mangaTitle}
                        className="image w-52 h-72 mx-auto relative"
                      />
                      <div className="middle">
                        <div className="text">
                          <h2 className="uppercase text-2xl mt-2 font-bold line-clamp-3">
                            {mangaTitle}
                          </h2>
                          <p className="line-clamp-3 my-2 mx-2">
                            {description}
                          </p>
                          <p>Status: {status}</p>
                        </div>
                      </div>
                    </div>
                    <h2 className="my-2 mx-4 line-clamp-3 text-2xl">
                      {mangaTitle}
                    </h2>
                    <p className="line-clamp-3 mx-8 text-sm">{description}</p>
                  </div>
                );
              }
            })}
          <Link to={`/manga/${id}/chapter`}>
            <span className="mangaSpan">View More</span>
          </Link>
        </div>
        {/* Grid */}
        <MostReadGrid complete={complete} />
      </div>
    </section>
  );
};

export default MostRead;
