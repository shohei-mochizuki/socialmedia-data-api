# Social Media Data API [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## DESCRIPTION 
This application enables you to create and manage a social media platform where users can share their thoughts and leave reactions to other users' thoughts. Available operations include:
* View user information (username, email address, list of thoughts/posts, list of friends and the number of friends) 
* Create, update and delete users
* Add and remove friends
* View thought/post information (text, creation date, username, list of reactions which include text, username and creation date) 
* Create, update and delete thoughts 
* Create and delete reactions

## TABLE OF CONTENTS
[INSTALLATION](#installation)<br>
[USAGE](#usage)<br>
[LICENSE](#license)<br>
[CONTRIBUTION](#contribution)<br>
[TESTS](#tests)<br>
[SCREENSHOTS](#screenshots)<br>
[DEMO](#demo)<br>
[QUESTIONS](#questions)

## INSTALLATION 
This application requires 1.JavaScript, 2.Node.JS (version 16, not the latest), 3.Node package manager, 4.MongoDB, 5.MongoDB Compass and 6.Insomnia to run. In a blank folder, put necessary files (refer to the TESTS section for the details) and open the command line. In the command line, move to this folder and then type "npm install". Make sure that a folder called "node_modules" and a file called package-lock.json are created. Following libraries are used:
* [express](https://www.npmjs.com/package/express)
* [mongoose](https://www.npmjs.com/package/mongoose)

## USAGE 

### Command Line - Preparation
In Command Line, type "npm start" and then you'll see a message "App listening on PORT 3001!". Go to Insomnia and request the following actions:

#### Insomnia - Path
* Users: http://localhost:3001/api/users/
* Friends: http://localhost:3001/api/users/:userId/friends/
* Thoughts: http://localhost:3001/api/thoughts/
* Reactions: http://localhost:3001/api/thoughts/:thoughtId/reactions/

#### Method
* GET: to view data (you can add an ID at the end of the path like "/tags/2uyhsyiung6rt52x" if you would like to view specific data)
* POST: to add new data 
* PUT: to update existing data (you need to add an ID at the end of the path to specify the item)
* DELETE: to delete data (you need to add an ID at the end of the path to specify the item)

#### Inputs for POST and PUT
* User: {"username": "string", "email": "email"}
* Friend: Nothing in the request body but add the friend's userId at the end of the path
* Thought: {"thoughtText": "string", "username": "string", "userId": "string (ID)"}
* Reaction: {"reactionBody": "string", "username": "string"}

## LICENSE 
MIT:<br>
Permission is hereby granted, free of charge, to any person obtaining a copy of this
software and associated documentation files (the “Software”), to deal in the Software
without restriction, including without limitation the rights to use, copy, modify,
merge, publish, distribute, sublicense, and/or sell copies of the Software, and to 
permit persons to whom the Software is furnished to do so.

## CONTRIBUTION 
Feel free to develop this application by forking the GitHub repository and sending me pull requests. You can also contact me.

## TESTS 
Copy the following files and folder to your computer and test this application:
```md
.
├── config/
|   └── connection.js
├── controllers/
|   ├── thoughtController.js
|   └── userController.js
├── models/
|   ├── index.js
|   ├── Reaction.js
|   ├── Thought.js
|   └── User.js
├── routes/
|   ├── api/
|   |   ├── index.js
|   |   ├── thoughtRoutes.js
|   |   └── userRoutes.js
|   └── index.js      
├── index.js  
└── package.json 
``` 

## SCREENSHOTS
![image](https://user-images.githubusercontent.com/121307266/221103637-520c1d98-bf62-470f-8519-6a8afabad9a4.png)
![image](https://user-images.githubusercontent.com/121307266/221103743-a7625722-9151-45ef-9770-3d6dcf517032.png)

## DEMO
[Demo video](https://watch.screencastify.com/v/7AoV8iMDubhwxXQWCH0i)<br>
[Demo video (another link)](https://drive.google.com/file/d/1mPvykLB6gaKpt32RxZ0M6bevc5pHdHPN/view)

## QUESTIONS 
If you have any questions, feel free to reach out to me!<br>
GitHub page: [https://github.com/shohei-mochizuki](https://github.com/shohei-mochizuki)<br>
Email: [shohei.mochizuki.jp@gmail.com](mailto:shohei.mochizuki.jp@gmail.com)
