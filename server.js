const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware para analisar o corpo das requisições
app.use(express.json());

// Conectar ao MongoDB
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => {
    console.log('MongoDB connected'); // Mensagem de confirmação da conexão
    app.listen(PORT, () => {
        console.log(`Server is running on http://localhost:${PORT}`); // Mensagem quando o servidor começa a escutar
    });
})
.catch(err => console.error('MongoDB connection error:', err)); // Tratamento de erro

// Importar e usar as rotas
const leadRoutes = require('./routes/leadRoutes');
app.use('/leads', leadRoutes); // Use as rotas para leads

// Rota de teste
app.get('/', (req, res) => {
    res.send('Hello, World!'); // Resposta para requisições GET
});

