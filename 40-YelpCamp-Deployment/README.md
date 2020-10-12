# Deployment
- Production version shouldn't be same as development version. As when we are developing, we need to change the code and frequently restart the server. So, it's not at all good for production in that sense. Also debugging on the production version isnt a good practice. 
- Deploying an application is running the application in a server. It runs 24×7

## Heroku
- Heroku provides the computing power
- We need to initialize a git repository for heroku
- `heroku create` - creates a new application and adds the Heroku REMOTE to the git repository
- `git push heroku master` - pushes everything to heroku and then builds the application
- Application Error workaround:-
    - `heroku logs`: logs the errors
    - `missing script start`
    - put the start script in `package.json`
- `heroku run <command>`: run command in the heroku container

### Mongo and Heroku
- MongoLab - hosted MongoDB 
- And it's kinda complicated but I can go through this smoothly

### Enviornment variables
- Deployed and testing ground databases should not be same
- Enviornment is where the code runs. Few variables are not hardcoded and differ from enviornments
- Enviornment variable names are usually in ALL CAPS

