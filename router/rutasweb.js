var express = require("express");
const router = express.Router();

router.get('/', (req, res) => {
    res.render('index',{titulo:'bienvenido a node js '});
  })

  
router.get('/',(rep,res)=>{
    res.render('servicios',{titulo:"nuestros servicios dinamicos"});
  });


  module.exports= router;
  
  
  