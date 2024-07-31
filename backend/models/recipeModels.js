const mongoose = require('mongoose');

const recipeSchema = new mongoose.Schema({
  person: {
    type: String,
  },
  result: {
    type: String,
  },
});

recipeSchema.pre('save', async function (next) {
  // console.log(this);
  if (!this.isModified('_id')) {
    return next();
  }
});

const Recipe = mongoose.model('Recipe', recipeSchema);

module.exports = Recipe;
