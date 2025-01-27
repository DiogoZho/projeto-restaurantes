const express = require('express');
const axios = require('axios');
const router = express.Router();

// Rota principal para buscar restaurantes
router.get('/:cidade/:especialidade/:raio', async (req, res) => {
    const cidade = req.params.cidade;
    const especialidade = req.params.especialidade;
    const raio = req.params.raio;
    const chaveAPI = process.env.YELP_API_KEY;

    if (!chaveAPI) {
        return res.status(500).json({ erro: 'Chave API do Yelp não configurada.' });
    }

    try {
        const resposta = await axios.get('https://api.yelp.com/v3/businesses/search', {
            headers: {
                Authorization: `Bearer ${chaveAPI}`
            },
            params: {
                location: cidade,
                categories: especialidade === 'nenhuma' ? '' : especialidade,
                radius: raio * 1000,
                limit: 5
            }
        });

        const restaurantes = resposta.data.businesses.map(r => ({
            nome: r.name,
            endereco: r.location.address1,
            avaliacao: r.rating,
            preco: r.price || 'N/A',
        }));

        res.json(restaurantes);
    } catch (erro) {
        console.error('Erro ao buscar restaurantes:', erro.message);
        res.status(500).json({ erro: 'Erro ao obter os restaurantes!' });
    }
});

module.exports = router;
