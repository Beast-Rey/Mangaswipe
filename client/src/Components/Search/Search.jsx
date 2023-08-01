import {Link} from 'react-router-dom'


const Search = ({ data }) => {

  return (
    <section className="bg-[#FFFFFF] drop-shadow-2xl z-50 absolute sm:left-0 lg:left-[60%] 2xl:left-[70%] lg:mt-0 mt-14 ml-6 lg:ml-0 top-full lg:w-[350px] md:w-[500px] h-fit text-black dark:text-white dark:bg-black">
      {data &&
        data.map((swt) => {
          const {_id, mangaImageUrl, mangaTitle, likes, status} = swt
          return (
            <Link to={`/manga/${_id}/chapter`} key={_id}>
              <>
              <div className="flex">
                <img
                  src={mangaImageUrl}
                  alt={mangaTitle}
                  className="h-20 w-14 ml-4 my-4"
                />
                <div className="ml-8 my-4">
                  <h1 className="line-clamp-2 text-sm">{mangaTitle}</h1>
                  <h2>Status: {status}</h2>
                  <h3>
                    <i className="fa-solid fa-thumbs-up hoverEffect"></i> {likes}
                  </h3>
                </div>
              </div>
            </>
            </Link>
          );
        })}
      <div>
      </div>
    </section>
  );
};

export default Search;
