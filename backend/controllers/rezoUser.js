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
    } catch (error) { res.status(500).json({ error }) };
};