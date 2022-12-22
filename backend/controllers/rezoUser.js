const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const RezoUser = require('../models/RezoUser');

exports.signup = async (req, res, next) => {
    const hash = await bcrypt.hash(req.body.password, 10);
    const rezoUser = new RezoUser({
        identifier: req.body.identifier,
        email: req.body.email,
        password: hash
    });
    try {
        const valid = await bcrypt.compare(req.body.confirmPassword, rezoUser.password);
        const errorMessage = "Le mot de passe ne correspond pas au mot de passe de confirmation";
        if (!valid) {
            throw error = new Error(errorMessage)
        } else {
            await rezoUser.save();
            const message = "Utilisateur enregistré";
            res.status(201).json(message);
        }
    } catch(error) {
        const message = "Le mot de passe ne correspond pas au mot de passe de confirmation";
        if (error.message === message) {
            res.status(401).json(error.message)
        } else { res.status(500).json(error.message) }
    };
};

exports.login = async (req, res, next) => {
    try {
        const rezoUser = await RezoUser.findOne({ identifier: req.body.identifier });
        const message ="Paire identifiant/mot de passe invalide";
        if (rezoUser === null) {
            throw error = new Error(message)
        } else {
            const valid = await bcrypt.compare(req.body.password, rezoUser.password);
            if (!valid) {
                throw error = new Error(message)
            } else { res.status(200).json({
                userId: rezoUser._id,
                token: jwt.sign(
                    { userId: rezoUser._id },
                    'RANDOM_TOKEN_SECRET',
                    { expiresIn: '24h' }
                )
            }) }
        }
    } catch(error) {
        const message ="Paire identifiant/mot de passe invalide";
        if (error.message === message) {
            res.status(401).json(error.message)
        } else {
            res.status(500).json(error.message)
        }
    };
};