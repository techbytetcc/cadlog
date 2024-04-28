const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

// Middleware para analisar corpos de solicitação JSON
app.use(bodyParser.json());

// Endpoint para lidar com solicitações de cadastro
app.post('/cadastro', (req, res) => {
    const { firstname, lastname, email, number, password, cargo } = req.body;

    // Verificação dos dados
    if (!firstname || !lastname || !email || !number || !password || !cargo) {
        return res.status(400).json({ message: 'Todos os campos são obrigatórios.' });
    }


    console.log('Novo usuário cadastrado:');
    console.log('Nome:', firstname);
    console.log('Sobrenome:', lastname);
    console.log('E-mail:', email);
    console.log('Contato:', number);
    console.log('Senha:', password);
    console.log('Cargo:', cargo);

    
    res.status(200).json({ message: 'Cadastro realizado com sucesso.' });
});

// Inicia o servidor
app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});
