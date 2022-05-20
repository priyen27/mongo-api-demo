require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes/routes');
const db = require("./models");
const Role = db.role;

const mongoString = process.env.DATABASE_URL;

// Function to add all roles into collections
const initial = () => {
  Role.estimatedDocumentCount((err, count) => {
    if (!err && count === 0) {
      new Role({
        name: "user"
      }).save(err => {
        if (err) {
          console.log("error", err);
        }
        console.log("added 'user' to roles collection");
      });
      new Role({
        name: "moderator"
      }).save(err => {
        if (err) {
          console.log("error", err);
        }
        console.log("added 'moderator' to roles collection");
      });
      new Role({
        name: "admin"
      }).save(err => {
        if (err) {
          console.log("error", err);
        }
        console.log("added 'admin' to roles collection");
      });
    }
  });
};

mongoose.connect(mongoString)
  .then(() => {
    console.log("Successfully connect to MongoDB.");
    initial();
  })
  .catch(err => {
    console.error("Connection error", err);
    process.exit();
  });
const database = mongoose.connection;

// It will connect to the database and throws error if fails
database.on('error', (error) => {
  console.log(error)
});

// It will run only one time and shows message
database.once('connected', () => {
  console.log('Database Connected');
});

const app = express();

app.use(express.json());
app.use((req, res, next) => {
  res.header(
    "Access-Control-Allow-Headers",
    "x-access-token, Origin, Content-Type, Accept"
  );
  next();
});

app.listen(4000, () => {
  console.log(`Server Started at ${4000}`)
})

// Use Routes
app.use('/api', routes);