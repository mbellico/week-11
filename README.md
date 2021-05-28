# "Become a QA Automation - Week 11"

## What is the Project about?
Creating a web server to handle HTTP requests and responses.
Uploading the Login and Register Forms created during [Week-10](https://github.com/mbellico/weeks-9-and-10) to the server.

# Author
[Melisa D. Bellico](https://www.linkedin.com/in/melisabellico/)

## Technology stack
* [Node.js](https://nodejs.org/es/docs/)
* [Express.js](https://expressjs.com/es/) for the BackEnd

## How to install?  (you should use the following commands, either on the git or on the VS console)
* $ npm install
* $ npm init to create a package.Json 
* $ npm install express --save

 *The package.Json should contain the following script:*
 
      "scripts": {
        "start": "nodemon index.js",
        "dev": "nodemon index.js"
      },
  

## Starting the server to run (you should use the following commands, either on the git or on the VS console)
* $ npm start

## Login and Register Forms  (Once the server was started to run)
*   [Login](http://localhost:4000/login)
*   [Register](http://localhost:4000/register)

# "Become a QA Automation week 14"

## What is the Project about?

Using **WebDriver IO** to design automated tests for the Login and Register Forms created during week 10, and uploaded to the server during week 11. 

## Technology stack
* [Node.js](https://nodejs.org/es/docs/)
* [Express](https://expressjs.com/es/) for the BackEnd
* [WebDriver IO](https://webdriver.io/docs/gettingstarted) for automated testing.-

## How to install WebDriverIO?
* npm install @wdio/cli
* npx wdio config

*The package.Json should contain the following script:*

      "scripts": {
          "test": "npx wdio run ./wdio.conf.js",
      },

**To run the WebDriver IO tests, use the command 'npm run test'.-**
