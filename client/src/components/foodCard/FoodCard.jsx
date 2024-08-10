import { Link } from "react-router-dom";
import "./FoodCard.css";
export const FoodCard = ({dishes}) => {

  console.log("ASDFASD", dishes);

  return (
    <>
      {dishes.map((value, index) => {
        return (
          <Link to={`/recipeGuidePage/${index}`} key={index}>
            <div  className="homeFoodCard">
              <div className="homeFoodCardImage"
                style={{
                  background: `url(${value.imageUrl}) lightgray 50% / cover no-repeat`,
                }}
              >
                <div className="blurLayer"></div>
              </div>
              <p className="foodName">{value.name}</p>
              <p className="cuisineName">{value.cuisine}</p>
            </div>
          </Link>
        );
      })}
    </>
  );
};
