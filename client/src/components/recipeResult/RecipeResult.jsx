import React, {useCallback, useContext} from "react";
import PromptDataContext from "../../context/PromptDataContext";
// import RecipeCards from "./RecipeCards";
import { PageHeading } from "../heading/PageHeading";
import "./recipeResult.css";
import { useNavigate } from "react-router-dom";
import RecipeLoading from "./RecipeLoading";
import { FoodCard } from "../foodCard/FoodCard";

const RecipeResult = () => {
  const navigate = useNavigate();
  const { Recipes, loading,setLoading, fetchRecipies, promptData, setPromptData, setRecipes } = useContext(PromptDataContext);


  const fetchRecipesData = useCallback(async()=>{
	  setLoading(true);
	  try{
		let res = await fetchRecipies(promptData);
		setRecipes(res);
    }catch(e){
      throw e;
    }finally{
      setLoading(false);
    }
  }, [promptData, fetchRecipies, setRecipes, setLoading])
 
  if(Recipes?.length > 0){
	return(
		<div className="MainContainer">
		<div className="RSPageHeading">
			<PageHeading top="Hey There," bottom="Here's What You Can Cook!" />
		</div>	
			<div className="recipeContainer">
				<div className="Moving">
				<FoodCard dishes={Recipes} />
				</div>
        	</div>
			<div className="ResButton">
			<button
				className="skip"
				type="button"
				onClick={fetchRecipesData}>
				Refresh
			</button>

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
			{ loading && <RecipeLoading /> }
		</div>
	)
  }else{
	return <p style={{textAlign:"center", fontSize:"30px"}}>NO RECIPE FOUND</p>
  }
};

export default RecipeResult;