import * as express from "express";
//* Used to destructure the functions out which allows you to remove chirpStore object notation
import { GetChirps, GetChirp, UpdateChirp, CreateChirp, DeleteChirp } from "../utils/chirpstore";

//* USE POSTMAN & SETTING THE HEADERS FOR YOU AND ALWAYS CHECK ROUTES FIRST BEFORE DOING THE CLIENT SIDE -> TO KNOW IF SERVER WORKING
//* In routes/chirps.js, create GET, POST, PUT, DELETE methods on a router that is created in chirps.js
const chirpsRouter = express.Router();

/*
    Reads a chirp BY ID
    http://localhost:3000/api/chirps/1
*/
//* chirpsrouter imports from ./chirps json and then has a specified path called chirpid to read the object based on the id with the GetChirp API method
chirpsRouter.get('/:chirpid', (req: express.Request, res: express.Response) => {
    const id: String = req.params.chirpid
    //* uses chirpstore API 
    const chirp = GetChirp(id)
    res.json(chirp);
});

/*
    Reads ALL chirps
    http://localhost:3000/api/chirps/
*/

//* ORIGINAL CODE WHICH WAS WORKING:
//chirpsRouter.get('/', (req: express.Request, res: express.Response) => {
//    const chirps = GetChirps()
//    res.json(chirps);
//    console.log(chirps);
//});
chirpsRouter.get('/', (req: express.Request, res: express.Response) => {
    const data = GetChirps();
    console.log(data)
    //* fixes chirpstore return data since it was hard to work with - Data reformat
    //* allows the map function to display the right values from the data array using key
    let chirps = Object.keys(data).map((key) => {
        return {
            id: key,
            user: data[key].user,
            text: data[key].text
        };
    });
    chirps.pop();
    res.send(chirps);
});

/*
    CREATE chirp
    http://localhost:3000/api/chirps/
*/
chirpsRouter.post('/', (req: express.Request, res: express.Response) => {
    //* uses chirpstore API
    console.log(req.body);
    CreateChirp(req.body);
    //* server returns status 200 to the client -> OK it worked 2.. code
    res.sendStatus(200);
});

/*
    EDIT chirp BY ID by updating or replacing
    http://localhost:3000/api/chirps/1
*/
chirpsRouter.put('/:chirpid', (req: express.Request, res: express.Response) => {
    const id: String = req.params.chirpid
    //* uses chirpstore API 
    //* passes in an object when you edit 
    const chirpObj: chirp = {
        username: req.body.username,
        message: req.body.message
      };
    const chirpupdate = UpdateChirp(id, chirpObj)
    res.json(chirpupdate);
    res.sendStatus(200);
});

/*
    DELETE chirp BY ID
    http://localhost:3000/api/chirps/1
*/
chirpsRouter.delete('/:chirpid', (req: express.Request, res: express.Response) => {
    const id: String = req.params.chirpid;
    //* uses chirpstore API 
    const chirpdelete = DeleteChirp(id);
    res.json(chirpdelete);
    res.sendStatus(200);
});

interface chirp {
    username: String,
    message: String
}

//* Remember to export your router with module.exports to ./chirps into chirps.json
export default chirpsRouter;