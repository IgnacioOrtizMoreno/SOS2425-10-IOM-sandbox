const express = require("express");
const cool = require("cool-ascii-faces")
const app = express();
const PORT= 16078;

//Ruta estatica

app.use("/",express.static("./static"))

function handler (request, response){
        response.send("Hello from the server");
    };

app.get("/",handler)    


// app.get("/",(request, response)=>{
//     response.send("Hello from the server");
// });
app.get("/cool",(request, response)=>{
    response.send(cool());
});

app.listen(PORT, ()=>{
    console.log(`Server running on ${PORT}`);
});

console.log(`Finish Set up`);