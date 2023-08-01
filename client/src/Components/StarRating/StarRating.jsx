const StarRating = ({ data }) => {
  const starsArray = [];

  for (let i = 1; i <= 9; i++) {
    if (i <= data) {
      starsArray.push(
        <i key={i} className="fa-solid fa-star text-[#EFC416]"></i>
      );
    } else if (i == Math.ceil(data) && !Number.isInteger(data)) {
      starsArray.push(
        <i key={i} className="fa-solid fa-star-half text-[#EFC416]"></i>
      );
    } else {
      starsArray.push(
        <i key={i} className="fa-solid fa-star text-[#EFC416]"></i>
      );
    }
  }

  return <div>{starsArray}</div>;
};

export default StarRating;
