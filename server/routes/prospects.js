const { Router } = require('express');
const saveProspectData = require('../controllers/prospects');
const { check } = require('express-validator');

const router = Router();

router.post('/',[
    check('correo','El correo no es calido').isEmail(),
] ,saveProspectData);


module.exports = router;