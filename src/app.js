const express = require('express');
const app = express();

app.use(express.json());

app.get('/health', (req, res) => {
  res.status(200).json({ status: 'OK', service: 'EduTech Labs API' });
});

app.post('/api/asistencia', (req, res) => {
  const { estudianteId, presente } = req.body;
  if (!estudianteId || typeof presente !== 'boolean') {
    return res.status(400).json({ error: 'Datos de asistencia invalidos' });
  }
  return res.status(201).json({
    mensaje: 'Asistencia registrada',
    estudianteId,
    presente
  });
});

module.exports = app;
