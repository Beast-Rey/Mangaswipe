import { Link } from "react-router-dom";

const RecentUpdateGrid = ({ recent }) => {
  return (
    <div className="rounded-lg bg-[#F0F9FA] dark:bg-[#282F30] grid grid-cols-3 text-sm w-[90%] mx-auto pb-4 my-4">
      {recent &&
        recent.map((manga) => {
          const { _id, mangaImageUrl, mangaTitle } = manga;
          return (
            <Link to={`/manga/${_id}/chapter`} key={_id}>
              <div className="w-[6.625rem] h-[12.5rem] lg:h-56 xl:w-36 mx-auto text-center mt-2">
                <img
                  src={mangaImageUrl}
                  alt={mangaTitle}
                  className="rounded-lg w-36 h-36 md:w-52 md:h-44 xl:w-36 xl:h-48 hover:scale-x-105 hover:scale-y-105"
                />
                <h3 className="line-clamp-2 font-bold my-2">{mangaTitle}</h3>
              </div>
            </Link>
          );
        })}
    </div>
  );
};

export default RecentUpdateGrid;
