# Project Name

## Project Description
A brief description of your project.

## Folder Structure
Below is an overview of the project folder structure:

```plaintext
│   .gitignore               # Specifies files and directories to be ignored by Git
│   package-lock.json        # Describes the exact versions of dependencies installed
│   package.json             # Metadata about the project and its dependencies
│   README.md                # Overview of the project and setup instructions
│
├───node_modules             # Contains all the project dependencies
│   └───.cache               # Stores cache files for build processes
│
├───public                   # Public assets and static files
│       favicon.ico          # Icon displayed in the browser tab
│       index.html           # Main HTML file for the application
│       logo192.png          # Logo image with 33x33 resolution 
│       logo512.png          # Logo image with 33x33 resolution
│       manifest.json        # Metadata for web app installation
│       robots.txt           # Instructions for web crawlers
│
└───src                      # Source files for the application
    │   App.css              # Styles for the main App component
    │   App.js               # Main component defining the app structure
    │   App.test.js          # Tests for the App component
    │   index.css            # Global CSS styles
    │   index.js             # Entry point for the React application
    │   reportWebVitals.js   # Web vitals reporting
    │   setupTests.js        # Test setup configuration
    │
    ├───components           # Reusable components
    │   ├───foodCard
    │   │       FoodCard.css # Styles for FoodCard component
    │   │       FoodCard.jsx # FoodCard Taking Meta data via props
    │   │
    │   ├───header
    │   │       header.css   # Styles for Header component
    │   │       Header.jsx   # Contains Logo image and text , uses ../../graphicalContent/logo.svg
    │   │
    │   ├───heading
    │   │       pageHeading.css # Styles for PageHeading component
    │   │       PageHeading.jsx # PageHeading component, takes heading text via props
    │   │
    │   ├───home
    │   │   │   home.css        # Styles for Home component
    │   │   │   Home.jsx        # uses ../heading/PageHeading.jsx, ../header/Header, ./inputForm/InputForm.jsx,../foodCard/FoodCard.jsx
    │   │   │
    │   │   └───inputForm
    │   │           Input.css        # Styles for Input form components
    │   │           InputForm.jsx    # Main input form component uses ./InputQuestions , ./InputLoader
    │   │           InputLoader.jsx  # Loader for input form takes progress level via props
    │   │           InputQuestion.jsx # Depends on props for ques  and context to store ans
    │   │
    │   ├───savedFood
    │   │       SavedFood.css # Styles for SavedFood component
    │   │       SavedFood.jsx # SavedFood component uses ../foodCard/FoodCard.jsx
    │   │
    │   └───saveLogo
    │           saveLogo.css  # Styles for SaveLogo component
    │           SaveLogo.jsx  # SaveLogo component uses ../graphicalContent/saveLogo.svg
    │
    ├───context               # Context API for state management
    │       PromptDataContext.jsx # Context for prompt data
    │       PromptDataState.jsx   # State provider for prompt data context, (object of all Required answers)
    │
    └───graphicalContent      # Static graphical assets
            logo.svg          # Logo SVG (FoodBasket Logo)
            patternBG.png     # Background pattern image (Background Pattern )
            r1p.jpg           # Image used in the application (Home page aside div background image)
            saveLogo.svg      # Save logo SVG (Save Icon)
