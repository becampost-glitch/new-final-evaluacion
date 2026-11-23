const request = require('supertest');
const app = require('../src/app');

describe('Pruebas API EduTech Labs', () => {
  test('GET /health debe responder estado 200 OK', async () => {
    const res = await request(app).get('/health');
    expect(res.statusCode).toBe(200);
    expect(res.body.status).toBe('OK');
  });

  test('POST /api/asistencia debe registrar asistencia valida', async () => {
    const res = await request(app)
      .post('/api/asistencia')
      .send({ estudianteId: 'EST-001', presente: true });
    expect(res.statusCode).toBe(201);
    expect(res.body.estudianteId).toBe('EST-001');
  });

  test('POST /api/asistencia debe rechazar datos incompletos con 400', async () => {
    const res = await request(app)
      .post('/api/asistencia')
      .send({ estudianteId: 'EST-001' });
    expect(res.statusCode).toBe(400);
  });
});
