# employee-directory

## Description
A place to view the an employee directory that contains picture, name, phone, email and DOB information for each employee. Searching for an employee has been made even easier by displaying the narrowed down results of names that match the search string. So each added letter to the search narrows down the result until the user wanted is found. If the user does not exist, it will display an error message. Searching is not case sensitive, so there's no need to worry about where to add capital letters. Search does not just match names beginning with the search query, it will match to any names that contain that exact string. For example, if a user started entering in the searchbar "ad", it could return the results "Adrian Rosenbaum, Anthony Addy, Inmaculada Caballero". By default, the directory is not sorted. If the arrows are clicked next to a table heading it will sort the directory in ascending/descending order according to the heading.

![Employee Directory demo gif](./public/Employee_Directory.gif)

## User Story
AS A user, <br>
I WANT to be able to view all employees and easily search for an employee <br>
SO THAT I can quickly gather the information needed

## Usages
This app is a Progressive Web App, so from a mobile device, go to the site in the browser and then it can be added to the home sceen and it will look just like any other app with the custom icon.

<img src="./public/PWA-1.PNG" width="200px"> <img src="./public/PWA-2.PNG" width="200px"> <img src="./public/PWA-3.PNG" width="200px">

Images of PWA description and icon on a home screen



## Installation
The app can be used through the deployed site below, but if you want to clone the repo, the application requires Node.js to be installed. 
1. Check if Node.js is installed by entering `node --version` into the command line. If it is installed, a version number should be displayed. 
   - If not, it can be [downloaded from their website](https://nodejs.org/en/download/), then check if it was installed properly by performing `node --version` 
2. Run `npm install` in the command line at the project root to install all dependencies
3. To run locally, run `npm start` in the command line at the project root and once finished the browser should open automatically. If not, open a browser and go to localhost:3000

## Deployed Link
https://theemployees.herokuapp.com/
