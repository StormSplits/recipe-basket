const AppError = require('../utils/appError.js');
const Gemini = require('./../utils/genAi.js');
const Recipe = require('./../models/recipeModels.js');
const Image = require('./../utils/image.js');

const uuid = require('uuid');
// uuid();
const catchAsyn = (fn) => {
  return (req, res, next) => {
    fn(req, res, next).catch(next);
  };
};

exports.getChat = catchAsyn(async (req, res, next) => {
  console.log(req.method, req.url);
  const g = new Gemini();
  const img = new Image();

  var prompt = `
    [Provide exactly 5 recipes. No Less and No More.]
    [FORMAT DATA IN JSON CORRECTLY AND REMOVE SPECIAL CHARACTERS IF JSON PARSERS CANT READ THEM AND SEPERATE VALUES USING ',' comma ]

    Ingredients: ${req.body.ingredients},
    Dietary preferences: ${req.body.dietaryNeeds},
    Cuisine: ${req.body.craving},
    Occasion: ${req.body.occasion},
    Time available: ${req.body.time},
    Cooking skill: ${req.body.skill},
    Number of people: ${req.body.servings},
    Kitchen tools: ${req.body.tools},
    Difficulty preference: ${req.body.preference},
    Allergies: ${req.body.allergies},

    Please provide 5 complete detailed recipes for each them in the following JSON format:
    {
      "recipes": [
        {
          "name": "Recipe Name",
          "description": "Description",
          "ingredients": ["Ingredient1", "Ingredient2"],
          "instructions": ["Instruction1","Instruction2"],
          "tips": ["Tips1","Tips2"],
          "cuisine":"Cuisine"
        }
      ]
    }
  `;

  if (!prompt) {
    return next(new AppError('Please Enter your Prompt', 404));
  }

  var result = await g.generatChat(prompt);
  var responseText = result.response.text();
  var recipes = JSON.parse(responseText).recipes;

  // Extracting recipe names
  var recipeNames = recipes.map((recipe) => {
    return recipe.name;
  });

  var recipeImages = await img.fetchRecipeImages(recipeNames);
  var recipesWithImages = recipes.map((recipe, index) => ({
    ...recipe,
    imageUrl: recipeImages[index],
  }));


  // // get previoues recipes
  console.log(req.method, req.url, "response served");
  res.json({
    status: 'success',
    recipesWithImages,
  }).status(200);
});

// show the save recipe in database
exports.saveRecipe = catchAsyn(async (req, res, next) => {
  
  console.log(req.method, req.url);
 
  var user_random_id = req.body.user;

  if(!user_random_id) {
    user_random_id = uuid.v4();
    console.log('person id', user_random_id);
  }

  const newRecipe = await Recipe.create({
    person: user_random_id,
    result: JSON.stringify(req.body.foodData),
  });


  console.log(user_random_id)
  res.status(200).json({
    "ok":true,
    user_random_id
  });
});


exports.getSaved = catchAsyn(async (req, res, next) => {
  console.log(req.method, req.url);
  var person = req.body.user;
  const newRecipe = await Recipe.find({person: person});

  res.status(200).json({
    "ok":true,
    newRecipe
  })
})