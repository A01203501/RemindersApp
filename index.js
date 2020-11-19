const express = require("express");
const app = express();
const path = require("path");
const ejsLayouts = require("express-ejs-layouts");
const reminderController = require("./controller/reminder_controller");
const authController = require("./controller/auth_controller");
const cookieSession = require('cookie-session');

app.use(cookieSession({
  name: 'session',
  keys: ['aaa', 'bbb', 'ccc'],
    maxAge: 10*25*3600*1000
}))

app.use(express.static(path.join(__dirname, "public")));

app.use(express.urlencoded({ extended: false }));

app.use(ejsLayouts);

app.set("view engine", "ejs");

// Site Routes start here, homepage: login/signup page
// app.get("/", function(req, res) {
//   res.send("welcome to the landing page");
// })
// Get a list of all reminders, once logged in
app.get("/reminders", reminderController.list)

// Create a Reminder
app.get("/reminder/new", reminderController.new)
app.post("/reminder/", reminderController.create)

// Show one single reminder
app.get("/reminder/:id", reminderController.listOne)

// Edit a reminder
app.get("/reminder/:id/edit", reminderController.edit) // Show the page to edit a reminder
app.post("/reminder/update/:id", reminderController.update) // Edit the reminder

// Delete a reminder
app.post("/reminder/delete/:id", reminderController.delete)

// Open the register screen
app.get("/register", authController.register)

// Create an account
app.post("/register", authController.registerSubmit)

// Open the login screen
app.get("/login", authController.login)

app.listen(3000, function () {
  console.log("Server running. Visit: localhost:3000/ in your browser 🚀");
});
