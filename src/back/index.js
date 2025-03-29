import { request, response } from "express";
import dataStore from "nedb";
const BASE_API = "/api/v1"
let db = new dataStore();

let initialcontacts = [
    {
        name: "peter",
        phone: 123456
    },
    {
        name: "pablo",
        phone: 678595
    }
]
db.find({},(err,contacts)=>{
    if (contacts.length <1){
        db.insert(initialcontacts);
    }
});
function loadBackEnd(app){

    app.get(BASE_API+"/contacts",(request,response)=>{
        console.log("New GET to /contacts"); // Se ven en el servidor en este caso localhost
        db.find({},(err,contacts)=>{
            response.send(JSON.stringify(contacts.map((c)=>{
                delete c._id;
                return c;
            }),null,2));
        });
        
    });

    app.post(BASE_API+"/contacts",(request,response)=>{
        console.log("POST to /contacts"); // Se ven en el servidor en este caso localhost
        let newContact = request.body;

        db.insert(newContact);

        response.sendStatus(201);
    });
    app.delete(BASE_API+"/contacts/:name",(request,response)=>{
        let name = request.params.name;
        console.log(`DELETE to /contacts/${name}`);
        db.remove({"name" : name},{},(err,numRemoved)=>{
            if(err){
                response.status(500).send("Error code 01");
            }else{
                if(numRemoved>=1){
                    response.sendStatus(200);
                }else{
                    response.sendStatus(404);
                }
            }
        });
    })
}


export {loadBackEnd};