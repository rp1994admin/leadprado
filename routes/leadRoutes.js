const express = require('express');
const Lead = require('../models/Lead'); // Certifique-se de que o caminho para o modelo Lead está correto
const router = express.Router();

// Rota para criar um lead (POST)
router.post('/', async (req, res) => {
    try {
        const newLead = new Lead(req.body);
        await newLead.save();
        res.status(201).json(newLead);
    } catch (error) {
        console.error('Error saving lead:', error);
        res.status(500).json({ message: error.message });
    }
});

// Rota para obter todos os leads (GET)
router.get('/', async (req, res) => {
    try {
        const leads = await Lead.find();
        res.json(leads);
    } catch (error) {
        console.error('Error fetching leads:', error);
        res.status(500).json({ message: error.message });
    }
});

// Exportar o router
module.exports = router;



