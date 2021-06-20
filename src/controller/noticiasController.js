const fs = require('fs');
const path = require('path');
const jsonTable = require('../database/jsonTable');
const noticiasTable = jsonTable('noticias');

const noticiasController= {
    listado: (req,res)=>{
        let noticias = noticiasTable.all()


        res.render("noticias/noticias.ejs", {noticias} )
    },
    create: (req,res)=>{
        
        res.render("noticias/formularioCreacion.ejs" )
    },
    store: (req, res) => {
        // Generamos la nueva noticia
        let noticia = req.body;

        if (req.file) {
            noticia.imagen = req.file.filename;
        } else {
            res.send('La imagen es obligatoria');
        }
        
        noticiasTable.create(noticia);
        
        res.redirect("/noticias");
    },


    
}

module.exports = noticiasController