var express = require('express')
var app = express()

// Load Controllers
const SiteController = "./controllers/SiteController"

// Routes
app.get("/", SiteController.Index)

module.exports = app
