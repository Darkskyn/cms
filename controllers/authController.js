const jwt = require('jsonwebtoken')
const bcryptjs = require('bcryptjs')
const conexion = require('../database/db')
const {promisify} = require('util');

// procedimiento para registrarnos
exports.register = async (req, res) => {
    try {
      const name = req.body.name;
      const user = req.body.user;
      const pass = req.body.pass;
      const rool = req.body.rool;
  
      if (!name || !user || !pass || !rool) {
        req.flash('alert', true);
        req.flash('alertTitle', 'Advertencia');
        req.flash('alertMessage', 'Todos los campos son obligatorios');
        req.flash('alertIcon', 'info');
        req.flash('showConfirmButton', true);
        req.flash('timer', false);
        req.flash('ruta', 'register');
        res.redirect('/register');
      } else {
        let passHash = await bcryptjs.hash(pass, 8);
  
        conexion.query(
          'INSERT INTO users SET ?', { user: user, name: name, pass: passHash, rool: rool },
          (error, results) => {
            if (error) {
              console.log(error);
              res.status(500).send('Error en el registro');
            } else {
              res.redirect('/');
            }
          }
        );
      }
    } catch (error) {
      console.log(error);
      res.status(500).send('Error en el registro');
    }
  };

  exports.login = async (req, res) => {
  try {
    const user = req.body.user;
    const pass = req.body.pass;

    if (!user || !pass) {
      res.render('login', {
        alert: true,
        alertTitle: "Advertencia",
        alertMessage: "Ingrese un usuario y contraseña",
        alertIcon: 'info',
        showConfirmButton: true,
        timer: false,
        ruta: 'login'
      });
    } else {
      conexion.query('SELECT * FROM users WHERE user = ?', [user], async (error, results) => {
        if (results.length === 0 || !(await bcryptjs.compare(pass, results[0].pass)) || results[0].rool !== 'si') {
          res.render('login', {
            alert: true,
            alertTitle: "Error",
            alertMessage: "Usuario y/o contraseña incorrectos",
            alertIcon: 'error',
            showConfirmButton: true,
            timer: false,
            ruta: 'login'
          });
        } else {
          // Inicio de sesión OK
          const id = results[0].id;
          const token = jwt.sign({ id: id }, process.env.JWT_SECRETO, {
            expiresIn: process.env.JWT_TIEMPO_EXPIRA
          });

          const cookiesOptions = {
            expires: new Date(Date.now() + process.env.JWT_COOKIE_EXPIRES * 24 * 60 * 60 * 1000),
            httpOnly: true
          };

          res.cookie('jwt', token, cookiesOptions);

          res.render('login', {
            alert: true,
            alertTitle: "Conexión exitosa",
            alertMessage: "¡Inicio de sesión correcto!",
            alertIcon: 'success',
            showConfirmButton: false,
            timer: 800,
            ruta: ''
          });
        }
      });
    }
  } catch (error) {
    console.log(error);
  }
};

exports.isAuthenticated = async (req, res, next)=>{
    if (req.cookies.jwt) {
        try {
            const decodificada = await promisify(jwt.verify)(req.cookies.jwt, process.env.JWT_SECRETO)
            conexion.query('SELECT * FROM users WHERE id = ?', [decodificada.id], (error, results)=>{
                if(!results){return next()}
                req.user = results[0]
                return next()
            })
        } catch (error) {
            console.log(error)
            return next()
        }
    }else{
        res.redirect('/login')        
    }
}

exports.logout = (req, res)=>{
    res.clearCookie('jwt')   
    return res.redirect('/')
}






