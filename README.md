# Recipe Basket

[Recipe Basket](https://therecipebasket.netlify.app/) is a web application designed to provide users with personalized food recipes. By asking a few questions, the app generates a list of five recipes using the Gemini API. It then fetches corresponding images for these recipes from the Pexels API, offering users a complete visual and textual guide to the recipes.

## Table of Contents
- [Problem Statement](#problem-statement)
- [Scope](#scope)
- [Features](#features)
- [Architecture](#architecture)
- [Installation](#installation)
- [Usage](#usage)
- [APIs Used](#apis-used)
- [Contributing](#contributing)
- [License](#license)

## Problem Statement

The Recipe Basket aims to solve the problem of meal planning by offering personalized recipe suggestions. Users often find it challenging to decide what to cook, especially when considering dietary preferences or available ingredients. This app provides a convenient and user-friendly solution by generating recipes tailored to the user's input.

## Scope

The project is designed to help users easily discover and visualize recipes that match their preferences. The app is built with a React frontend and a Node.js backend, and it integrates with external APIs to provide real-time data and images.

## Features

- **Interactive Questionnaire**: Asks users a series of questions to determine their preferences.
- **Recipe Generation**: Generates five unique recipes based on user input using the Gemini API.
- **Image Retrieval**: Fetches high-quality images for each recipe from the Pexels API.
- **Responsive Design**: Optimized for both desktop and mobile devices.

## Architecture

Recipe Basket follows a three-tier architecture:

1. **User Interface Layer**: The frontend is built using React, providing an interactive and responsive user experience.
2. **Application Logic Layer**: Node.js powers the backend, handling API requests, data processing, and business logic.
3. **Data Storage Layer**: Data is temporarily stored and managed during the user session.

## Installation

To set up the project locally:

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/recipe-basket.git
   cd recipe-basket
   ```
2. Install dependencies for both frontend and backend:
   ```bash
   cd client
   npm install
   cd ../backend
   npm install
   ```
3. Create a `.env` file in the backend folder and add your API keys:
   ```
   GEMINI_API_KEY=your_gemini_api_key
   PEXELS_API_KEY=your_pexels_api_key
   ```
4. Start the development server:
   ```bash
   npm run dev
   ```

## Usage

1. Open your browser and navigate to `http://localhost:3000`.
2. Follow the on-screen instructions to answer the questionnaire.
3. View the generated recipes along with their images.

## APIs Used

- **Gemini API**: Used to generate recipes based on user preferences.
- **Pexels API**: Used to fetch images corresponding to the generated recipes.

## Team Members

Special thanks to everyone:
- [SonuVerma6388](https://github.com/SonuVerma6388)
- [shubhamchauhan8881](https://github.com/shubhamchauhan8881)
- [ShivamTiwari0214](https://github.com/ShivamTiwari0214)
- [1101surabhi](https://github.com/1101surabhi)
- [excelgufran](https://github.com/excelgufran)
- [StormSplits](https://github.com/StormSplits)

## License

This project is licensed under a proprietary license. Unauthorized use, distribution, or reproduction of this project or any of its components is strictly prohibited. This license grants no rights to use, copy, modify, or distribute the project or its source code.

For any inquiries or permissions, please contact the project maintainers.
