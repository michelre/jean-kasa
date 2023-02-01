import filledStar from "../assets/filled_star.png";
import emptyStar from "../assets/empty_star.png";

export const Rating = ({ rating }) => {
  /*const ratingStars = [];

  for (let i = 0; i < rating; i++) {
    ratingStars.push(<img src={filledStar} alt="Filled star" key={i + "filled"} />);
  }

  for (let j = 0; j < 5 - rating; j++) {
    ratingStars.push(<img src={emptyStar} alt="Filled star" key={j + "empty"} />);
  }

  return (
    <div className="rating">
      {ratingStars}
    </div>
  )*/
  const starsRed = Array.from({length: rating}).map((i, idx) => idx)
  const starsEmpty = Array.from({length: 5 - rating}).map((i, idx) => idx)


  return <>
    {starsRed.map((i) => <img src={filledStar} alt="Filled star" key={`${i}-filled`} />)}
    {starsEmpty.map((i) => <img src={emptyStar} alt="Filled star" key={`${i}-empty`} />)}
  </>
}
