const express = require ("express")

const informacionController = require ("../controller/informacionController")

const router = express.Router()
const path = require('path');

const multer = require('multer');
const storage = multer.diskStorage({
    destination: (req, file, callback) => {
        callback(null, path.join(__dirname, '../../public/img/informacion/'));
    },
    filename: (req, file, callback) => {
        // Mejor usar algo como esto en lugar de Date.now()
        // https://www.npmjs.com/package/uuidv4
        callback(null, 'informacion-' + Date.now() + path.extname(file.originalname));
    }
});
const upload = multer({ storage });

router.get ("/", informacionController.home);

router.get ("/comollegar", informacionController.comollegar);

router.get ("/hospedaje", informacionController.hospedajeListado);

router.get ("/bares", informacionController.baresListado);

router.get ("/compras", informacionController.comprasListado);

router.get ("/trabajadores", informacionController.trabajadoresListado);

router.get ("/turismo-aventura", informacionController.empresasListado);

router.get ("/camping", informacionController.campingListado);

router.get ("/heladeria", informacionController.heladeriaListado);

router.get ("/casas-comida", informacionController.casasComidaListado);

router.get ("/actividades", informacionController.actividades);


router.get ("/crear-informacion", informacionController.create);

router.post('/', upload.single('imagen'), informacionController.store); // Procesa el formulario de creación







 module.exports = router