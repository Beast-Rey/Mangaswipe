import React, { useState } from "react";
import axios from "../../../axios/MangaFinder";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import SkeletonOngoing from "../../Skeleton/SkeletonOngoing";
import CustomTitle from "../CustomComponents/CustomTitle";

const OnGoingRelease = () => {
  const [pages, SetPages] = useState(5);

  const LoadMore = () => {
    SetPages(pages + pages);
  };

  const LoadLess = () => {
    SetPages(5);
  };

  const FetchGoingData = async () => {
    const result = await axios.get("/all");
    return result.data.data;
  };

  const { data: going, isLoading } = useQuery("goinglist", FetchGoingData);

  if(isLoading) {
    return <SkeletonOngoing />
  }

  return (
    <section className="container mx-auto my-20">
     <CustomTitle title={'New OnGoing Release'}/>

      {going &&
        going.slice(0, pages).map((item) => {
          const {
            mangaImageUrl,
            _id,
            mangaTitle,
            status,
            type,
            modifiedManga,
          } = item;
          return (
            <Link to={`/manga/${_id}/chapter`} key={_id}>
              <React.Fragment>
                <div className="flex space-x-4 text-black dark:text-white">
                  <div className="my-auto">
                    <img
                      src={mangaImageUrl}
                      alt={mangaTitle}
                      className="w-24 h-24 hover:scale-x-105 hover:scale-y-105"
                    />
                  </div>
                  <div className="md:flex justify-between w-full text-sm xl:text-lg space-y-2 my-auto">
                    <div className="w-[90%] text-left">
                      <h2>Title</h2>
                      <h3 className="line-clamp-2">{mangaTitle}</h3>
                    </div>
                    <div className="xl:ml-10 w-[90%] text-left">
                      <h2>Status</h2>
                      <h3>{status}</h3>
                    </div>
                    <div className="hidden lg:block w-[90%] text-center">
                      <h2>Type</h2>
                      <h3>{type}</h3>
                    </div>
                    <div className="w-[90%] lg:text-right">
                      <h2>Release</h2>
                      <h3>{modifiedManga.slice(0, 10)}</h3>
                    </div>
                  </div>
                </div>
                <hr className="my-4" />
              </React.Fragment>
            </Link>
          );
        })}
      <div className="mt-8 text-right space-x-4 font-bold">
        <button
          className="rounded-full bg-[#EFC416] w-32 h-8"
          onClick={LoadMore}
        >
          Load More
        </button>
        <button
          className="rounded-full bg-[#EFC416] w-32 h-8"
          onClick={LoadLess}
        >
          Load Less
        </button>
      </div>
    </section>
  );
};

export default OnGoingRelease;
