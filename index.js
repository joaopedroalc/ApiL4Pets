const express = require('express');
const app = express();
const { request } = require('express');
const cors = require("cors");

var bodyParser = require('body-parser');
app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));

app.use(express.json());

const corsOptions = {
    origin: '*',
    credentials: true,            //access-control-allow-credentials:true
    optionSuccessStatus: 200,
}

app.use(cors(corsOptions)) // Use this after the va

const ControllerUsers = require('./controllers/ControllerUsers');
const ControllerPetFound = require('./controllers/ControllerPetFound');
const ControllerPetLost = require('./controllers/ControllerPetLost');

//Users
app.post('/Users/insert', ControllerUsers.insert); //ok
app.put('/Users/update/:Id_User', ControllerUsers.update); //ok
app.get('/Users', ControllerUsers.findAll); //ok
app.get('/Users/:Id_User', ControllerUsers.findById); //ok
app.delete('/Users/:Id_User', ControllerUsers.delete);//ok

//PetFound
app.post('/PetFound/insert', ControllerPetFound.insert); //ok
app.put('/PetFound/update/:Id_PetFound', ControllerPetFound.update); //ok
app.get('/PetFound', ControllerPetFound.findAll); //ok
app.get('/PetFound/Pets', ControllerPetFound.findById); //ok
app.delete('/PetFound/:Id_PetFound', ControllerPetFound.delete);//ok

//PetLost
app.post('/PetLost/insert', ControllerPetLost.insert); //ok
app.put('/PetLost/update/:Id_PetLost', ControllerPetLost.update); //ok
app.get('/PetLost', ControllerPetLost.findAll); //ok
app.get('/PetLost/Pets', ControllerPetLost.findById); //ok
app.delete('/PetLost/:Id_PetLost', ControllerPetLost.delete);//ok

app.get('/', (req, res) => {
    res.send('API L4PETS')
})


const PORT = process.env.PORT || 8089;
app.listen(PORT, () => {
    console.log(`API RODANDO NA PORTA ${PORT}`);
})