var passport = require ('passport');
var User = require ('../models/user');
var LocalStrategy = require ('passport-local').Strategy;

passport.serializeUser(function(user, done) {
    done(null, user.id)
});

passport.deserializeUser(function(id, done) {
    User.findById(id, function(err, user) {
        done(err, user);
    });
});

passport.use('local.signup', new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password',
    passReqToCallBack: true
}, function(req, email, password, done){
    req.checkBody('email', 'Email invalide').notEmpty().isEmail();
    req.checkBody('password', 'Password invalide').notEmpty().isLength({min:4});
    var errors = req.validationErrors();
    if (errors) {
        var messages = [];
        errors.forEach(function(error){
            messages.push(error.msg);
        });
        return done(null, false, req.flash('error', messages));
    }
    User.findOne({'email': email}, function(err, user){
        if (err) {
            return done(err);
        }
        if (user) {
            return done(null, false, {message: 'Email déjà utilisé'});
        }
        var newUser = new User();
        newUser.email = email;
        newUser.password = newUser.encryptPassword(password);
        newUser.save(function(err, result){
            if (err) {
                return done (err);
            }
            return done(null, newUser);
        });
    });
}));

passport.use('local.signin', new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password',
    passReqToCallBack: true
}, function(req, email, password, done) {
    req.checkBody('email', 'Email invalide').notEmpty().isEmail();
    req.checkBody('password', 'Password invalide').notEmpty();
    var errors = req.validationErrors();
    if (errors) {
        var messages = [];
        errors.forEach(function(error){
            messages.push(error.msg);
        });
        return done(null, false, req.flash('error', messages));
    }
    User.findOne({'email': email}, function(err, user){
        if (err) {
            return done(err);
        }
        if (!user) {
            return done(null, false, {message: 'Utilisateur non trouvé'});
        }
        if (!user.validPassword(password)) {
            return done(null, false, {message: 'Mauvais mot de passe'});
        }
        return done(null, user);
    });
}));