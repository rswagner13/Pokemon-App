# Unit 2 Project - Pokemon App

Written by Mour Wagner


### Description

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
