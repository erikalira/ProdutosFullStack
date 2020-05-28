//importa os módulos e arquivos necessários
const request = require('supertest');
const server = require('../app.js');

describe('teste das rotas', () => {
   //descrição do caso de testes
    test('acessa todos produtos ', async () => {
        //qual a rota que ele deve acessar e qual requisição deve fazer
        const response = await request(server).get('/produtos');
        //qual o status esperado 
        expect(response.status).toEqual(200);
    });

    test('posta produto ', async () => {
    const response = await request(server).post('/produtos');
    expect(response.status).toEqual(201);
    });

    test('acessa produto por id ', async () => {
    const response = await request(server).get('/produtos/1');
    expect(response.status).toEqual(200 || 404);
    })
    
    test('edita produto por id ', async () => {
    const response = await request(server).put('/produtos/2').send({
        id_categoria: 1,
        descricao: 'test is cool',
      })
    expect(response.status).toEqual(200);
    });

    test('apaga produto por id ', async () => {
    const response = await request(server).delete('/produtos/3');
    expect(response.status).toEqual(204);
    });
})