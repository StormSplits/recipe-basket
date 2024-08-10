import { useState } from "react";
import PromptDataContext from "./PromptDataContext";

export const PromptDataState = (props) => {
  const [user, setUser] = useState(localStorage.getItem( "user") || "" );
  
  const [promptData, setPrompt] = useState( JSON.parse(localStorage.getItem( "promptData")) || {
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
  } );  


  const setPromptData = (data) =>{
      localStorage.setItem("promptData", JSON.stringify(data));
      setPrompt({...data});
  }
 

  const [Recipes , setRecipes] = useState( JSON.parse(localStorage.getItem( "recipes" )) || []);

  const [id,setId]=useState(0)
  const [loading,setLoading]=useState(false);


  const fetchRecipies = async (prompt) => {
    const url = 'https://recipe-server-production-a53b.up.railway.app/api/v1/app/chat';
    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(prompt),
      });
  
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
  
      const data = await response.json();
      localStorage.setItem("recipes", JSON.stringify(data.recipesWithImages));
      return data.recipesWithImages; // Use the appropriate field from the response


    }catch (error) {
      throw error;
    }
  };

  const context = {
    promptData,
    setPromptData,
    fetchRecipies,
    Recipes,
    id,setId,
    setRecipes,
    loading,
    setLoading,
    user, setUser
  }

  return (
    <PromptDataContext.Provider value={context}>
        {props.children}
    </PromptDataContext.Provider>
  );
};
