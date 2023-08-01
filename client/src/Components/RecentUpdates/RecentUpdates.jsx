import axios from "../../../axios/MangaFinder";
import { Link } from "react-router-dom";
import { useQuery } from "react-query";
import RecentUpdateGrid from "./RecentUpdateGrid";
import SkeletonGrid from "../../Skeleton/SkeletonGrid";

const RecentlyUpdate = () => {
  let id;

  const FetchRecentData = async () => {
    const result = await axios.get("/recent");
    return result.data.data;
  };

  const { data: recent, isLoading } = useQuery("RecentData", FetchRecentData);

  if(isLoading) {
    return <SkeletonGrid />
  }

  return (
    <section className="w-[100%] mx-auto lg:w-[85%] xl:w-[69%] my-10">
      <div className="w-[90%] mx-auto lg:w-[100%] flex justify-between">
        <h1 className="mangaHead">
          Recently Update Reads <span>&#187;</span>
        </h1>
        <Link to="/recent">
          <span className="underline decoration-[#EFC416] decoration-2 underline-offset-8 cursor-pointer">
            View All
          </span>
        </Link>
      </div>
      <div className="pt-1 lg:pt-0 text-black dark:text-white mt-10 bg-[#F0F9FA] dark:bg-[#282F30] md:flex md:w-[90%] mx-auto rounded-lg lg:w-[52.5rem] xl:w-[100%]">
        <div className="w-[90%] md:w-[50%] h-[516px] text-center space-y-3 rounded-lg m-4 bg-[#FFFFFF] dark:bg-[#131415] pt-[1.25rem]">
          {recent &&
            recent.map((listData, index) => {
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
                          <h2 className="uppercase text-2xl mt-2 font-bold">
                            {mangaTitle}
                          </h2>
                          <p className="line-clamp-2 my-2 mx-2">
                            {description}
                          </p>
                          <p>Status: {status}</p>
                        </div>
                      </div>
                    </div>
                    <h2 className="my-2 mx-4 line-clamp-2 text-2xl">
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
        <RecentUpdateGrid recent={recent} />
      </div>
    </section>
  );
};

export default RecentlyUpdate;
