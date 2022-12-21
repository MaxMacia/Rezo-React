const bcrypt = require('bcrypt');
const RezoUser = require('../models/RezoUser');

exports.signup = async (req, res, next) => {
    const hash = await bcrypt.hash(req.body.password, 10);
    const rezoUser = new RezoUser({
        identifier: req.body.identifier,
        email: req.body.email,
        password: hash
    });
    try {
        await rezoUser.save();
        const message = "Utilisateur enregistré";
        res.status(201).json(message);
    } catch(error) { res.status(500).json(error.message) };
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
                token: 'TOKEN'
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