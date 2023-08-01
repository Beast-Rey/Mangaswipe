import { useState, useMemo, useCallback } from "react";
import { useParams } from "react-router-dom";
import axios from "../../axios/MangaFinder";
import {useQuery} from 'react-query'
import { useNavigate } from "react-router-dom";
import {Helmet} from 'react-helmet-async'
import SkeletonManga from "../Skeleton/SkeletonManga";

const Manga = () => {
  let { id } = useParams();
  let [index, setIndex] = useState(0)
  let navigate = useNavigate()
  let newTitle;
  let nextchapter;

  const FetchManga = async () => {
    const resp = await axios.get(`/manga/${id}`);
    return resp.data.data
  };

  const {data: manga, isLoading} = useQuery('mangapage', FetchManga)
  
  if(isLoading) {
    return <SkeletonManga />
  }

  return (
    <>
    <Helmet>
        <title>Manga Swipe - {id}</title>
        <link rel="canonical" href={`/manga/chapter/${id}`} />
        <meta name="description" content="website for reading latest manga" />
    </Helmet>
    <section className="bg-[#131415] dark:bg-white py-8">
      <h1 className="text-center text-4xl font-bold text-white dark:text-black">{id}</h1>
      <div className="flex justify-center text-white my-10 mx-auto w-[90%] lg:w-[60%] xl:w-[50%] 2xl:w-[45%]">
        <div className="lg:space-x-4">
        {manga && manga.map((chapter) =>{
            nextchapter = chapter.chapters[index]
            nextchapter.chapterTitle
          })}
          <button className="w-[120px] text-black h-[30px] rounded-full bg-[#EFC416] my-2 cursor-pointer" 
          onClick={() => {index > 0 ? setIndex(index-1) : setIndex(index=0), navigate(`/manga/chapter/${newTitle}`)}}>
            Prev
          </button>
          <button className="w-[120px] text-black h-[30px] rounded-full bg-[#EFC416] my-2 cursor-pointer" 
          onClick={() => {setIndex(index+1), navigate(`/manga/chapter/${newTitle}`)}}>
            Next
          </button>
        </div>
      </div>
      <div>
        {manga && manga.map((chapter, l) => {
            const filteredData = chapter.chapters.filter(data => data.chapterTitle === id)
            return (
              <div key={l}>
                {filteredData && filteredData.map((pageimage, i) => {
                  return <div key={i}>
                    {pageimage.panelImage.map((singleimage, j) => {
                      return <div key={j}>
                        <img src={singleimage} alt="image" className="mx-auto"/>
                      </div>
                    })}
                  </div>
                })}
              </div>
            )
        })}
      </div>
      <div className="w-[100%] mx-auto text-center space-x-4 lg:space-x-10 my-8">
          {manga && manga.map((chapter) =>{
            nextchapter = chapter.chapters[index]
            newTitle = nextchapter.chapterTitle
          })}
          <button className="w-[120px] text-black h-[30px] rounded-full bg-[#EFC416] my-2 cursor-pointer" onClick={() => {index > 0 ? setIndex(index-1) : setIndex(index=0), navigate(`/manga/chapter/${newTitle}`)}}>
            Prev
          </button>
          <button className="w-[120px] text-black h-[30px] rounded-full bg-[#EFC416] my-2 cursor-pointer" onClick={() => {setIndex(index+1), navigate(`/manga/chapter/${newTitle}`)}}>
            Next
          </button>
        </div>
    </section>
    </>
  );
};

export default Manga;
