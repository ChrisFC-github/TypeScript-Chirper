//* express doesnt have default export so use * to IMPORT ALL from express module and give it the name Express
import * as express from "express";
import apiRouter from "./routes";
const app = express();
//* NO NEED TO PUT BODY PARSER WHEN EXPRESS IS IMPORTED

app.use(express.json());
//* uses express to take urlencoded body payloads using the body-parser which takes form post data and transforms it into object that is available on request.body in the route handler
app.use(express.urlencoded({ extended: false }));
//* Remember to use express.static to setup the middleware!
//* serves up any file in the client folder
//* uses middleware router where function is executed for any type of HTTP request on the /api/chirps/.
app.use('/api', apiRouter);
app.use(express.static('public'));
//* Add the api router to the express app with the path /api.


//* IF NOT CROSSORIGIN or multiple ports if we are local we are running same port so we don't need CORS policies
app.listen(3000, () => console.log(`

    This server is Running on Port: 3000

`));