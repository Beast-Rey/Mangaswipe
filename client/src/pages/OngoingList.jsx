import {useState} from 'react'
import axios from '../../axios/MangaFinder'
import { Link } from 'react-router-dom'
import {useQuery} from 'react-query'
import MostLiked from "../Components/MostLiked/MostLiked";
import ComingSoon from '../Components/ComingSoon/ComingSoon'
import Catergory from "../Components/Category/Catergory";
import {Helmet} from 'react-helmet-async'
import SkeletonPages from '../Skeleton/SkeletonPages';

const OngoingList = () => {
    const [page, setPage] = useState(0)
    const FetchDataOngoing = async () => {
        const result = await axios.get(`/all?page=${page}`);
        return result.data.data
      };
    
   const {data: list, isLoading} = useQuery(['goinglist', page], () => FetchDataOngoing(page))

      if(isLoading) {
        return <SkeletonPages />
      }

  return (
    <>
       <Helmet>
        <title>Manga Swipe - ON GOING MANGA</title>
        <link rel="canonical" href="/ongoing" />
        <meta name="description" content="website for reading latest manga" />
    </Helmet>
    <section className="xl:flex xl:justify-between">
    <div className="lg:w-[80%]">
    <div className="text-center">
        <h1 className='text-center text-5xl my-[25px] font-bold'>ON GOING MANGA</h1>
        <hr className="w-[80%] mx-auto border border-[#EFC416] mb-8" />
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 my-[25px]'>
          {list && list.map((listData, index) => {
            return <div className='my-[20px]'key={index}>
                <Link to={`/manga/${listData._id}/chapter`} >
                <div>
                <div className="container">
                      <img
                        src={listData.mangaImageUrl}
                        alt="image"
                        className="image w-[150px] h-[250px] mx-auto relative"
                      />
                      <div className="middle">
                        <div className="text">
                          <h1 className="uppercase w-[150px] mx-auto text-2xl font-bold line-clamp-3">
                            {listData.mangaTitle}
                          </h1>
                          <p className="line-clamp-3 my-2 w-[150px] mx-auto">
                            {listData.description}
                          </p>
                          {listData && listData.chapters
                            .slice(Math.max(listData.chapters.length - 1, 0))
                            .map((chap, i) => {
                              return (
                                <div key={i}>
                                  <button className="w-[120px] h-[30px] text-[#EFC416] border-2 border-[#EFC416] my-1 cursor-pointer">
                                    Chapter {chap.chapterNumber}
                                  </button>
                                </div>
                              );
                            })}
                        </div>
                      </div>
                    </div>
                <h2 className='w-[150px] mx-auto line-clamp-1 my-4'>{listData.mangaTitle}</h2>
                </div>
                </Link>
                {listData.chapters.slice(Math.max(listData.chapters.length - 2, 0)).map((chap, i) => {
                    return <div key={i}>
                        <button className="w-[120px] text-black h-[40px] rounded-full bg-[#EFC416] my-2 cursor-pointer">Chapter {chap.chapterNumber}</button>
                    </div>
                })}
            </div>
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
  )
}

export default OngoingList