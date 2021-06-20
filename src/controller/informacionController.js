const fs = require('fs');
const path = require('path');
const jsonTable = require('../database/jsonTable');
const informacionTable = jsonTable('informacion');
const trabajadoresTable = jsonTable('trabajadores');

const informacionController= {
    home: (req,res)=>{
        res.render("informacion/informacion.ejs")
    },
    comollegar: (req,res)=>{
        res.render("informacion/comollegar.ejs")
    },
    
    actividades: (req,res)=>{
        res.render("informacion/actividades.ejs")
    },
    
    hospedajeListado: (req,res)=>{
        let informacion = informacionTable.all()


        res.render("informacion/hospedaje.ejs", {informacion})
    },

    baresListado: (req,res)=>{
        let informacion = informacionTable.all()

        res.render("informacion/bares.ejs" , {informacion})
    },
    
    comprasListado: (req,res)=>{
        let informacion = informacionTable.all()

        res.render("informacion/compras.ejs", {informacion})
    },

    trabajadoresListado: (req,res)=>{
        let trabajadores = trabajadoresTable.all()

        res.render("informacion/trabajadores.ejs", {trabajadores})
    },
    
    empresasListado: (req,res)=>{
        let informacion = informacionTable.all()

        res.render("informacion/turismoAventura.ejs", {informacion})
    },
    
    campingListado: (req,res)=>{
        let informacion = informacionTable.all()

        res.render("informacion/camping.ejs", {informacion})
    },
    
    heladeriaListado: (req,res)=>{
        let informacion = informacionTable.all()

        res.render("informacion/heladeria.ejs", {informacion})
    },
    
    casasComidaListado: (req,res)=>{
        let informacion = informacionTable.all()

        res.render("informacion/casasComida.ejs", {informacion})
    },
    
    create: (req,res)=>{
        
        res.render("informacion/formularioCreacion.ejs" )
    },
    store: (req, res) => {
        // Generamos la nueva noticia
        let informacion = req.body;

        if (req.file) {
            informacion.imagen = req.file.filename;
        } else {
            res.send('La imagen es obligatoria');
        }
        
        informacionTable.create(informacion);
        
        res.redirect("/informacion");
    },


}

module.exports = informacionController