# Unit 2 Project - Pokemon App

Written by Mour Wagner


### Description

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
| /                     |              |       GET       |       read       |       index.ejs         |       NO     |
| / home                |    index     |       GET       |       read       |       index.ejs         |       NO     |
| /pokemon/:id          |     show     |       GET       |       read       |       pokemon.ejs       |       NO     |
| /pokemon/add          |     new      |       GET       |                  |       add-pkmn.ejs      |       NO     |
| /pokemon/:id          |     create   |       POST      |       create     |                         |       NO     |
| /pokemon/:id/edit     |      edit    |       GET       |       read       |       edit-pkmn.ejs     |       NO     |
| /pokemon/:id          |      update  |    PATCH/PUT    |       update     |                         |       NO     |
| /pokemon/:id          |     destroy  |     DELETE      |       delete     |                         |       NO     |
| /review/:id           |     show     |       GET       |       read       |       reviews.ejs       |       NO     |
| /review/add           |     new      |       GET       |                  |       add-review.ejs    |       NO     |
| /review/:id           |     create   |       POST      |       create     |                         |       NO     |
| /review/:id/edit      |      edit    |       GET       |       read       |       edit-review.ejs   |       NO     |
| /review/:id           |      update  |    PATCH/PUT    |       update     |                         |       NO     |
| /review/:id           |     destroy  |    DELETE       |       delete     |                         |       NO     |
| /seed                 |              |       GET       |  delete & create |                         |       NO     |
| /about                |              |       GET       |                  |       about.ejs         |       NO     |
| /*                    |              |       GET       |                  |       404.ejs           |       NO     |  
