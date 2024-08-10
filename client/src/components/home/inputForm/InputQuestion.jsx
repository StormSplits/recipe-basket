import { useContext } from "react";
import promptDataContext from "../../../context/PromptDataContext";
import { useNavigate } from "react-router-dom";

export const InputQuestion = (props) => {
  const navigate = useNavigate();
  let index = props.progress;

  const question = [
    "What's in your pantry?",
    "Do you have any dietary needs or preferences?",
    "What kind of food are you craving?",
    "What's the occasion?",
    "How much time do you have to spare?",
    "How would you rate your cooking skills?",
    "Are there any food allergies or intolerances I should be aware of?",
    "What kitchen tools do you have at your disposal?",
    "Do you prefer quick and easy recipes or are you up for a challenge?",
    "How many people are you cooking for?",
  ];
  const hint = [
    "Please list the ingredients you have at home",
    "e.g., vegetarian, gluten-free and non-vegetarian ",
    "e.g., Italian, Mexican, Chinese",
    "e.g., Breakfast, lunch, dinner, or snack ideas",
    "e.g., less than 30 minutes or more than an hour",
    "e.g., beginner, intermediate, advanced",
    "e.g., nut-allergy, curd-allergy, etc",
    "e.g., blender, slow cooker, oven",
    "No or Yes (If yes, then please mention the challenge) ",
    "e.g., 1 or 2",
  ];
  const name = [
    "ingredients",
    "dietaryNeeds",
    "craving",
    "occasion",
    "time",
    "skill",
    "allergies",
    "tools",
    "preference",
    "servings",
  ];
  const { promptData, setPromptData, setRecipes, setLoading, fetchRecipies } =
    useContext(promptDataContext);

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    setLoading(true);
    let attempts = 0;
    let success = false;

    while (attempts < 3 && !success) {
      try {
        let res = await fetchRecipies(promptData);
        if (res) {
          console.log(res);
          setRecipes(res);
          navigate("/recipeResult");
          success = true;
        } else {
          attempts++;
          if (attempts < 3) {
            console.log("No recipe found. Retrying...");
          } else {
            console.error("No recipe found after 3 attempts.");
            alert("No recipe found after 3 attempts.");
          }
        }
      } catch (e) {
        attempts++;
        if (attempts < 3) {
          console.log("Error: " + e.message + ". Retrying...");
        } else {
          console.error("Error after 3 attempts: " + e.message);
          alert("Error after 3 attempts: " + e.message);
        }
      }
    }

    setLoading(false);
  };

  const onClickHandler = (e) => {
    e.preventDefault();
    props.setProgress(index + 1);
  };

  return (
    <form onSubmit={onSubmitHandler}>
      <label>
        {question[index]}
        <br />
        <input
          type="text"
          name={String(name[index]).trim()}
          required={index === 0 || index === 9}
          value={promptData[name[index]] || ""}
          placeholder={hint[index]}
          onChange={(e) =>
            setPromptData({ ...promptData, [e.target.name]: e.target.value })
          }
        />
      </label>
      <br />
      <div className="inputButtonDiv">
        {index > 0 && index < 9 && (
          <button className="skip" onClick={onClickHandler}>
            Skip
          </button>
        )}
        {index < 9 && (
          <button
            className="next"
            onClick={onClickHandler}
            disabled={promptData[name[index]].length < 1}
          >
            Next &nbsp; <i className="fa-solid fa-check checkCenter"></i>
          </button>
        )}
        {index === 9 && (
          <button
            className="next"
            type="submit"
            disabled={index === 9 && promptData[name[9]].length < 1}
          >
            Show Recipes
          </button>
        )}
      </div>
    </form>
  );
};
