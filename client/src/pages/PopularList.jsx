import axios from "../../axios/MangaFinder";
import { Link } from "react-router-dom";
import { useQuery } from "react-query";
import {useState} from 'react'
import MostLiked from "../Components/MostLiked/MostLiked";
import ComingSoon from '../Components/ComingSoon/ComingSoon'
import Catergory from "../Components/Category/Catergory";
import {Helmet} from 'react-helmet-async'
import SkeletonPages from "../Skeleton/SkeletonPages";

const PopularList = () => {
  const [page, setPage] = useState(0)
  const FetchPopularList = async () => {
    const result = await axios.get(`/all?page=${page}`);
    return result.data.data;
  };

  const { data: list, isLoading } = useQuery(["popularlist", page], () => FetchPopularList(page));

  if(isLoading) {
    return <SkeletonPages />
  }

  return (
    <>  
    <Helmet>
    <title>Manga Swipe - Popular Manga</title>
    <link rel="canonical" href="/popular" />
    <meta name="description" content="website for reading latest manga" />
   </Helmet>
    <section className="xl:flex xl:justify-between">
    <div className="lg:w-[80%]">
    <div className="text-center">
      <h1 className="text-5xl my-[25px]">Popular Manga</h1>
      <hr className="w-[80%] mx-auto border border-[#EFC416]" />
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 my-[25px]">
        {list &&
          list.map((listData) => {
            const { _id, mangaImageUrl, mangaTitle, description, chapters } =
              listData;
            return (
              <div className="my-[20px]" key={_id}>
                <Link to={`/manga/${_id}/chapter`}>
                  <div>
                    <div className="container">
                      <img
                        src={mangaImageUrl}
                        alt={mangaTitle}
                        className="image w-[150px] h-[250px] mx-auto relative"
                      />
                      <div className="middle">
                        <div className="text">
                          <h1 className="uppercase w-[150px] mx-auto text-2xl line-clamp-3">
                            {mangaTitle}
                          </h1>
                          <p className="line-clamp-3 my-2 w-[150px] mx-auto">
                            {description}
                          </p>
                          {chapters
                            .slice(Math.max(chapters.length - 1, 0))
                            .map((chap) => {
                              const { _id, chapterNumber } = chap;
                              return (
                                <div key={_id}>
                                  <button className="w-[120px] h-[30px] text-[#EFC416] border-2 border-[#EFC416] my-1 cursor-pointer">
                                    Chapter {chapterNumber}
                                  </button>
                                </div>
                              );
                            })}
                        </div>
                      </div>
                    </div>
                    <h2 className="w-[150px] mx-auto line-clamp-1 my-4">
                      {mangaTitle}
                    </h2>
                  </div>
                </Link>
                {chapters
                  .slice(Math.max(chapters.length - 2, 0))
                  .map((chap) => {
                    const { _id, chapterNumber, chapterTitle } = chap;
                    return (
                      <div key={_id}>
                        <Link to={`/manga/chapter/${chapterTitle}`}>
                          <button className="w-[120px] text-black h-[40px] rounded-full bg-[#EFC416] my-2 cursor-pointer">
                            Chapter {chapterNumber}
                          </button>
                        </Link>
                      </div>
                    );
                  })}
              </div>
            );
          })}
      </div>
      <hr className="w-[80%] mx-auto border border-[#EFC416] mb-8" />
      <div className="space-x-10 mb-10 font-bold">
        <button className="rounded-full bg-[#EFC416] w-[8rem] h-[2rem]" onClick={() => setPage((page) => page - 1)} disabled={page === 0}><i className="fa-solid fa-circle-arrow-left"></i> Back</button>
        <button className="rounded-full bg-[#EFC416] w-[8rem] h-[2rem]" onClick={() => setPage((page) => page + 1)}>Next <i className="fa-solid fa-circle-arrow-right"></i></button>
      </div>
      </div>
      </div>
    <div className="xl:w-[30%] h-max">
    <MostLiked />
    <ComingSoon />
    <Catergory />
    </div> 
    </section>
    </>
  );
};

export default PopularList;
