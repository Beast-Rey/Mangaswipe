import { Link } from "react-router-dom";

const MostReadGrid = ({ complete }) => {
  return (
    <div className="rounded-lg grid grid-cols-3 text-sm w-[90%] mx-auto my-4 text-black">
      {complete &&
        complete.map((mostread) => {
          const { _id, mangaImageUrl, mangaTitle } = mostread;
          return (
            <Link to={`/manga/${_id}/chapter`} key={_id}>
              <div className="w-[6.625rem] h-[12.5rem] lg:h-56 xl:w-36 mx-auto text-center mt-2">
                <img
                  src={mangaImageUrl}
                  alt={mangaTitle}
                    className="rounded-lg w-36 h-36 lg:w-52 lg:h-44 xl:w-36 xl:h-48 hover:scale-x-105 hover:scale-y-105"
                />
                <h2 className="line-clamp-2 text-black font-bold lg:my-2">
                  {mangaTitle}
                </h2>
              </div>
            </Link>
          );
        })}
    </div>
  );
};

export default MostReadGrid;
