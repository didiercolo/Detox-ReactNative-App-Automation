# Calculator Automation

## Tools:

 - Detox
 - Jest
## Folder Structure

All Detox tests are inside of `e2e` folder.

 - `config.json`: Contains JEST configuration to execute all tests
 - `init.js`: Contains the intial actions used by Detox to execute tests
 - calculator folder: Contains the class used in the tests to interact with the calculator app, it simulates the Page Object Pattern
 - `calculator/calculator.js`: contains all elements and funtions used in the test files
 - test folder: Contains all test files
 - `test/e2eTest.spec.js`: Contains a test that performs a sum, subtract, multiple and divide operations
 - `test/simpleOperationsTest.spec`: Contains a simple implementation of each arithmetic operation


## How to run the tests

 1. In the terminal at the root of the project, execute `npm install` to get latest dependencies
 2. Then  execute `detox test`
