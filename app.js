var express = require('express')
var app = express()

// Load Controllers
const SiteController = "./controllers/SiteController"

// Routes
app.get("/", SiteController.Index)

app.get("/about", SiteController.About)

app.get("/contact", SiteController.Contact)

module.exports = app
