import express from 'express'
import diaryRoutes from "./routes/diaries"

//Creamos la API como tal
const app = express();
app.use(express.json());

//Nos creamos un puerto concreto
const PORT = 3000;

//Endpoint
app.get('/ping', (_req, res) => {
    console.log('someone pinged here!!');
    res.send('pong');
});

/** 
 * * Asi es como asignamos a una ruta principal el router, dentro de esa ruta habrá
 * * subrutas (las definidas en el router) que ejecutarán la correspondiente función del endpoint 
 */
app.use('/api/diaries', diaryRoutes);

//Ponemos la PAI a esccuahr por un puerto
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}.`);
})