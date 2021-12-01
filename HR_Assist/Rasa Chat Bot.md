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

## important links:
    http://35.196.60.7/docs/core/0.14.5/docker_walkthrough/

## useful commands
    1.sudo chown -R 1001:1001 ./db:/bitnami/postgresql
    2.docker run --user 1000 -it -v $(pwd):/app rasa/rasa:1.9.5-full shell
    3.command to train core model : docker-compose run rasa_core train


## story_name
    * message_sent_by_the_user (Intents)
        - action (we can define a set of responses or an API call)

## Domain.yml
    The universe of the bot
    define intents
    define actions
    define templates
    intents:: things we expect users to say
    actions:: things our bot can do
    templates:: strings of responses the bot can say
    entities:: pieces of info we want to extract from user messages.
    slots ::informations to keep track during a conversation

## working
    rasa_core chooses which action to perform. Actions starts with utter_. Then a string will be choose from the responses.
    ActionListen::default Action::to stop taking further actions until the user says something else    
    default actions:
        action_listen
        action_restart
        action_default_fallback
    Action Server must be a web server that reacts to the request.
    Rasa Core works by creating training data from your stories and training a model on that data.


