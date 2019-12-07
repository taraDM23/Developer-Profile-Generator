const inquirer = require("inquirer");
const fs = require("fs");
const axios = require("axios");
const util = require("util");
const pdf = require('html-pdf');
const options = { format: 'Letter' };
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
      choices: ["Yellow", "Blue", "Pink", "Aqua_Green"]
    }
  ]);
}

main()
async function main() {
  try {
    const answers = await promptUser();
    const queryUrl = `https://api.github.com/users/${answers.github}`;

    const res = await axios.get(queryUrl)
    const queryUrlStar = `https://api.github.com/users/${answers.github}/starred`;
    const resStar = await axios.get(queryUrlStar)
    console.log(res.data.url)
    const html = generateHTML(answers, res , resStar);
    await writeFileAsync("portfolio.html", html);
    console.log("Successfully wrote to index.html");
    pdf.create(
      html,
      {
        "format": "A4",
        "orientation": "portrait",
        "type": "pdf",
        "timeout": 3000,
      }
    ).toFile('./portfolio.pdf', function (err, res) {
      if (err) return console.log(err);
      console.log(res);
    });
  }
  catch (err) {
    console.log(err)
  }
}

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
  Aqua_Green: {
    neutral: "#daf8e3",
    light: "#97ebdb",
    dark: "#0086ad",
    fill: "#d7f7f1",
    headerColor: "#005582",

  }
};
function generateHTML(answers, res , resStar) {
  return `
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <link rel='icon' href='${res.data.avatar_url}' type='image/x-icon' />
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
  margin-left: 50px;
  margin-right: 50px;
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
  height: fixed;
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
  padding-left: 50px;
  padding-right: 40px;
}

card {
  margin-bottom: 15px;
  width: 100%;
}

.card-body {
  background-color: ${colors[answers.color].neutral};
  border:1px solid ${colors[answers.color].dark};
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
        <div class="col-12 col-sm-12 col-md-12">
          <br>
          <br>
        </div>
      </div>
    </section>

    <section>
        <br>
        <br>
        <div id=overlay>
            <div class="row">
                <div class="col-4">
                    <img id="bio-image" src="${res.data.avatar_url}" alt="..."> <!--  note favicon same?-->
                </div>
                <div class="col-8">
                  <div>
                    <br>
                    <h3>Hello!</h3>
                    <h4> My name is ${answers.name}. And here's a bit about me.</h4>
                    <h5>I'm currently at ${res.data.company}.</h5>
                    <div>
                      <a href="https://www.google.com/maps/place/${res.data.location}" target="_blank"><img class="linkimg" src="https://cdn0.iconfinder.com/data/icons/small-n-flat/24/678111-map-marker-512.png" alt="..." />${res.data.location}</a>
                    </div>
                    <div>
                        <a href="${res.data.html_url}" target="_blank"><img class="linkimg" src="https://image.flaticon.com/icons/svg/25/25231.svg" alt="..." />Github</a>
                    </div>
                    <div>
                      <a href="https://${answers.linkedIn}" target="_blank"><img class="linkimg" src="https://content.linkedin.com/content/dam/me/business/en-us/amp/brand-site/v2/bg/LI-Bug.svg.original.svg" alt="..." />linkedIn</a>
                    </div>
                    <h5 id="quote"> Git Bio: ${res.data.bio} </h5>
                  </div>
                </div> 
            </div>
            <div class="row card-deck">
                <div class="col-12 col-sm-12 col-md-6 col-lg-3 col-xl-3" style="margin-bottom: 20px;">
                    <div class="card">
                        <div class="card-body">
                            <h4 class="card-title">Followers</h5>
                                <h5 class="card-text">${res.data.followers}</p>
                        </div>
                    </div>
                </div>
                <div class="col-12 col-sm-12 col-md-6 col-lg-3 col-xl-3" style="margin-bottom: 20px;">
                    <div class="card">
                        <div class="card-body">
                            <h4 class="card-title">Public Repos</h5>
                                <h5 class="card-text">${res.data.public_repos}</p>
                        </div>
                    </div>
                </div>
                <div class="col-12 col-sm-12 col-md-6 col-lg-3	col-xl-3" style="margin-bottom: 20px;">
                    <div class="card">
                        <div class="card-body">
                            <h4 class="card-title">Following</h5>
                                <h5 class="card-text">${res.data.following}</p>
                        </div>
                    </div>
                </div>
                <div class="col-12 col-sm-12 col-md-6 col-lg-3	col-xl-3" style="margin-bottom: 20px;">
                    <div class="card">
                        <div class="card-body">
                            <h4 class="card-title">GitHub Stars</h5>
                                <h5 class="card-text">${resStar.data[0].stargazers_count}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
      <br/>
      <br/>
      <br/>
      <br/>
    <div class=footer></div>
</body>

</html>`;
}




