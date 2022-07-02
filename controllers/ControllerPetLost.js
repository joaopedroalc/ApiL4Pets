const db = require('../config/db');

module.exports = {
  async insert(req, res) {
    let datas = {
      "email": req.body.email,
      "DescriptionPet_PetLost": req.body.DescriptionPet_PetLost,
      "Location_PetLost": req.body.Location_PetLost,
      "Reword_PetLost": req.body.Reword_PetLost,
      "IdentificationImage_PetLost": req.body.IdentificationImage_PetLost,
    }

    try {
      let response = await db.query('INSERT INTO PetLost SET ?', [datas]);
      res.json(response);
    } catch (error) {
      console.log(error);
    }
  },
  async update(req, res) {
    let Id_PetLost = req.params.Id_PetLost;

    let datas = {
      "email": req.body.email,
      "DescriptionPet_PetLost": req.body.DescriptionPet_PetLost,
      "Location_PetLost": req.body.Location_PetLost,
      "Reword_PetLost": req.body.Reword_PetLost,
      "IdentificationImage_PetLost": req.body.IdentificationImage_PetLost,
    }

    try {
      let response = await db.query('UPDATE PetLost SET ? WHERE Id_PetLost = ?', [datas, Id_PetLost]);
      res.json(response);
    } catch (error) {
      console.log(error);
    }
  },
  async findAll(req, res) {
    try {
      let response = await db.query('SELECT * FROM PetLost');
      res.json(response[0]);
    } catch (error) {
      console.log(error);
    }
  },
  async findById(req, res) {
    let Id_PetLost = req.params.Id_PetLost;
    try {
      let response = await db.query(`SELECT * FROM PetLost WHERE Id_PetLost = ${Id_PetLost}`);
      res.json(response[0]);
    } catch (error) {
      console.log(error);
    }
  },
  async delete(req, res) {
    let Id_PetLost = req.params.Id_PetLost;

    try {
      let response = await db.query(`DELETE FROM PetLost WHERE Id_PetLost = ${Id_PetLost}`);
      res.json(response);
    } catch (error) {
      console.log(error);
    }
  }
}