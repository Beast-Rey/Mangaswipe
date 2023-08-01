import axios from "../../../axios/MangaFinder";
import { Link} from "react-router-dom";
import { useQuery } from "react-query";
import SkeletonComingSoon from "../../Skeleton/SkeletonComingSoon";
import CustomTitle from "../CustomComponents/CustomTitle";


const ComingSoon = () => {
  const FetchComingSoon = async () => {
    const result = await axios.get("/coming");
    return result.data.data;
  };

  const { data: coming, isLoading } = useQuery("comingpage", FetchComingSoon);

  if(isLoading) {
    return <SkeletonComingSoon />
  }

  return (
    <section className="container my-12 mx-auto">
      <CustomTitle title={'Coming Soon'}/>
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
