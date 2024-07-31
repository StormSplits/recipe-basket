import React from 'react';
import './recipeContainer.css';
import AddToSave from '../saveLogo/ToSave'

const RecipeContainer = (props) => {
  return (
    <div className="recipe-container">
      
      <AddToSave data={props} />
      
      <div className="recipe-card">
        <h2>{props.name}</h2>
        <p>{props.description}</p>
        <h3>Ingredients</h3>
        <ul>
          {props.ingredients.map((ingredient, i) => (
            <li key={i}>{ingredient}</li>
          ))}
        </ul>
        <h3>Instructions</h3>
        <ol>
        {/* <li >{props.instructions}</li> */}
          {props.instructions.map((instruction, i) => (
            <li key={i}>{instruction}</li>
          ))}
        </ol>
        <h3>Tips</h3>
        <ul>
        {/* <li >{props.tips}</li> */}
          {props.tips.map((tip, i) => (
            <li key={i}>{tip}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default RecipeContainer;
