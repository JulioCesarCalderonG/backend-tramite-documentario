const { Router } = require("express");
const { getDocumentoInternoPdf, pdfDocInter, getPruebaPdf } = require("../controllers/pdf");
const { validarCampos, validarJWT } = require("../middlewares");

const router = Router();


router.get('/',getDocumentoInternoPdf);
router.get('/pruebapdfinter',getPruebaPdf);
router.get('/documento-interno',pdfDocInter);



module.exports =router;