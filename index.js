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
      type: "list",
      name: "color",
      message: "Pick a colour",
      choices: ["yellow", "blue", "pink", "red"]
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
    //    const repoNamesStr = repoNames.join("\n");

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
  yellow: {
    wrapperBackground: "#E6E1C3",
    headerBackground: "#C1C72C",
    headerColor: "black",
    photoBorderColor: "#black"
  },
  blue: {
    wrapperBackground: "#5F64D3",
    headerBackground: "#26175A",
    headerColor: "white",
    photoBorderColor: "#73448C"
  },
  pink: {
    light: "#ffafb8",
    dark: "#f36767",
    headerColor: "white",
    photoBorderColor: "#FEE24C"
  },
  red: {
    wrapperBackground: "#DE9967",
    headerBackground: "#870603",
    headerColor: "white",
    photoBorderColor: "white"
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
  margin:0;
  font-family: 'Times New Roman', Times, serif;
}

.bg {
  animation:slide 3s ease-in-out infinite alternate;
  background-image: linear-gradient(-60deg, #efe9e2 50%, ${colors[answers.color].light}	 50%);
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

.bg-light /* Nav bar */{
  background-color: #efe9e2!important; 
  border-bottom: 1px solid #c0b8b8;
  color: #7a7373; 

}


h1 {
  font-family:'Times New Roman', Times, serif;
  color: #7a7373; 
}

h2 {
  color: #7a7373; 
}

h4 {
  color: #7a7373; 
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

 .card img {
	max-width: 300px;
	max-height: 200px;
  border: 3px solid #c0b8b8;
}

 .card-body {
	opacity: 0;
	position: absolute;
	display: flex;
	justify-content: center;
	align-items: center;
	width: 10px;
	height: 90%;
	background: #fff;
	transition: all 0.5s ease;
}

a {
  text-decoration: none;
  color: ${colors[answers.color].dark}; 
  font-size: 15px;
}
 .card-body p {
	transition: 0.5s ease;
	transform: scale(0, 1);

}
 .card-text {
	text-align: center;
	font-size: 15px;
	letter-spacing: 1px;
}
 .card:hover .card-body {
	opacity: 0.8;
	width: 90%;
	transition: 0.5s ease;
  align-self: center;
  vertical-align: unset;
  margin-top: 3%;
}
 .card:hover .card-body .card-text {
	transform: scale(1);
	transition: 0.5s ease;
}


.footer {
  background-color: #887a7a;
  color: #cccccc;
  text-align: center;
  font-size: 12px;
  padding: 15px;
  border-top: solid ${colors[answers.color].wrapperBackground} 8px;
  position: fixed;
  bottom: 0px;
  width: 100%;
}

#bio-image {
  border-radius: 50%;
  padding-right: 3px;
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
</style>    
</head>
<body>
    <div class="bg"></div>
    <div class="bg bg2"></div>
    <div class="bg bg3"></div>
    <section class=wrapper id=port>
        <div class=row>
            <div class="col-xs-12 col-sm-12 col-md-12">
                <h2>About Me</h2>
                <hr />
                <br>
            </div>
        </div>
        <div class=row>
            <div class="col-xs-6 col-sm-6 col-md-4">
                <img id="bio-image" src="assets/images/unnamed1.jpg" alt="..."> <!-- $ {res.avatar} -->
            </div>
            <br/>
            <div class="col-xs-6 col-sm-6 col-md-8">
                <br>
                <h3>Hi!</h3>
                <h4>
                    My name is ${answers.name}
                </h4>
                <div class=row id=links>
                    <div class="col-xs-12 col-sm-6 col-md-4">
                        <a href="https://drive.google.com/file/d/1MPotwXjNKBxFo_4dokOAiSGZfExad4Ug/view" target="_blank"><img class="linkimg" src="assets/images/resume2.png" alt="...">Resume</a>
                    </div>
                    <div class="col-xs-12 col-sm-6 col-md-4">
                        <a href="https://github.com/taraDM23" target="_blank"><img class="linkimg" src="assets/images/GitHub-Mark-120px-plus.png" alt="...">insert  Github</a>
                    </div>
                    <div class="col-xs-12 col-sm-6 col-md-4">
                        <a href="https://www.linkedin.com/in/tara-d-930627135/" target="_blank"><img class="linkimg" src="assets/images/LI-In-Bug.png" alt="...">linkedIn</a>
                    </div>
                </div>
                <br />
                <br />
                <div class=row>
                    <div class="col-xs-12 col-sm-12 col-md-12">
                        <p id=quote> "Time is Money, Money is Power, Power is Pizza, and Pizza is Knowledge - April Ludgate."</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <br />
    <br />
    <div class=footer></div
</body>
</html>`;
}



/*

         .wrapper {
         background-color: ${colors[answers.color].wrapperBackground};
         padding-top: 100px;
         }
         .photo-header {
         position: relative;
         margin: 0 auto;
         margin-bottom: -50px;
         display: flex;
         justify-content: center;
         flex-wrap: wrap;
         background-color: ${colors[answers.color].headerBackground};
         color: ${colors[answers.color].headerColor};
         padding: 10px;
         width: 95%;
         border-radius: 6px;
         }
         .photo-header img {
         width: 250px;
         height: 250px;
         border-radius: 50%;
         object-fit: cover;
         margin-top: -75px;
         border: 6px solid ${colors[answers.color].photoBorderColor};
         box-shadow: rgba(0, 0, 0, 0.3) 4px 1px 20px 4px;


         .card {
           padding: 20px;
           border-radius: 6px;
           background-color: ${colors[answers.color].headerBackground};
           color: ${colors[answers.color].headerColor};
           margin: 20px;
         }
 */



