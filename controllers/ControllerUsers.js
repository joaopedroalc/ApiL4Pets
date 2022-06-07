const db = require('../config/db');

module.exports = {
    async insert(req, res) {
        let datas = {
            "Name_User": req.body.Name_User,
            "Email": req.body.Email,
            "Password_User": req.body.Password_User,
            "Phonenumber": req.body.Phonenumber,
            "Age": req.body.Age
        }

        try {
            let response;
            //TESTE ABAIXO DE VERIFICAÇÃO DE EMAIL
            // await db.query("SELECT * FROM Users WHERE Email = ?", [datas["Email"]], (err, res) => {
            //     if (err) {
            //         res.send(err);
            //     }
            //     if (res.length == 0) {
            //         response = db.query('INSERT INTO Users SET ?', [datas], (err, res) => {
            //             if (err) {
            //                 res.send(err);
            //             }
            //             console.log("entrei")
            //             res.send({ msg: "Cadastro feito com sucesso!" });
            //         })
            //     } else {
            //         res.send({ msg: "Usuário ja cadastrado" });
            //     }
            // })

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
            "Name_User": req.body.Name_User,
            "Email": req.body.Email,
            "Password_User": req.body.Password_User,
            "Phonenumber": req.body.Phonenumber,
            "Age": req.body.Age
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