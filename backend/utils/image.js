const axios = require('axios');

class Image {
  agent = '';
  pexelsUrl = '';
  constructor() {
    this.agent = process.env.PEXELS_API_KEY;
    this.pexelsUrl = 'https://api.pexels.com/v1/search';
  }

  async fetchRecipeImages(recipeNames) {
    const headers = {
      Authorization: this.agent,
    };

    const imageRequests = recipeNames.map(async (name) => {
      try {
        const response = await axios.get(this.pexelsUrl, {
          headers,
          params: {
            query: name,
            per_page: 1,
          },
        });
        const images = response.data.photos;
        return images.length > 0 ? images[0].src.large : null; // Image size parameter
      } catch (error) {
        console.error(`Error fetching image for recipe: ${name}`, error);
        return null;
      }
    });

    return Promise.all(imageRequests);
  }
}

module.exports = Image;
