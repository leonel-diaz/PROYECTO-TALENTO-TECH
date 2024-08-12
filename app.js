const e = require("express");
var express = require("express");
var app = express();
const port = 3000;

 //conecxion base de datos
const mongoose = require('mongoose');
const usuario='talentotechdb';
const password='m4ckhX82QOtOnzn8';
const dbname='mascotas';
const uri=`mongodb+srv://${usuario}:${password}@cluster0.eaziz.mongodb.net/${dbname}?retryWrites=true&w=majority&appName=Cluster0`;
//const uri='mongodb+srv://talentotechdb:m4ckhX82QOtOnzn8@cluster0.eaziz.mongodb.net/mascotas?retryWrites=true&w=majority&appName=Cluster0';
 mongoose.connect(uri)
  .then(()=>console.log('conectado a la base datos mogodb')
  )
  .catch(e=>(console.log('error al conectarse a la base de datos',e)))


// milddeware para contenido estatico
app.use(express.static(__dirname +'/public'));



// motor de plantillas
app.set('view engine', 'ejs');
app.set('views',__dirname +'/views');


app.use('/',require('./router/rutasweb'))
app.use('/mascotas',require('./router/mascotas'))


// direccionar lista 404 
app.use((res,req,next)=>{
   req.status(404).render('404',{
    titulo:"error 404 ",
    descripcion:"pagina no encontrada"
  });
});



app.listen(port, () => {
    console.log(`ejemplo aplicacion con express puerto  ${port}`)
})