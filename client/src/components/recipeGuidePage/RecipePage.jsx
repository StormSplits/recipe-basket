import React, { useContext } from 'react';
import RecipeContainer from './RecipeContainer';
import ImageAndBackLayer from './ImageAndBackLayer';
import { SaveLogo } from '../saveLogo/SaveLogo';
import BackButton from './BackButton';
import './recipePage.css';
import { Link, useParams } from 'react-router-dom';
import promptDataContext from '../../context/PromptDataContext';


const RecipePage = () => {
  const params = useParams()
  const {Recipes} = useContext(promptDataContext);
  const data = Recipes[params.id];
  return (
    <div className="RecipePage" >
      <Link to='/saved'><SaveLogo /></Link>

      <div className="ImageButton">
        <ImageAndBackLayer imgUrl = {data.imageUrl}/>
        <div className="Button1"><BackButton /></div>
      </div>

      <div className="ContainerButton">
        <RecipeContainer description={data.description} imageUrl={data.imageUrl} name={data.name} cuisine={data.cuisine} tips={data.tips}   instructions={data.instructions} ingredients={data.ingredients}/>
       <div className="Button2"><BackButton /></div>
      </div>
    </div>
  );
};

export default RecipePage;
