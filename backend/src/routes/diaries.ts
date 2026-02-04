import express from 'express'
import getInfoSSOO from './nodeOSInfo';

/**
 * * Los router son como unos manejadores o handlers donde vamos 
 * * a designar los endpoints a las rutas especificas. 
 * ?Por ejemplo: si tengo un tipo llamado users, me crearé un router para
 * ?todos los endpoints de user, la función como tal del endpoint las haré
 * ? en un archivo diferente en un carpeta resolvers.
 * * Luego este router se importa en el archivo ejecutable y de la misma forma se le asigna una ruta principal.
 */

const router = express.Router();

router.get('/', (req, res) => {
    res.send(getInfoSSOO());
});

router.post('/', (req, res) => {
    res.send('Fetching diary routes');
});

export default router;