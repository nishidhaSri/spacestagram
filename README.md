# Spacestagram 

The main idea behind this project is to build a website for the space junkies out there who can glance at space images all day long. Here anyone can "like", "unlike" or "share" the images fetched from NASA's API. The images fetched here are randomly chosen "Astronomy Picture of Day (APOD)". Respective date and title are mentioned with the image for a better idea. To contribute, checkout the guidelines [here](https://github.com/nishidhaSri/spacestagram/blob/master/CONTRIBUTING.md).

## Setting up NASA credentials

To access this website, you have to create an API key in order to use NASA's API call. Follow the steps below to create one:

1. Visit https://api.nasa.gov
2. Enter basic details which are asked (like name, email) and the API key will be generated

## Get Started

1. Fork the repository and clone it.
2. Please ensure that latest versions of "nodeJs" is installed on the system. "node -v" commands helps in ensuring that they are properly installed on the system.
3. Use **"cd"** command to change to the project directory.
4. Run **"npm install"** to install all the dependencies.
5. You will need a **"config.js"** file in the src/ folder for the system to run successfully. An example for the config.js file has been written in exampleConfig.js. Modify the NASA API key value as you need and required before starting. 
6. Run **"npm start"** to start a local server
7. Visit http://localhost:3000/ in the browser to open the app.

## List of all major libraries used :-

1. ReactJs (Frontend framework)
