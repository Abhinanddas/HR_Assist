## environment setup
1. setup docker and docker-compose
2. go to the root folder (docker-compose.yml must exist there). 
3. run the docker command:
    docker-compose up

This command will pull the needed Docker images and makes multiple containers to make the Chatbot run in the local server.

## services (folder structure)
 1. rasa_core
 2. rasa_nlu
 
## file structure
1. data
    1.1 nlu.md - create intents
    1.2 domain.yml - core file where intents and actions are registered
    1.3 stories.md - write stories using intents and actions.
2. config
    configuration files
3. models
    trained models will be stored here

## definitions
* intent:: the thing we expect users to say.
* actions:: things our bot can do.
* templates:: strings of responses that a bot can say.
* entities:: pieces of information we want to extract from the user messages.
* slots:: information to keep track during a conversation.
* rasa_core:: chooses which action to perform. It works by creating training data from stories and training a model on that data. 
