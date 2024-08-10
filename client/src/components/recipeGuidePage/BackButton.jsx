import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
// import './BackButton.css';
import promptDataContext from '../../context/PromptDataContext';

const BackButton = () => {
  const {setPromptData} = useContext(promptDataContext)
  const navigate = useNavigate();
  return (
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
      navigate('/recipeResult');
    }}
  >
    Back
  </button>
  );
};

export default BackButton;
