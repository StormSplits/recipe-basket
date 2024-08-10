const { GoogleGenerativeAI } = require('@google/generative-ai');

class Gemini {
  model;
  constructor() {
    const genAI = new GoogleGenerativeAI(process.env.API_KEY);
    this.model = genAI.getGenerativeModel({
      model: 'gemini-1.5-flash',
      generationConfig: { responseMimeType: 'application/json' },
    });
  }

  async generatChat(prompt) {
    try {
      const result = await this.model.generateContent(prompt);
      return result;
    } catch (err) {
      console.log(err);
    }
  }
}

module.exports = Gemini;
