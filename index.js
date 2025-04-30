const express = require('express');
const app = express();

// Middleware para leer JSON
app.use(express.json());

// Datos de ejemplo (simulando una base de datos)
let libros = [
  { id: 1, titulo: 'Cien años de soledad' },
  { id: 2, titulo: 'Don Quijote de la Mancha' }
];

// Ruta GET: obtener todos los libros
app.get('/api/libros', (req, res) => {
  res.json(libros);
});

// Ruta GET: obtener un libro por ID
app.get('/api/libros/:id', (req, res) => {
  const libro = libros.find(l => l.id === parseInt(req.params.id));
  if (!libro) return res.status(404).send('Libro no encontrado');
  res.json(libro);
});

// Ruta POST: agregar un nuevo libro
app.post('/api/libros', (req, res) => {
  const nuevoLibro = {
    id: libros.length + 1,
    titulo: req.body.titulo
  };
  libros.push(nuevoLibro);
  res.status(201).json(nuevoLibro);
});

// Ruta PUT: actualizar un libro
app.put('/api/libros/:id', (req, res) => {
  const libro = libros.find(l => l.id === parseInt(req.params.id));
  if (!libro) return res.status(404).send('Libro no encontrado');
  libro.titulo = req.body.titulo;
  res.json(libro);
});

// Ruta DELETE: eliminar un libro
app.delete('/api/libros/:id', (req, res) => {
  libros = libros.filter(l => l.id !== parseInt(req.params.id));
  res.status(204).send(); // No Content
});

// Iniciar servidor
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`API escuchando en http://localhost:${PORT}`);
});