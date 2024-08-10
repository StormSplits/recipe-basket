import "./SavedFood.css";
import { FoodCard } from "../foodCard/FoodCard";
import { PageHeading } from "../heading/PageHeading";
// import { Link } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import promptDataContext from "../../context/PromptDataContext";

function SavedFood(props) {
  const { setPromptData } = useContext(promptDataContext);
  const [saved, setSaved] = useState([]);
  const navigate = useNavigate();


  const {user} = useContext(promptDataContext);
  useEffect(()=>{
    (async ()=>{
      let res = await fetch("https://recipe-server-production-a53b.up.railway.app/api/v1/app/saved", {
        method: "POST",
        body: JSON.stringify({"user":user}),
        headers: {'content-type': 'application/json'}
      })
      res = await res.json();
      
      let t = res.newRecipe.map((i)=> JSON.parse(i.result))
      setSaved(t);

    })();
  }, [])

  return (
    <div className="XMainContainer">
      <div className="XRSPageHeading">
      <PageHeading top="Your" bottom="Recipe Collection" />
      </div>
      <div className="XrecipeContainer">
      <div className="XMoving">
        {(saved.length>0) && <FoodCard dishes={saved} /> }

        { (saved.length<=0) && <p>No saved recipes foound </p>}

      </div>
      </div>
        <div className="XResButton">
        <button
				className="next"
				onClick={() => {
				setPromptData({
					ingredients: "",
					dietaryNeeds: "",
					craving: "",
					occasion: "",
					time: "",
					skill: "",
					servings: "",
					tools: "",
					preference: "",
					allergies: "",
				});
				navigate("/");
				}}
				>
				Back
			</button>
        </div>
    </div>
  );
}
export default SavedFood;
