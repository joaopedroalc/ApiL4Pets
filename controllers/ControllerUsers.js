const db = require('../config/db');

module.exports = {
    async insert(req, res) {
        let datas = {
            "email": req.body.email,
            "full_name": req.body.full_name,
            "last_login": req.body.last_login
        }

        try {
            let response;
            response = await db.query('INSERT INTO Users SET ?', [datas]);
            res.json(response);
            console.log(response);
        } catch (error) {
            console.log(error);
        }
    },
    async update(req, res) {
        let Id_User = req.params.Id_User;

        let datas = {
            "email": req.body.email,
            "full_name": req.body.full_name,
            "last_login": req.body.last_login
        }

        try {
            let response = await db.query('UPDATE Users SET ? WHERE Id_User = ?', [datas, Id_User]);
            res.json(response);
        } catch (error) {
            console.log(error);
        }
    },
    async findAll(req, res) {
        try {
            let response = await db.query('SELECT * FROM Users');
            res.json(response[0]);
        } catch (error) {
            console.log(error);
        }
    },
    async findById(req, res) {
        let Id_User = req.params.Id_User;
        try {
            let response = await db.query(`SELECT * FROM Users WHERE Id_User = ${Id_User}`);
            res.json(response[0]);
        } catch (error) {
            console.log(error);
        }
    },
    async delete(req, res) {
        let Id_User = req.params.Id_User;

        try {
            let response = await db.query(`DELETE FROM Users WHERE Id_User = ${Id_User}`);
            res.json(response);
        } catch (error) {
            console.log(error);
        }
    }
}