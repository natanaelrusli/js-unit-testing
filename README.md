# Javascript Unit Testing
## Using JEST

The binary files that will be executed when we run jest is located at
`./node_modules/.bin/jest`

By now, Jest are not compatible to test javascript module, so we need to integrate jest with [babel](https://babeljs.io/) to compile the js file to the version which jest will understand.

- Here are the documentation for integrating babel with jest
[Jest - Babel Integration](https://babeljs.io/setup#installation)

- There are a lot of configuration that we can do in jest, such as: auto mock, bail, cache directory, and so on...
Configuring Jest 
[Official Documentation](https://jestjs.io/docs/configuration)
[Configuring Jest in package.json](https://jest-bot.github.io/jest/docs/configuration.html) or type `npx test --help` from the terminal.

- In Jest, when we want to test our expectation of a result from a function, we can use something called [matchers](https://jestjs.io/docs/using-matchers)
- To specify what we expect, we can use the [expect](https://jestjs.io/docs/expect) methods