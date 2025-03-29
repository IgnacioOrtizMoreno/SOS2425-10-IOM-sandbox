import express from "express";
import { loadBackEnd } from "./src/back/index.js";
const app = express();
const PORT= process.env.PORT || 16078;

//Ruta estatica

app.use("/",express.static("./static"))

function handler (request, response){
        response.send("Hello from the server");
    };

app.get("/",handler)    


// app.get("/",(request, response)=>{
//     response.send("Hello from the server");
// });


app.listen(PORT, ()=>{
    console.log(`Server running on ${PORT}`);
});

console.log(`Finish Set up`);

//L05
 app.use(express.json());
// const BASE_API = "/api/v1"
// let contacts = [
//     {
//         name: "peter",
//         phone: 123456
//     },
//     {
//         name: "pablo",
//         phone: 678595
//     }
// ]

// app.get(BASE_API+"/contacts",(request,response)=>{
//     console.log("New GET to /contacts"); // Se ven en el servidor en este caso localhost
//     response.send(JSON.stringify(contacts,null,2));
// });

// app.post(BASE_API+"/contacts",(request,response)=>{
//     console.log("POST to /contacts"); // Se ven en el servidor en este caso localhost
//     let newContact = request.body;

//     contacts.push(newContact);

//     response.sendStatus(201);
// });

//L06

loadBackEnd(app);

