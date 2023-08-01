import React from "react";
import { useQuery } from "react-query";
import axios from "../../../axios/MangaFinder";
import { Link } from "react-router-dom";

const MostLiked = () => {
  const FetchLiked = async () => {
    const result = await axios.get("/mostliked");
    return result.data.data;
  };

  const { data } = useQuery("likes", FetchLiked);

  return (
    <section className="text-black dark:text-white mt-4 mb-8 xl:mt-8 xl:w-[100%]">
      <h1 className="mx-auto cursor-pointer mb-8 border-l-4 border-[#EFC416] indent-[4px] font-bold transition duration-1000 ease-out hover:ease-in hover:bg-[#EFC416] text-3xl w-[80%]">
        Most Liked &rarr;
      </h1>
      {data &&
        data.map((list, index) => {
          const { _id, mangaImageUrl, mangaTitle, likes } = list;
          const newLikes = likes
            .toString()
            .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
          return (
            <Link to={`/manga/${_id}/chapter`} key={_id}>
              <div className="flex w-[90%] mx-auto h-[80px]">
                <h2 className="my-auto underline underline-offset-8 decoration-[#EFC416] decoration-4 mx-8 font-bold text-4xl">
                  {index + 1}
                </h2>
                <img
                  src={mangaImageUrl}
                  alt={mangaTitle}
                  className="w-11 h-16 my-auto"
                />
                <div className="my-auto mx-4">
                  <h2 className="line-clamp-2">{mangaTitle}</h2>
                  <h3>
                    <i className="fa-solid fa-thumbs-up"></i> {newLikes}
                  </h3>
                </div>
              </div>
              <hr className="w-[80%] mx-auto border border-[#EFC416] my-2" />
            </Link>
          );
        })}
    </section>
  );
};

export default MostLiked;
