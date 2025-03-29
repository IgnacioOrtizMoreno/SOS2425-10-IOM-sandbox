import express from "express";
import { loadBackEnd } from "./src/back/index.js";

const app = express();
const PORT = process.env.PORT || 16078;

// Middleware para parsear JSON en POST
app.use(express.json());

// Tus rutas de API
loadBackEnd(app);

// Servir contenido estático desde ./static
app.use("/", express.static("./static"));

// Ruta por defecto (útil para test rápido en navegador)
app.get("/", (req, res) => {
    res.send("Hello from the server");
});

// Arrancar el servidor
app.listen(PORT, () => {
    console.log(`Server running on ${PORT}`);
});

console.log("Finish Set up");
