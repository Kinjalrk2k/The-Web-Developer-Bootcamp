## DataBase
- A collection of information/data
- Database has a interface
    - Write code to interact with the data

## SQL vs NoSQL
| SQL | NoSQL|
|-----|-----|
| Relational | Non-relational |
| Tabular or Flat | Nested (Looks like JSON object) |
| Not much flexible, Patterns(Schema) needs to be defined ahead | Much more flexible |

## Mongo Commands
- ```mongod```: Opens up the mongo server
- ```mongo```: Opens the mongo shell
- ```help```: Send help :(
- ```show dbs```: Shows the databases in Mongo
    - Seperate database for each app
    - Empty databases are not shown
- ```show collections```: Shows the collections
- ```use```: 
    - Uses a database if present orr else make a database
- ```insert```:
    - Syntax: ```databaseName.collectionName.insert({object})```
- ```find```:
    - Syntax: ```databaseName.collectionName.find()```
    - If nothing is passed, it will show all
    - ```"_id"```: Unique id, set by Mongo
    - Pass an object to search for the same
- ```update```:
    - Syntax: ```databaseName.collectionName.update(selectorObect, updatedObject)```
    - ```updatedObject``` overwrites the whole data of the selected
        - Use ```{$set: {justUpdated Object}}``` in place of ```updatedObject``` to avoid this!
- ```remove```:
    - Syntax: ```databaseName.collectionName.remove(selectorObect)```
    - ```.limit(n)``` lets us to limit remove by removing only n entries

> CRUD: Create Read Update Destroy

## Mongoose
Fix deprecation erros through this [link](https://mongoosejs.com/docs/deprecations.html)
- It's an ODM (Object Dat Mapper)
- JS Layer on the top of MongoDB

#### Connecting:
```js
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/db_name', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('Connected to DB!'))
.catch(error => console.log(error.message));
```

#### Schema:
```js
var schemaName = new mongoose.Schema({
    field: datatype,
    field: datatype,
    field: datatype,
});
```
- Schema is not defining a table, its defining pattern for data. It's just a sortof template!

#### Compiling to model:
```js
var Model = mongoose.model("Model", schemaName);
```
- ModelName is generally TitleCased, and singular version of the model name
- This model has all the methods within it
- It will automatically make a collection that will look like ```db.model```
- Essentially a collection

#### Adding to the database
```js
var m = new Model({
    field: data,
    field: data,
    field: data,
});
m.save(); // added to the db here!

// we can pass a callback function to check
m.save(function (err, mm) {
    //  err is the error
    // mm is the data which got saved!
  if (err) {
    console.log("Something went wrong!");
  } else {
    console.log("We just saved in the database");
    console.log(mm);
  }
});
```

#### Creating - Alternate of ```.save```
```js
Model.create({
    {
        field: data,
        field: data,
        field: data,
    },
    function(err, mm) {
        if (err) {
            console.log("Something went wrong!");
        } else {
            console.log("We just saved in the database");
            console.log(mm);
        }
    }
})
```

#### Finding
```js
Model.find({queryObject}, function (err, cats) {
  if (err) {
    console.log("Oh no! Error!");
    console.log(err);
  } else {
    console.log("All the data!");
    console.log(cats);
  }
});
```
- ```queryObject``` is empty whwn find all (```{}```)
