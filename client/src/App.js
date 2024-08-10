import './App.css';
import Home from './components/home/Home';
import { Header } from './components/header/Header';
import SavedFood from './components/savedFood/SavedFood';
import {BrowserRouter as Router , Routes , Route } from 'react-router-dom'
import RecipeResult from './components/recipeResult/RecipeResult';
import RecipePage from './components/recipeGuidePage/RecipePage';

function App() {
  return (
    <Router>
    <div className="App">
      <Header />
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/saved' element={<SavedFood/>}/>
      <Route path='/recipeResult' element={<RecipeResult/>}/>
      <Route path='/recipeGuidePage/:id' element={<RecipePage />}/>
    </Routes>
    </div>
    </Router>
  );
}

export default App;
