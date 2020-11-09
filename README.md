### TYPE the following to run react app server environemtn:
## In development, for automatic transpile and server restart, use "npm run dev"
## In production, where it transpiles once and does not look for changes, use "npm run start"

# Barebones React/TypeScript/Express/Sass Boilerplate
This project is a starting point for a TypeScript based React app that also has a local API server using express.

There are 2 different Webpack configurations. One for the server and one for the client.

## Server
The server build process compiles the TypeScript files found in `/src/server` into a single bundled JavaScript file located in the `/dist` directory.

## Client
The client build process compiles the React app located in `/src/client` into a bundled located at `/public/js/app.js`.

The client configuration will also build the Sass files found at `/src/client/scss`. The `index.tsx` imports the `app.scss` file which already includes an import for Bootstrap.

## Running the project
In order to run the server, use `npm run dev`, and the server will start on port 3000 (http://localhost:3000). 

Webpack will watch the files. Once you save a file, you can refresh your browser to ensure you got the updated client files. If you only change server files, you *shouldn't* need to refresh.

## Barebones React/TypeScript/Express/Sass Template
This is a basic starting point for having a React frontend, Express backend, using TypeScript, a SASS compiler, and Webpack to put it all together! It'll give you a build process to have a React app and an API running on the same server.

## Getting Started
You'll need to clone the repository to your local machine. That link will lead you to the github page for the project itself, or you can copy and paste the following into your terminal:

git clone https://github.com/covalence-io/barebones-react-typescript-express
Just make sure you're in the correct directory for your projects! git clone will create a directory with the name of the github repository, which you can rename after-the-fact or by adding a name after the url in your git clone terminal command. So the format would resemble:

git clone https://github.com/user/my-repo.git project-awesome
Which would clone my-repo from github and make a directory named project-awesome where the code would be found!

After cloning the project, we need to make sure you delete the hidden .git folder inside the project. This will sever the connection from Covalence's github account so you can add your own .git and make it attached to your own account's repos! If you have hidden files viewable you can simply navigate to the cloned repo and delete it manually. The other option is to cd into the project and running rm -rf .git in your terminal. So from our project-awesome example above:

cd project-awesome
rm -rf .git
This will allow you to do a fresh git init where you add your own remote to this code.

Lastly, you'll need to run npm install in this project directory to install all necessary dependencies.

## Running
This project has two basic scripts to run:

In development, for automatic transpile and server restart, use npm run dev.
Webpack will watch the files. Once you save a file, you can refresh your browser to ensure you got the updated client files. If you only change server files, you shouldn't need to refresh.
In production, where it transpiles once and does not look for changes, use npm run start.
Notes
Be careful to only be working within the /src directory for both your server (/src/server) and frontend (/src/client) code. Within the /dist directory is where your transpiled server code will be outputted to and will be erased each time your server code is changed. Similarly, /public/js/app.js will contain your bundled frontend code, and will be overwritten each time your react code is changed.

It is written using TypeScript! So if you haven't already, go through the videos in the TypeScript module to learn more about how it works.

## To override Bootstrap's variables, you'll need to have your changes above the import statement in /src/client/scss/app.scss:

$theme-colors: (
    "primary": #0091ea,
    "secondary": #ec407a
);

@import  '../../../node_modules/bootstrap/scss/bootstrap.scss';
This example would override the primary and secondary themes across all of Bootstrap to use those custom colors. So any usage like text-primary, bg-primary, etc will use the color #0091ea (Covalence blue)!

## Check out these Dependencies
## webpack
Does all the bundling. Whenever we write/create/change files, we want them to output into one file. Has a lot of configuration that it can accept.
## node-sass
Library to natively compile .scss files to .css files.
## sass-loader
Loads a .scss files and compiles it to .css files. Requires webpack and at least node-sass as peer dependencies.
## bootstrap
Locally installs Bootstrap 4 so we can use its SASS files so we can override their styles with our own.
## typescript
A language for adding typed supersets of JavaScript that will compile to plain JavaScript.
## ts-loader
A TypeScript loader for webpack