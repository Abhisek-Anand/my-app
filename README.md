# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## ESLint import order rule:

What is ESLint?
ESLint is a static code analysis tool for identifying problematic patterns found in JavaScript code.

What does Eslintrc file do?
We use eslintrc. json to define the configuration structure. ESLint supports configuration files in several formats such as JavaScript (.js), JavaScript (ESM) (.cjs), YAML (.yaml or .yml), JSON (.json) and package.json (create an eslintConfig property in your package.json file and define your configuration there).

Adding ESLint to existing project:
In order to add and use ESLint in an existing project, follow the below steps:
1.	Add ESLint as a dev dependency by running the following command in the project root directory:
### npm install --save-dev eslint
2.	Once ESLint is installed in your project, the next step is to generate or initialize the eslint config file. Use either of the below commands to generate an eslint file for your project:
### npm init @eslint/config    OR     eslint –init
You will be asked few questions as below, select the appropriate options as shown aside them also:
How would you like to use ESLint? (To check syntax and find problems)
What type of modules does your project use? (JS modules)
Which framework does your project use? (React/Vue)
Does your project use TypeScript? (Yes/No)
Where does your code run? (Browser/Node)
What format do you want your config file to be in? (JS/YAML/JSON)
Would you like to install them now with npm? (Yes/No)
Answer all the questions as per your project and select yes for the last question to install eslint.
After that, the following file will be generated in the project root directory (in case we selected React as framework, Yes for TypeScript and JSON for format of config file):

{
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended",
        "plugin:@typescript-eslint/recommended"
    ],
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "plugins": [
        "react",
        "@typescript-eslint"
    ],
    "rules": {
    }
}



### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
