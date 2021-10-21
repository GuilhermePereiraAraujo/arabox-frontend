import { FaStar } from "react-icons/fa";

export default function StarRating(props) {
  //console.log(props.rating);
  return (
    <div>
      {[...Array(props.rating)].map((star, index) => {
        return (
          <label key={index}>
            {" "}
            <FaStar />
          </label>
        );
      })}
    </div>
  );
}
