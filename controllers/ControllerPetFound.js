const db = require('../config/db');

module.exports = {
  async insert(req, res) {
    let datas = {
      "email": req.body.email,
      "DescriptionPet_PetFound": req.body.DescriptionPet_PetFound,
      "Location_PetFound": req.body.Location_PetFound,
      "IdentificationImage_PetFound": req.body.IdentificationImage_PetFound,
    }

    try {
      let response = await db.query('INSERT INTO PetFound SET ?', [datas]);
      res.json(response);
    } catch (error) {
      console.log(error);
    }
  },
  async update(req, res) {
    let Id_PetFound = req.params.Id_PetFound;

    let datas = {
      "email": req.body.email,
      "DescriptionPet_PetFound": req.body.DescriptionPet_PetFound,
      "Location_PetFound": req.body.Location_PetFound,
      "IdentificationImage_PetFound": req.body.IdentificationImage_PetFound,
    }

    try {
      let response = await db.query('UPDATE PetFound SET ? WHERE Id_PetFound = ?', [datas, Id_PetFound]);
      res.json(response);
    } catch (error) {
      console.log(error);
    }
  },
  async findAll(req, res) {
    try {
      let response = await db.query('SELECT * FROM PetFound');
      res.json(response[0]);
    } catch (error) {
      console.log(error);
    }
  },
  async findById(req, res) {
    let Id_PetFound = req.params.Id_PetFound;
    try {
      let response = await db.query(`SELECT * FROM PetFound WHERE Id_PetFound = ${Id_PetFound}`);
      res.json(response[0]);
    } catch (error) {
      console.log(error);
    }
  },
  async delete(req, res) {
    let Id_PetFound = req.params.Id_PetFound;

    try {
      let response = await db.query(`DELETE FROM PetFound WHERE Id_PetFound = ${Id_PetFound}`);
      res.json(response);
    } catch (error) {
      console.log(error);
    }
  }
}