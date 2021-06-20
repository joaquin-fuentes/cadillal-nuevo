// MODULOS
const express = require("express")
const app = express()
 const methodOverride = require('method-override');
// const session = require('express-session');
// //const auth = require('./src/middlewares/auth');
// const cors = require ("cors")


// Rutas
 const mainRoutes = require("./src/routes/mainRoutes")
 
 const noticiasRoutes = require("./src/routes/noticiasRoutes")
 const informacionRoutes = require("./src/routes/informacionRoutes")
// const usersRoutes = require("./src/routes/userRoutes")
// const productsRouter = require('./src/routes/productRoutes')
// const apiRouter = require('./src/routes/apiUserRoutes')


// Configuración
app.use(express.static("public")) 
app.set("view engine", "ejs")
app.set("views", "src/views")
 app.use(express.urlencoded({ extended: false }));
 app.use(express.json());
 app.use(methodOverride('_method'));



// //middlewares
// app.use(cors())

// // Sessiones y cookies
// app.use(session({
//     secret: 'Mi sitio',
//     resave: false, // no vuelve a guardar si no hay cambios
//     saveUninitialized: true, // guarda sessiones aunque todavía no haya datos
// }));
//app.use(auth);




// RUTAS

app.use("/",mainRoutes)

app.use("/noticias",noticiasRoutes)

app.use("/informacion",informacionRoutes)
// app.use("/usuarios",usersRoutes)
// app.use('/productos', productsRouter);
// app.use('/api', apiRouter);

// Iniciamos el servidor
app.listen(process.env.PORT || 3000,()=>{
    console.log("servidor corriendo en puerto 3000")
})

// // Error 404
// app.use((req,res,next) => {
//     res.status(404).render("Error404/not-found")
// })