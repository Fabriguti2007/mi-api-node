
# 📚 API REST de Libros

Una API básica construida con **Node.js** y **Express** para gestionar una colección de libros. Permite crear, obtener, actualizar y eliminar libros mediante peticiones HTTP.

---

## 📦 Requisitos

- Tener [Node.js](https://nodejs.org/) instalado
- Tener [Postman](https://www.postman.com/) o cualquier cliente REST para probar la API

---

## 🚀 Instalación

1. **Instalar dependencias**

```bash
npm install express
```

2. **Ejecutar la API**

```bash
node index.js
```

> La API estará disponible en: `http://localhost:3000`

---

## 🛠️ Endpoints disponibles

| Método | Endpoint              | Descripción                             |
|--------|------------------------|-----------------------------------------|
| GET    | `/api/libros`          | Obtener todos los libros                |
| GET    | `/api/libros/:id`      | Obtener un libro por su ID              |
| POST   | `/api/libros`          | Agregar un nuevo libro                  |
| PUT    | `/api/libros/:id`      | Actualizar un libro existente           |
| DELETE | `/api/libros/:id`      | Eliminar un libro por su ID             |

---

## 📫 Cómo probar con Postman

1. Abre Postman y crea una nueva petición.
2. Usa la URL base: `http://localhost:3000/api/libros`
3. Para **GET** puedes hacer peticiones directamente a:
   - `/api/libros` — lista completa
   - `/api/libros/1` — libro con ID 1

4. Para **POST** o **PUT**, selecciona:
   - Método: `POST` o `PUT`
   - Sección: `Body > raw > JSON`
   - Contenido ejemplo:

```json
{
  "titulo": "El Principito"
}
```

---

## 📂 Estructura del proyecto

```
MI-API-NODE/
├── index.js
├── package.json
└── README.md
```

---

## ✅ Recomendaciones

- Puedes usar `nodemon` para reiniciar automáticamente el servidor durante el desarrollo:

```bash
npm install --save-dev nodemon
```

Agrega esto en `package.json`:

```json
"scripts": {
  "start": "node index.js",
  "dev": "nodemon index.js"
}
```

Y ejecuta con:

```bash
npm run dev
```