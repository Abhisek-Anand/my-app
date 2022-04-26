# Setting custom eslint import order rules

## What is ESLint?
ESLint is a static code analysis tool for identifying problematic patterns found in JavaScript code.

## What does Eslintrc file do?
We use eslintrc. json to define the configuration structure. ESLint supports configuration files in several formats such as JavaScript (.js), JavaScript (ESM) (.cjs), YAML (.yaml or .yml), JSON (.json) and package.json (create an eslintConfig property in your package.json file and define your configuration there).

## Adding ESLint to existing project:
In order to add and use ESLint in an existing project, follow the below steps:
1.	Add ESLint as a dev dependency by running the following command in the project root directory:
### `npm install --save-dev eslint`
2.	Once ESLint is installed in your project, the next step is to generate or initialize the eslint config file. Use either of the below commands to generate an eslint file for your project:
### `npm init @eslint/config`    OR     `eslint –init`
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
a.	Import React.
b.	Import @fnz packages (in alphabetical order).
c.	Import third party packages (in alphabetical order).
d.	Import internal components (in alphabetical order).
e.	Import entities (in alphabetical order).
f.	Import utils (in alphabetical order).
In order to achieve this import order rule, add “import” under “plugins” and modify the eslint.json file by adding a rule as shown below:

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
        "import"
    ],
    "rules": {
        "import/order": ["error", {
            "warnOnUnassignedImports": true,
            "groups": ["builtin", "external", ["internal", "sibling"], ["parent", "index"]],
            "pathGroups": [
                {
                  "pattern": "react",
                  "group": "builtin",
                  "position": "before"
                },
                {
                    "pattern": "fnzc/**",  // Can later be changed to fnz
                    "group": "external",
                    "position": "before"
                },
                {
                    "pattern": "entities/**",
                    "group": "sibling",
                    "position": "after"
                },
                {
                    "pattern": "utils/**",
                    "group": "sibling",
                    "position": "after"
                },
                {
                    "pattern": "*.css",
                    "patternOptions": {
                      "dot": true,
                      "nocomment": true,
                      "matchBase": true
                    },
                    "group": "index",
                    "position": "after"
                  }
            ],
            "pathGroupsExcludedImportTypes": ["react", "fnzc", "entities", "utils", "builtin"], // Change here also
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
groups must be an array of string or [string], it specifies the order to respect. The only allowed strings are :
"builtin", "external", "internal", "unknown", "parent", "sibling", "index", "object", "type"
The enforced order is the same as the order of each element in a group. Omitted types are implicitly grouped together as the last element. The allowed string types are explained below:
a.	"builtin":  node “builtin” modules
e.g. - import fs from ‘fs’;
b.	"external": external/third-party modules
       e.g. – import _ from ‘lodash’;
c.	"internal": internal modules
e.g. – import foo from ‘src/foo’;
d.	"parent": modules from a parent directory
e.g. – import foo from ‘../foo’;
e.	"sibling": sibling modules from the same or a sibling’s directory
e.g. – import bar from ‘./bar’;
f.	"index": index of the current directory
      e.g. – import main from ‘./’;
g.	"object": object imports (only available in TypeScript)
      e.g. – import log = console.log;
h.	"type": type imports (available in TypeScript)
e.g. – import type { Foo } from ‘foo’;

### pathGroups: [array of objects]:

To be able to group by paths mostly needed with aliases pathGroups can be defined. We’ll be using this for entities and utils imports. Each path group object has certain properties as below:
a.	pattern - minimatch pattern for the paths to be in this group.
b.	patternOptions - options for minimatch.
c.	group - one of the allowed groups, the pathGroup will be positioned relative to this group.
d.	position - defines where around the group the pathGroup will be positioned, can be ‘after’ or ‘before’, if not provided pathGroup will be positioned like the group.

### pathGroupsExcludedImportTypes: [array]:

This defines import types that are not handled by configured pathGroups. This is mostly needed when you want to handle path groups that look like external imports.
alphabetize: {order: asc|desc|ignore, caseInsensitive: true|false}:

Sort the order within each group in alphabetical manner based on import path:
•	order: use asc to sort in ascending order, and desc to sort in descending order (default: ignore).
•	caseInsensitive: use true to ignore case, and false to consider case (default: false).

### Example:
```javascript
alphabetize: {
  order: 'asc', /* sort in ascending order. Options: ['ignore', 'asc', 'desc'] */
  caseInsensitive: true /* ignore case. Options: [true, false] */
}
```

### Some useful links:
1.	https://eslint.org/docs/user-guide/getting-started
2.	https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/order.md

