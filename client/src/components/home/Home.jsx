import './home.css'
import { SaveLogo } from '../saveLogo/SaveLogo';
import { PageHeading } from '../heading/PageHeading';
import { InputForm } from './inputForm/InputForm';
import { FoodCard } from '../foodCard/FoodCard';
import { Link } from 'react-router-dom';
import RecipeLoading from '../recipeResult/RecipeLoading';
import { useContext } from 'react';
import promptDataContext from '../../context/PromptDataContext';

function Home () {
    const { loading, Recipes } = useContext(promptDataContext);

    const cookeDishes = [
        {
            name: "Recent Search",
            cuisine: "will be here.",
            imageUrl: "https://wallpapercave.com/wp/wp3376127.jpg"
        },
        {
            name: "Recent Search",
            cuisine: "will be here.",
            imageUrl: "https://wallpapercave.com/wp/wp3376127.jpg"
        },
        {
            name: "Recent Search",
            cuisine: "will be here.",
            imageUrl: "https://wallpapercave.com/wp/wp3376127.jpg"
        }
    ];

    return (
        <div className='homeDiv'>
            <div className='HomeContent'>
                <Link to='/saved'><SaveLogo /></Link>
                <div className="PageHeadings">
                    <PageHeading top='Your Ingredients,' bottom='Our Recipes!' />
                    <div className="HomeFoodLogoContainer">
                    <div className="HomeFoodLogo"></div>
                     </div>
                </div>

                <div className="InputformArea">
                <InputForm />
                </div>
                    <div className="Imagess">
                    <div className="HomeFoodLogoContainer2">
                    <div className="HomeFoodLogo2"></div>
                     </div>
                     </div>
                <div className="foodSuggestion">
                    {
                        Recipes.length > 0 && <FoodCard dishes={Recipes.slice(0, 3)} />
                    }
                </div>
            </div>

            {loading && <RecipeLoading />}
        </div>
    )
}

export default Home;
