const express = require("express");
const bodyParser = require("body-parser");
const cors = require ('cors');
 

const app = express();


const PORT = 3000;

app.use(cors()) 

// Middleware para analisar o corpo das requisições em JSON


app.use(bodyParser.json());

 

// Simulando um banco de dados simples em memória


let users = [


{ id: 1, name: "Usuário 1" },


{ id: 2, name: "Usuário 2" },


{ id: 3, name: "Usuário 3" },


];

 

// Rota para listar todos os usuários


app.get("/users", (req, res) => {


res.json(users);


});

 

// Rota para criar um novo usuário


app.post("/users", (req, res) => {


var newUser = req.body;


newUser.id = users.length + 1;


newUser.name = `Usuário ${newUser.id}`;


users.push(newUser);


res.json(newUser);


});

 

// Rota para buscar um usuário por ID


app.get("/users/:id", (req, res) => {


const userId = parseInt(req.params.id);


const user = users.find((user) => user.id === userId);


if (user) {


res.json(user);


} else {


res.status(404).json({ error: "Usuário não encontrado" });


}


});

 

// Rota para deletar um usuário por ID


app.delete("/users/:id", (req, res) => {


const userId = parseInt(req.params.id);


const userIndex = users.findIndex((user) => user.id === userId);


if (userIndex !== -1) {


users.splice(userIndex, 1);


res.status(204).end();


} else {


res.status(404).json({ error: "Usuário não encontrado" });


}


});

 

// Iniciando o servidor


app.listen(PORT, () => {


console.log(`Servidor rodando na porta ${PORT}`);


});