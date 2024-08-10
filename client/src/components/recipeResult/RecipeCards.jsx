import React,{useContext} from 'react';
import './recipeResult.css';
import { useNavigate} from 'react-router-dom';

const RecipeCards = (props) => {
  const navigate = useNavigate();

  const onClickHandler = (e)=>{
    navigate(`/recipeGuidePage/${props.index}`)
  }
  return (
    <div className='recipeFoodCard' onClick={onClickHandler}>
      <div className="recipeCardImage" style={{  background: `url(${props.imgUrl}) lightgray 50% / cover no-repeat`}}>  
      </div>
      <span className='recipeCardName'>{props.name}</span>
    </div>
  );
};

export default RecipeCards;
