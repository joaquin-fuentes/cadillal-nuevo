const fs = require('fs');
const path = require('path');
const jsonTable = require('../database/jsonTable');
const mensajesTable = jsonTable('mensajes');

const mainController= {
    home: (req,res)=>{
        res.render("main/home.ejs")
    },
    
    contact: (req,res)=>{
        res.render("main/contact.ejs")
    },
    
    mensajes: (req,res)=>{
        let mensajes = mensajesTable.all()

        res.render("main/mensajes.ejs", {mensajes})
    },
    
    storeMensajes: (req, res) => {
        // Generamos el nuevo mensaje
        let mensaje = req.body;
        
        mensajesTable.create(mensaje);
        
        res.redirect("/");
    },
    
}

module.exports = mainController