import "./SavedFood.css";
import { FoodCard } from "../foodCard/FoodCard";
import { PageHeading } from "../heading/PageHeading";
import { Link } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import promptDataContext from "../../context/PromptDataContext";

function SavedFood(props) {

  const [saved, setSaved] = useState([]);


  const {user} = useContext(promptDataContext);
  useEffect(()=>{
    (async ()=>{
      let res = await fetch("http://localhost:8000/api/v1/app/saved", {
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
    <div className="savedDiv">
      <PageHeading top="Your" bottom="Recipe Collection" />
      <div className="foodcards">


        {(saved.length>0) && <FoodCard dishes={saved} /> }

        { (saved.length<=0) && <p>No saved recipes foound </p>}

        <div className="backButton">
          <button className="next " type="submit">
           <Link to='/'> <i className="fa-solid fa-angle-left"></i> Back </Link>
          </button>
        </div>
      </div>
    </div>
  );
}
export default SavedFood;
