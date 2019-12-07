# Developer-Profile-Generator


#### Description 
This application will generate an individuals Github portfolio via CLI or command line interface. Once the data has been entered via a
users terminal a html page and pdf will be generated with the users credentials.

The focus point of this application is the use of node.js and npm.

Additionally, this application needed to adhere to the below requirements: 

* Profile image
* User name
* Links to the following:
  * User location via Google Maps [x]
  * User GitHub profile [x]
  * User blog [] substituted to user LinkedIn profile
* User bio [x]
* Number of public repositories [x]
* Number of followers [x]
* Number of GitHub stars [x]
* Number of users following [x]


### How to Use
#### Requirements
This application requires Node Package Managers to be executed.
These can be installed via your terminal.

* Install : npm install
* Install : npm i inquirer
* * visit https://www.npmjs.com/package/inquirer for more information

* Install : npm i axios
* * Visit https://www.npmjs.com/package/axios for more information

* Install: npm install -g html-pdf
* * Visit: https://www.npmjs.com/package/html-pdf?activeTab=readme for more information

Once you have installed the above packages you can run the program.

1. enter node .\index.js
2. You will be promoted to enter your name
3. When compete hit enter
4. You will be promoted to enter your Github username
5. When compete hit enter
6. You will be promoted to enter your Linkedin URL
7. When compete hit enter
8. You will be asked to choose a color
9. Once picked hit enter.

Please wait a few minutes for the code to run.
When complete you will be able to view a html file of your portfolio and a pdf of the same.

#### Technologies 
Project is created with:

* HTML5
* CSS
* nodeJS

#### Packages Used
* html-pdf using phantomjs
* axios
* npm
* inquirer


#### Quality Assurance Tests:

##### Responsiveness and CSS per browser
* Chrome browser - base line 

* Firefox browser
  * Responsiveness - Y
  * Does the UI change? - N
  * Any browser variations? - N
  * Expected and Actual behavior are the same? Y


#### Limitations:
* The results rendered by the application is limited to the users local device.

##### Minimum Requirements

* Functional, deployed application. [x]

* GitHub repository with a unique name and a README describing project. [x]

* The application generates a PDF resume from the user provided GitHub profile. [x]

* The generated resume includes a bio image from the user's GitHub profile. [x]

* The generated resume includes the user's location and a link to their GitHub profile. [x]

* The generated resume includes the number of: public repositories, followers, GitHub stars and following count. [x]

* The background color of the generated PDF matches the color that the user provides. [x]


