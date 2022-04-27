# Setting custom eslint import order rules

## What is ESLint?
ESLint is a static code analysis tool for identifying problematic patterns found in JavaScript code.

## What does Eslintrc file do?
We use eslintrc. json to define the configuration structure. ESLint supports configuration files in several formats such as `JavaScript (.js), JavaScript (ESM) (.cjs), YAML (.yaml or .yml), JSON (.json) and package.json` (create an eslintConfig property in your package.json file and define your configuration there).

## Adding ESLint to existing project:
In order to add and use ESLint in an existing project, follow the below steps:
1.	Add ESLint as a dev dependency by running the following command in the project root directory:
### `npm install --save-dev eslint`
2.	Once ESLint is installed in your project, the next step is to generate or initialize the eslint config file. Use either of the below commands to generate an eslint file for your project:
### `npm init @eslint/config`    OR     `eslint –init`
You will be asked few questions as below, select the appropriate options as shown aside them also: <br/>
    How would you like to use ESLint? (To check syntax and find problems) <br/>
    What type of modules does your project use? (JS modules)  <br/>
    Which framework does your project use? (React/Vue)  <br/>
    Does your project use TypeScript? (Yes/No)  <br/>
    Where does your code run? (Browser/Node) <br/>
    What format do you want your config file to be in? (JS/YAML/JSON) <br/>
    Would you like to install them now with npm? (Yes/No) <br/>
    Answer all the questions as per your project and select yes for the last question to install eslint. <br/>
After that, the following file will be generated in the project root directory (in case we selected React as framework, Yes for TypeScript and JSON for format of config file): <br/>

```javascript
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
```

3.	Now that the initial setup is done, we can add our own custom rules in this file. Let’s say we want to make the imports appear in a certain order in every component file and the import order that needs to be followed is like this:
    1.	Import React.
    2.	Import @fnz packages (in alphabetical order). 
    3.	Import third party packages (in alphabetical order).
    4.	Import internal components (in alphabetical order). 
    5.	Import entities (in alphabetical order).
    6.	Import utils (in alphabetical order). <br/>
In order to achieve this import order rule, add “import” under “plugins” and modify the eslint.json file by adding a rule as shown below: <br/>

```javascript
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
        "@typescript-eslint",
        "import"            // This plugin is required for import/order rule to work
    ],
    "rules": {
        "import/order": ["error", {
            "warnOnUnassignedImports": true,
            "groups": ["builtin", "external", "internal", "parent", "sibling", "index"],
            "pathGroups": [
                {
                  "pattern": "react",           // React import should be the first one in order
                  "group": "builtin",
                  "position": "before"
                },
                {
                    "pattern": "fnzc/**",       // All fnzc package imports should be before external imports
                    "group": "external",        // Here, fnzc represents an external package, it can later be changed to anything else
                    "position": "before"
                },
                {
                    "pattern": "entities/**",   // Entities imports should appear after sibling imports
                    "group": "sibling",
                    "position": "after"
                },
                {
                    "pattern": "utils/**",      // Utils imports should appear after sibling imports (also after entities import)
                    "group": "sibling",
                    "position": "after"
                },
                {
                    "pattern": "*.css",         // All css related imports should appear at last (after index)
                    "patternOptions": {
                      "dot": true,
                      "nocomment": true,
                      "matchBase": true
                    },
                    "group": "index",
                    "position": "after"
                  }
            ],
            "pathGroupsExcludedImportTypes": ["react", "fnzc", "entities", "utils", "builtin"],  // Here, fnzc represents an external package, it can later be changed to anything else
            "alphabetize": {
                "order": "asc",
                "caseInsensitive": true
                }
            }
        ]
    }
}

```

## RULE EXPLANATION: This rule supports the following options:
### groups: [array]:
groups must be an array of string or [string], it specifies the order to respect. The only allowed strings are : <br/>
`"builtin", "external", "internal", "unknown", "parent", "sibling", "index", "object", "type"` <br/>
The enforced order is the same as the order of each element in a group. Omitted types are implicitly grouped together as the last element.  <br/>
The allowed string types are explained below:
1.	"builtin":  node “builtin” modules <br/>
e.g. - import fs from ‘fs’; 
2.	"external": external/third-party modules <br/>
       e.g. – import _ from ‘lodash’;
3.	"internal": internal modules <br/>
e.g. – import foo from ‘src/foo’;
4.	"parent": modules from a parent directory <br/>
e.g. – import foo from ‘../foo’;
5.	"sibling": sibling modules from the same or a sibling’s directory <br/>
e.g. – import bar from ‘./bar’;
6.	"index": index of the current directory <br/>
      e.g. – import main from ‘./’;
7.	"object": object imports (only available in TypeScript) <br/>
      e.g. – import log = console.log;
8.	"type": type imports (available in TypeScript) <br/>
e.g. – import type { Foo } from ‘foo’;

### pathGroups: [array of objects]:

To be able to group by paths mostly needed with aliases pathGroups can be defined. We’ll be using this for entities and utils imports. Each path group object has certain properties as below:
1.	pattern - minimatch pattern for the paths to be in this group.
2.	patternOptions - options for minimatch.
3.	group - one of the allowed groups, the pathGroup will be positioned relative to this group.
4.	position - defines where around the group the pathGroup will be positioned, can be ‘after’ or ‘before’, if not provided pathGroup will be positioned like the group.

### pathGroupsExcludedImportTypes: [array]:

This defines import types that are not handled by configured pathGroups.  <br/>
This is mostly needed when you want to handle path groups that look like external imports. <br/>
### `alphabetize: {order: asc|desc|ignore, caseInsensitive: true|false}`

Sort the order within each group in alphabetical manner based on import path:
-	order: use asc to sort in ascending order, and desc to sort in descending order (default: ignore).
-	caseInsensitive: use true to ignore case, and false to consider case (default: false).

### Example:
```javascript
alphabetize: {
  order: 'asc', /* sort in ascending order. Options: ['ignore', 'asc', 'desc'] */
  caseInsensitive: true /* ignore case. Options: [true, false] */
}
```

## CHALLENGE: 
The imports of type `“../something”` or `“../../something”` are considered as part of `“parent”` group, but we want them to be identified as `“internal”` components. <br/> This can be achieved by setting the baseUrl to `“src”` in tsconfig.json file. Once this is done, then the imports inside our components will also have to be modified in such as way so that if there is any import, which is the immediate child of `“src”`, then that would be written as – 

Before change – `import “../../components/List”`
After change – `import “components/List”`
Where components folder is one level inside `src` folder.
The advantage of taking this approach would be that we would not need to worry about the component’s location in the project while importing it in some other component.

## Auto-fix ESlint errors
### Fix autofixable errors only
To fix the eslint errors automatically, we have two options: 
1. Include a script in package.json file in scripts section: 
    ```javascript
    "lint-fix": "eslint --fix src/**/*.tsx"
    ```
    To execute this script run the following command on terminal: 
    `npm run lint-fix`
2. Run this command in terminal directly
    `npx eslint --fix src/**/*.tsx` (for files with .tsx extension).

### Some useful links:
1.	https://eslint.org/docs/user-guide/getting-started
2.	https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/order.md

