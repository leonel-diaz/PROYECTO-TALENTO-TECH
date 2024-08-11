var express = require("express");
var router = express();

router.get('/', (req, res) => {
    res.render('mascotas',{arrayMascotas:[
      {id:"001",nombre:"kiara",descripcion:"bulterrier"},
      {id:"002",nombre:"rocgh",descripcion:"bulterrier"},
      {id:"003",nombre:"vela",descripcion:"bulterrier"},
    ]})
  })

module.exports=router;