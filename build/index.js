"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
require("dotenv").config();
var mongoose = require("mongoose");
var routes = require("./routes");
var cors = require("cors");
var app = express_1.default();
var PORT = process.env.PORT || 3001;
// Define middleware here
app.use(express_1.default.urlencoded({ extended: true }));
app.use(express_1.default.json());
app.use(cors());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
    app.use(express_1.default.static("client/build"));
}
// Add routes
app.use(routes);
// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI)
    .then().catch(function (err) { return console.log(err); });
app.listen(PORT, function () {
    console.log("listening on port " + PORT);
});
