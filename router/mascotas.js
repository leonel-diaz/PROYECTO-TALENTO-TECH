var express = require("express");
var router = express();

router.get('/', (req, res) => {
    res.render('mascotas',{titulo:'bienvenido de mascotas'})
  })

module.exports=router;