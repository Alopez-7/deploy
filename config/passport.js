const passport = require('passport')
const Reviews = require('../models/reviews')
const localStrategy = require('passport-local').Strategy
const User = require('../models/users')

passport.use(new localStrategy({
    usernameField:'usuario',
    passwordField:'password'
},function(usuario,password,done){
    User.findOne({where:{usuario}}).then(function(user){
        if(!user || !User.validatePassword(password,user.password_salt,user.password_hash)){
            return done(null,false,{errors:{'email o contrasena':'equivocado'}})
        }
        
        //if(user.id==Reviews.findByPk(req)){}
        return done(null,user)
    }).catch(done)
}))


module.exports = passport