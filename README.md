# Jeopardy Generator
Whether for exam review or entertainment, build your own Jeopardy board.

## Working Prototype???
You can access a working prototype of the React app here: https://your-app-client.herokuapp.com/ and Node app here: https://your-app-server.herokuapp.com/


## User Stories???
This app is for two types of users: a visitor and a logged-in user

#### Landing Page
* as a visitor
* I want to understand what I can do with this app (or sign up, or log in)
* so I can decide if I want to use it

#### Login Page
* as a visitor
* I want to log into this application 
* so I can play the game

#### Registration Page
* as a visitor
* I want to register a secure account
* so I can play the game

#### Home Page
* as a visitor
* I want a place to create and store my boards
* so I can play and post them for others to use

#### Popular Boards Page
* as a visitor
* I want see the most popular boards uploaded
* so I can play them myself

#### Recent Page
* as a visitor
* I want to see all the boards that were recently posted
* so I can play them myself

#### Support Page
* as a visitor
* I want a place to report errors in the page
* so I can play and post them for others to use



### Wireframes???
Landing/Login Page
:-------------------------:
![Landing/Login Page](/github-images/wireframes/landing-page-wireframe.png)
Landing/Register Page
![Landing/Register Page](/github-images/wireframes/registration-page.png)
Main Page
![Main Page](/github-images/wireframes/main-page.png)
Main Page/Gameboard
![Main Page/Gameboard](/github-images/wireframes/gameboard-layout.png)
Main Page/Question Submission
![Main Page/Question Submission](/github-images/wireframes/question-submission-page.png)
Support Page
![Support Page](/github-images/wireframes/support-page.png)

## Screenshots???
Landing/Login Page
:-------------------------:
![Landing Page](/github-images/screenshots/login-page-screenshot.png)
Landing/Register Page
![Register Page](/github-images/screenshots/login-page-screenshot.png)

## Functionality
The app's functionality includes:
* Every User has the ability to create an account
* Every User has the ability to create fully functioning Jeopardy boards
* Every User has the ability to play a fully functiong Jeopardy board down to final Jeopardy
* Every User has the abilty to play other people's boards posted in both the Popular and Recent tabs


## Technology
* Front-End: HTML5, CSS3, JavaScript ES6, React
* Back-End: Node.js, Express.js, Mocha, Chai, RESTful API Endpoints, Postgres
* Development Environment: Heroku, DBeaver


## Front-end Structure - React Components Map???
* __Index.js__ (stateless)
    * __App.js__ (stateful)
        * __LandingPage.js__ (stateful) - gets the _"prop name"_ and the _"callback prop name"_ from the __App.js__
            * __Login.js__ (stateful) -
            * __Register.js__ (stateful) -
        * __Navbar.js__ (stateless) -
        * __Homepage.js__(stateless) -
            * __NewBoardButton.js__(stateful)
            * __BoardWrapper.js__(stateless)
                * __Title.js__(stateless)
                * __Button.js__(stateless)
                    * __PlayBoard.js__(stateful)
        * __Popular.js__(statless) -
        * __Recent.js__(stateless) -
        * __Support.js__(stateless) -
            * __SupportForm.js__(stateful)


## Back-end Structure - Business Objects???
* User (database table)
    * Username (email validation)
    * Password (at least 8 chars, at least one alpha and a special character validation)


## API Documentation???
API Documentation details:
* get all users

## Responsive
App is built to be usable on mobile devices, as well as responsive across mobile, tablet, laptop, and desktop screen resolutions.

## Development Roadmap???
This is v1.0 of the app, but future enhancements are expected to include:
* add more functionality

## How to run it
Use command line to navigate into the project folder and run the following in terminal

### Local Node scripts
* To install the node project ===> npm install
* To migrate the database ===> npm run migrate -- 1
* To run Node server (on port 8000) ===> npm run dev
* To run tests ===> npm run test

### Local React scripts
* To install the react project ===> npm install
* To run react (on port 3000) ===> npm start
* To run tests ===> npm run test