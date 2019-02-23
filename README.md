# Would You Rather!?

Would you rather is a simple game of choices that can be played individually or as a group.  Choose "Play" and the game will provide the user with questions to ponder.  "Would you rather do this, or that?" 

Would You Rather!? was built as a small group effort using the MERN stack (MongoDB, Express, React, Node).  The app features full CRUD (create, read, update, delete) and is consided v1.0 MVP (Minimum Viable Product).  The app was built utilizing GitHub's Gitflow workflow build for.


This app has been deloyed to Heroku. Given how slow Heroku may be, you may find you need to refresh the page a few times to wake it up.

# Deployed URL
 https://sei-wouldyourather.surge.sh/

# Repositories:

Frontend: https://github.com/bananabrann/would-you-rather-frontend

Backend: https://github.com/RendonEls/would-you-rather-backend

 # Screenshot Sample

![Screenshot](./planning/images/screenShot.png)


# Works in progress
As of Feb. 22, 2019:  
    1. Finish styling across all pages
    2. Refactor code to be DRY
    3. Clean up CSS

# Future Feature Adds:
1. Add option to pull questions from a "PG13" database
2. Make the app 100% mobile friendly
3. Add Stats options to show how many times a user selected each option per question set
4. Finish About section 

# Project Plan for MVP:

![Plan](./planning/images/Planning-chart.png)


### Planning


  Day 1: 
  
  1. User Story
  -- user will see the homepage on first visit, homepage will clearly display selection buttons to Play, see stats, or options to edit game play.  The game will allow users to add additional questions, remove, or edit other questions.  User will also be able to play the game
  2. Wire Frame
  3. Create Repos for Github and clone down
  4. Setup directory/file structure
  5. plan/install dependencies
  6. build backend with node, server with express
  7. build frontend with react
  8. connect frontend and backend
  9. set goals for Day 2

  Day 2: 

  1. build model: Play
  2. create DB with seed.js file 
  3. fill seed file with test dataand logic for filling mongoDB
  4. Develop Create question form
  5. Develop edit question form
  6. Add logic on backend for POST of additional questions
  7. Plan goals for Day 3

  Day 3:
  1. Add Delete and Edit buttons to frontend
  2. Add PUT logic for frontend
  3. Add PUT logic for backend
  4. add Edit logic for frontend -- not accomplished
  5. add Edit logic for backend -- not accomplished
  6. Play day 4 goals
  

  Day 4:
  1. finish update/delete logic
  2. Plan day 5 goals

  Day 5:
  1. Deploy app
  2. user documentation
  3. with available time add styling/refactor
