const express = require ("express")

const mainController = require ("../controller/mainController")

const router = express.Router()

router.get ("/", mainController.home);

router.get ("/contacto", mainController.contact);

router.get ("/mensajes" , mainController.mensajes);

router.post ("/contacto" , mainController.storeMensajes);



 module.exports = router