# NoteTakingApp
__NoteTakingApp Demo__

This Note taking application is developed using MEAN(MongoDB, Express, Angular and Node.js) stack.

Also made use of bootstrap, angular-color-picker components.

Screen shots are attched under "screenshots" folder

Things needed to bring this app up and running on local

__Mongo server__
+ Install MongoDb 
+ Create "data" subdir under "server" dir so that the mongo will save the data
+ Run the following command in the terminal to start the mongo server. Replace the path in the quotes below with the path of the data subdir created in step2 
mongod --dbpath "/Users/tuw296/Development/NoteTakingApp/server/data"

__Node.js server__
+ run "npm install" under server directory - this will install all the dependent packages.
+ run "npm start" will start the local node.js server

__Serve the angular app__
+ run "npm install serve -g" to serve your app(use sudo if needed)
+ run "serve" on the NoteTakingApp dir to see what port you are serving the web page
+ open web page http://localhost:PORTNUMBER/app to see the app running

If needed run the following command to open the mongo shell in a different terminal
"mongo"

Will be uploading this app to heroku soon!!

