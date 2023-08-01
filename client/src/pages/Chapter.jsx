import { useState, useEffect } from "react";
import axios from "../../axios/MangaFinder";
import { Link, useParams } from "react-router-dom";
import StarRating from "../Components/StarRating/StarRating";
import {useQuery} from 'react-query'
import {Helmet} from 'react-helmet-async'

const Chapter = () => {
  const [search, setSearch] = useState("");
  let { id } = useParams();
  const [readmore, setReadmore] = useState(false)
  

  const FetchChapter = async () => {
    const response = await axios.get(`/${id}`);
    return response.data.data
  };

  const {data: manga} = useQuery(['chapters', id], FetchChapter, {enabled:!!id})

  const StatusCheck = () => {
    if(manga.status === 'Ongoing') {
      return 'bg-[#EFC416] text-black rounded-sm mt-2 w-[120px] font-bold'
    } else if(manga.status === 'Completed') {
      return 'bg-green-700 text-black rounded-sm mt-2 w-[120px] font-bold'
    } else if(manga.status === 'Dropped') {
      return 'bg-red-700 text-white rounded-sm mt-2 w-[120px] font-bold'
    } else {
      return 'bg-pink-400 text-black rounded-sm mt-2 w-[120px] font-bold'
    }
  }


  return (
    <>
    <section className="bg-white text-black dark:bg-[#131415] dark:text-white text-center h-full lg:text-left pt-[45px]">
      {manga && (
        <>
         <Helmet>
        <title>Manga Swipe - {manga.mangaTitle}</title>
         <link rel="canonical" href={`/manga/${manga._id}/chapter`} />
         <meta name="description" content="website for reading latest manga" />
         </Helmet>
          <div key={manga._id} className="lg:flex">
            <div className="lg:w-[50%] xl:w-[40%] ml-auto">
              <img
                src={manga.mangaImageUrl}
                alt=""
                className="w-[295px] h-[435px] mx-auto"
              />
            </div>
            <div className="lg:w-[50%] xl:w-[40%] mr-auto">
              <button className={StatusCheck()}>{manga.status}</button>
              <h1 className="text-3xl my-2 px-4 lg:px-0 lg:mr-8">
                {manga.mangaTitle}
              </h1>
              <p className="my-2">{manga.chapters.length} Chapters</p>
              <p>Artist : {manga.artist}</p>
              <h2 className="my-2">Views : {manga.likes}</h2>
              <h2 className="my-2">Type : {manga.type}</h2>
              <h2 className="my-2">
                Rating : <StarRating data={manga.rating} key={manga._id} />
              </h2>
              <h2>
                Synopsis :
                <p className="text-sm px-8 lg:px-0 lg:mr-8">
                  {readmore
                    ? manga.description
                    : manga.description.toString().slice(0, 179)}
                </p>
              </h2>
              <button
                onClick={() => setReadmore(!readmore)}
                className="my-2 bg-[#0F6CFF] w-[120px] h-[40px] rounded-lg uppercase font-bold text-white"
              >
                {readmore ? "Read Less" : "Read More"}
              </button>
              <div>
                {manga.genre.map((gen, index) => {
                  return (
                    <button
                      className="w-[120px] h-[30px] mt-4 border border-[#85b6bb] dark:border-white lg:px-0"
                      key={index}
                    >
                      {gen}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
          <div className="py-[50px] text-center h-max">
            <div className="my-[20px]">
              <input
                type="text"
                placeholder="Search Chapter By Number"
                className="font-bold pl-5 w-[310px] rounded-sm text-sm h-[30px] focus:ring focus:ring-[#EFC416] text-black focus:outline-none md:w-[480px] lg:w-[650px] border border-black"
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>
            <div className="mt-[50px] w-fit h-[500px] overflow-y-scroll mx-auto">
              <ul className="grid gap-4 grid-cols-2 w-full space-y-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
                {manga &&
                  manga.chapters
                    .filter((single) => single.chapterTitle.includes(search)).slice(0).reverse()
                    .map((single) => {
                      const { chapterNumber, chapterTitle, _id } = single;
                      return (
                        <Link
                          to={`/manga/chapter/${chapterTitle}`}
                          className="w-[150px] h-[50px] border dark:border-[#333333] text-center py-2 cursor-pointer"
                          key={_id}
                        >
                          Chapter {chapterNumber}
                        </Link>
                      );
                    })}
              </ul>
            </div>
          </div>
        </>
      )}
    </section>
    </>
  );
};

export default Chapter;
