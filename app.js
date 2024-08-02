var express = require("express");
var app = express();
const port = 3000;

// milddeware para contenido estatico
app.use(express.static(__dirname +'/public'));

// motor de plantillas
app.set('view engine', 'ejs');
app.set('views',__dirname +'/views');


app.get ('/',function (rep,res) {
    // res.send("hello word");
    res.render('index',{titulo:"titulo dinamico con un motor de plantilla"});
});

// ejemplo de enrutamiento
app.get('/servicios',(rep,res)=>{
  res.render('servicios',{titulo:"nuestros servicios dinamicos"});
})

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