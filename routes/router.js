const express = require('express')
const router = express.Router()

const authController = require('../controllers/authController')

//router para las vistas
router.get('/', authController.isAuthenticated, (req, res) => {
    res.render('index', { user: req.user });
  });
router.get('/login', (req, res)=>{
    res.render('login', {alert:false})
})
router.get('/register', (req, res)=>{
    res.render('register')
})
// Ruta para la página de actualización
router.get('/actualizar', authController.isAuthenticated, (req, res) => {
    res.render('actualizar', { user: req.user });
  });

//router para los métodos del controller
router.post('/register', authController.register)
router.post('/login', authController.login)
router.get('/logout', authController.logout)
router.get('/actualizar', authController.isAuthenticated)
module.exports = router