const inquirer = require("inquirer");
const fs = require("fs");
const axios = require("axios");
const util = require("util");

const writeFileAsync = util.promisify(fs.writeFile);

function promptUser() {
  return inquirer.prompt([
    {
      type: "input",
      name: "name",
      message: "What is your name?"
    },
    {
      type: "input",
      name: "github",
      message: "Enter your GitHub Username"
    },
    {
      type: "input",
      name: "linkedIn",
      message: "Enter your linkedIn URL"
    },
    {
      type: "list",
      name: "color",
      message: "Pick a colour",
      choices: ["Yellow", "Blue", "Pink", "Aqua"]
    }
  ]);
}

function gitAPI() {

  const queryUrl = `https://api.github.com/users/${github}`;

  axios.get(queryUrl).then(function (res) {
    const gitName = res.data.login
    console.log(gitName);
    const gitURL = res.data.url
    console.log(gitURL)
    const location = res.data.location
    console.log(location)
    const email = res.data.email
    console.log(email)
    const public_repos = res.data.public_repos
    console.log(public_repos)
    const followers = res.data.followers
    console.log(followers)
    const following = res.data.following
    console.log(following)
    console.log(avatar)
    const nameGit = res.data.name
    console.log(nameGit)
    const bio = res.data.bio
    console.log(bio)
    const company = res.data.company
    console.log(company)
  })
}

promptUser()
  /* .then(function ({ github }) {

      add gitAPI function code

  }) */
  .then(function (answers, res) {
    const html = generateHTML(answers, res);
    return writeFileAsync("portfolio.html", html);
  })
  .then(function () {
    console.log("Successfully wrote to index.html");
  })
  .catch(function (err) {
    console.log(err);
  });

const colors = {
  Yellow: {
    neutral: "#fff8b6",
    light: "#ffbd91",
    dark: "#ff8d71",
    headerColor: "black",
    fill: "#fffde9",

  },
  Blue: {
    neutral: "#ccebf8",
    light: "#0072ce",
    dark: "#005eb8",
    headerColor: "#003087",
    fill: "#75caed",
  },

  Pink: {
    neutral: "#efe9e2",
    light: "#ffafb8",
    dark: "#f36767",
    fill: "#fadbe0",
    headerColor: "#605656",
  
  },
  Aqua: {
    neutral: "#daf8e3",
    light: "#97ebdb",
    dark: "#0086ad",
    fill: "#d7f7f1",
    headerColor: "#005582",

  }
};
function generateHTML(answers, res) {
  return `
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel='icon' href='https://raw.githubusercontent.com/taraDM23/AboutTara/master/assets/images/octopus-photo.ico' type='image/x-icon' />
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
    <title>Tara de Mel</title>

  <style>
html {
  height:100%;
}

body {
  font-family: 'Times New Roman', Times, serif;

}

.bg {
  animation:slide 3s ease-in-out infinite alternate;
  background-image: linear-gradient(-60deg, ${colors[answers.color].neutral} 50%, ${colors[answers.color].light}	 50%);
  bottom:0;
  left:-50%;
  opacity:.5;
  position:fixed;
  right:-50%;
  top:0;
  z-index:-1;
}

.bg2 {
  animation-direction:alternate-reverse;
  animation-duration:4s;
}

.bg3 {
  animation-duration:5s;
}

@keyframes slide {
  0% {
    transform:translateX(-25%);
  }
  100% {
    transform:translateX(25%);
  }
}

#bg-light {
  background-color: ${colors[answers.color].fill} !important; 
  border-bottom: 1px solid ${colors[answers.color].dark};
  color: ${colors[answers.color].headerColor}; 

}

#overlay {
  background-color: ${colors[answers.color].fill};
  padding: 15px;
  margin-left: 20px;
  margin-right: 20px;
  border: 1px solid ${colors[answers.color].dark};
}

h1 {
  font-family:'Times New Roman', Times, serif;
  color: ${colors[answers.color].headerColor}; 
}

h2 {
  color: ${colors[answers.color].headerColor}; 
}

h3 {
  color: ${colors[answers.color].headerColor}; 
}

h4 {
  color: ${colors[answers.color].headerColor}; 
}

h5 {
  color: ${colors[answers.color].headerColor}; 
}

#row1 {
  display: flex;
	justify-content: center;
	align-items: center;
}

.col {
  overflow: hidden;
	position: relative;
	display: flex;
	justify-content: center;
	align-items: center;
  padding-bottom: 15px;
}


a {
  text-decoration: none;
  color: ${colors[answers.color].dark}; 
  font-size: 15px;
}

.footer {
  background-color: ${colors[answers.color].fill} !important; 
  border-top: 1px solid ${colors[answers.color].dark};
  color: ${colors[answers.color].headerColor}; 
  position: fixed;
  bottom: 0px;
  width: 100%;
  height: 10%;
}

#bio-image {
  border:2px solid ${colors[answers.color].dark};
  border-radius: 50%;
  height: 100%;
  width: 100%;
}

#quote {
    text-align: center;
}
    
.linkimg {
  width: 50px;
  height:50px;
  padding-right: 7px;
  padding-bottom: 10px;
}

.card-title {
  text-align: center;
}

.card-text {
  text-align: center;
}

.card-deck {
  padding-top: 35px;
  padding-left: 20px;
  padding-right: 20px;
}

card {
  margin-bottom: 15px;
  width: 100%;
}

.card-body {
  background-color: ${colors[answers.color].neutral};
}

#row1 {
  display: flex;
	justify-content: center;
	align-items: center;
}

.col-sm {
  overflow: hidden;
	position: relative;
	display: flex;
	justify-content: center;
	align-items: center;
  padding-bottom: 15px;
}


</style>    
</head>
<body>
    <div class="bg"></div>
    <div class="bg bg2"></div>
    <div class="bg bg3"></div>

    <section class=wrapper id=port>
      <div class=row id=bg-light>
        <div class="col-xs-12 col-sm-12 col-md-12">
          <br>
          <br>
        </div>
      </div>
    </section>

    <section>
         <br>
      <div class=row id=overlay>
          <div class="col-xs-6 col-sm-6 col-md-4">
            <img id="bio-image" src="images/unnamed1.jpg" alt="..."> <!-- $ {res.avatar} note favicon same?-->
          </div>
            <br/>
          <div class="col-xs-6 col-sm-6 col-md-8">
            <br>
            <h3>Hi!</h3>
            <h4> My name is ${answers.name}</h4>
            <h5>I'm currently at $ {res.company}.</h5>
             <br/>
             <br/> 
            <div class=row id=links>
              <div class="col-xs-12 col-sm-6 col-md-4">
                <a href="https://www.google.com/maps/place/$ {res.location}" target="_blank"><img class="linkimg" src="images/map.png" alt="...">$ {res.location}</a>
              </div>
              <div class="col-xs-12 col-sm-6 col-md-4">
                <a href="$ {res.gitURL}" target="_blank"><img class="linkimg" src="images/GitHub-Mark-120px-plus.png" alt="...">Github</a>
              </div>
              <div class="col-xs-12 col-sm-6 col-md-4">
                <a href="https://${answers.linkedIn}" target="_blank"><img class="linkimg" src="images/LI-In-Bug.png" alt="...">linkedIn</a>
              </div> 
             </div> 
             <br/>
             <br/>
            <div class=row>
              <div class="col-xs-12 col-sm-12 col-md-12">
                <h5 id=quote> $ {res.bio} where bio goes </h5>
              </div>
            </div>
          </div>
        <div class=row id=row1>
        <div class="card-deck"> 
          <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6	col-xl-6" style="margin-bottom: 20px;">
          <div class="card">
            <div class="card-body">
              <h4 class="card-title">Followers</h5>
              <h5 class="card-text">$ {res.follower}</p>
            </div>
          </div>
          </div>
          <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6	col-xl-6">
          <div class="card">
            <div class="card-body">
              <h4 class="card-title">Public Repos</h5>
              <h5 class="card-text">$ {res.public_repos}</p>
            </div>
          </div>
          </div>
          <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6	col-xl-6">
          <div class="card">
            <div class="card-body">
              <h4 class="card-title">Following</h5>
              <h5 class="card-text">$ {res.following}</p>
            </div>
          </div>
          </div>
          <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6	col-xl-6">
          <div class="card">
            <div class="card-body">
              <h4 class="card-title">GitHub Stars</h5>
              <h5 class="card-text">$ {res.follower}</p>
            </div>
          </div>
          </div>
        </div>
      </div>
    </section>
    <br />
    <br />
    <br />
    <br />
    <br />

    <div class=footer></div
</body>
</html>`;
}




