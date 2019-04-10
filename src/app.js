const path = require("path");
const express = require("express");

const app = express();
const port = 3000;

// Define paths for Express Config
const publicDirectoryPath = path.join(__dirname, "../public");
const viewsPath = path.join(__dirname, "../templates")

// Setup handlebars locations and view setup
app.set("view engine", "hbs");
app.set("views", viewsPath);

// Setup Static Directory to serve
app.use(express.static(publicDirectoryPath));

app.get("/", (req, res) => {
  res.render("index", {
    title: "Weather",
    author: "Joe Lorenzo"
  })
})

app.get("/about", (req, res) => {
  res.render("about", {
    title: "About Page"
  })
})

app.get("/help", (req, res) => {
  res.render("help", {
    title: "Help Page",
    helpMessage: "Please click below for our FAQ"
  })
})

app.get("/weather", (req, res) => {
  res.send({
    forecast: "Decently Sunny",
    location: "New York"
  });
});


app.listen(port, () => console.log(`App listening on port ${port}!`));

// The get method is called on app and whenever that particular root is 
// visited the app will run what's in the callback and send that info back
// the res.send allows us to send something back to the requester
// app.listen will only be called once in the application and it listens on the port provided

// app.com
// app.com/help
// app.com/about
// node has a built in path module, using path.join() you can easily traverse the file tree 
// and get absolute filepaths with little issue

// __dirname will give the directory of the file you're calling it in
// __filename will call the file itself in the directory

//First lines in express
// const world = {
//   intro: "Hello World!"
// }
// const { intro } = world
// app.get('/', (req, res) => res.send(`${intro}`))
// app.listen(port, () => console.log(`Example app listening on port ${port}!`))