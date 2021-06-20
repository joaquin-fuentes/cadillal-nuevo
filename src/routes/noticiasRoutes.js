const express = require ("express")

const noticiasController = require ("../controller/noticiasController")

const router = express.Router()


const path = require('path');

const multer = require('multer');
const storage = multer.diskStorage({
    destination: (req, file, callback) => {
        callback(null, path.join(__dirname, '../../public/img/noticias/'));
    },
    filename: (req, file, callback) => {
        // Mejor usar algo como esto en lugar de Date.now()
        // https://www.npmjs.com/package/uuidv4
        callback(null, 'noticia-' + Date.now() + path.extname(file.originalname));
    }
});
const upload = multer({ storage });

router.get ("/", noticiasController.listado);

router.get ("/crear-noticia", noticiasController.create);

router.post('/', upload.single('imagen'), noticiasController.store); // Procesa el formulario de creación




 module.exports = router