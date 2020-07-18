import express from "express";
import { router } from "./routes/loginRoutes";
//middleware to parse form 
import bodyParser from "body-parser";
//for sessions 
import cookieSession from "cookie-session";

const app = express();

//use middleware to parse form 
app.use(bodyParser.urlencoded({ extended: true }));
//use middleware for sessions 
app.use(cookieSession({ keys: ["I like turtles"] }));
//use routes 
app.use(router);


app.listen(3000, () => {
    console.log("listening on port 3000")
})