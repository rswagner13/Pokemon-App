<h1 align="center">
  Unit 2 Project - Pokemon App
</h1>

<h3 align=center>
  Written by Mour Wagner
</h3>
<p align = "center">
  <a href="mailto: mourwagner13@gmail.com">
    <img src="https://img.shields.io/badge/Gmail-D14836?style=for-the-badge&logo=gmail&logoColor=white" alt="My Email">
  </a>
  <a href="https://rswagner13.github.io/Portfolio/">
    <img src="https://img.shields.io/badge/website-000000?style=for-the-badge&logo=About.me&logoColor=white" alt="My Website">
  </a>
  <a href="https://github.com/rswagner13">
    <img src="https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white" alt="GitHub Profile">
  </a>
  <a href="https://www.linkedin.com/in/rswagner23/">
    <img src="https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white" alt"LinkedIn Page">
  </a>
</p>


### Description
---
<p align="center">
  This is a full-stack MEN app that allows users to add any shiny Pokemon they want, and 
</p>

### ⬇️ Installation
Since this is a website, there's nothing to install in order to access this. If you're interested in modifying the site, I would follow the next steps to install all the packages you need:
* Install NPM by running the following command in the terminal:
  ```npm init -y```
* Then install the following dependencies:
  ```npm i express ejs mongoose dotenv livereload connect-livereload```
* Add an ```.env``` file to the root of the application, and add the following code within it:
```
PORT=3000
MONGOBDURI='your connection string here'
```
* 


### 🖥️ Technologies Used
<p>
  <img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white" alt="HTML5">
  <img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white" alt="CSS3">
  <img src="https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E" alt="JavaScript">
  <img src="https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white" alt="Node.js">
  <img src="https://img.shields.io/badge/Express.js-404D59?style=for-the-badge" alt="Express.js">
  <img src="https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white" alt="MongoDB">
  <img src="https://img.shields.io/badge/Markdown-000000?style=for-the-badge&logo=markdown&logoColor=white" alt="Markdown">
  <img src="https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white" alt="Bootstrap">
</p>

### 🧔‍♂️👩 User Stories
* As a hiring manager for a software development team, I want to review a prospect's full stack application to assess their skills and experience to see if they would be an asset to our team.
* As an avid Pokemon fan, I love the thought of having an app that would allow me to add Pokemon, make changes if needed, as well as write reviews for them

<details>
  <summary>
   <h3>Wireframes<h3>
  </summary>
  <img src="https://media.git.generalassemb.ly/user/51566/files/dcd2929c-952d-446d-bf4a-3db792001ed8">
  <img src="https://media.git.generalassemb.ly/user/51566/files/99315af3-a61b-4411-ba78-3a504274e5e0">
  <img src="https://media.git.generalassemb.ly/user/51566/files/ff37bfe2-37f3-44f4-b7f7-b397a1213b21">
  <img src="https://media.git.generalassemb.ly/user/51566/files/3d2a793a-cdbe-439e-b719-b339e917d584">
  <img src="https://media.git.generalassemb.ly/user/51566/files/1bba8bfd-996a-48ed-b8a4-4365422bba0e">
  <img src="https://media.git.generalassemb.ly/user/51566/files/e995d625-a116-4b8c-9883-db64ac906f81">
</details>

### Route Table

|             URL       |  REST Route  |    HTTP Verb    |    CRUD Action   |        EJS View(s)      | Created Yet? |
| --------------------- | -----------  | --------------- | ---------------- | ----------------------- | ------------ |
| /                     |              |       GET       |       read       |        home.ejs         |      YES     |
| / home                |    index     |       GET       |       read       |        home.ejs         |      YES     |
| /pokemon/:id          |     show     |       GET       |       read       |   pokemon-details.ejs   |      YES     |
| /pokemon/add          |     new      |       GET       |                  |    new-pokemon.ejs      |      YES     |
| /pokemon/:id          |     create   |       POST      |       create     |                         |      YES     |
| /pokemon/:id/edit     |      edit    |       GET       |       read       |    edit-pokemon.ejs     |      YES     |
| /pokemon/:id          |      update  |    PATCH/PUT    |       update     |                         |      YES     |
| /pokemon/:id          |     destroy  |     DELETE      |       delete     |                         |      YES     |
| /review/              |     show     |       GET       |       read       |    reviews-home.ejs     |      YES     |
| /review/new           |     new      |       GET       |                  |       add-review.ejs    |      YES     |
| /review/:id           |     create   |       POST      |       create     |                         |      YES     |
| /review/:id           |     destroy  |    DELETE       |       delete     |                         |      YES     |
| /seed                 |              |       GET       |  delete & create |                         |      YES     |
| /about                |              |       GET       |                  |       about.ejs         |      YES     |
| /*                    |              |       GET       |                  |       404.ejs           |       NO     |  

### ⚠️❌💫 Unsolved Problems/Major Hurtles
---
* Holding Spot

### ▶️ Next Steps
---
* Leveraging the PokeAPI to obtain Pokemon information, rather than having the user manually enter the Pokemon into the app.
* 
