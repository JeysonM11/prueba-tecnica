# Backend - API de Gestión de Usuarios

API REST construida con Node.js y Express para gestionar usuarios.

## Tecnologías

- Node.js
- Express
- CORS

## Estructura del Proyecto

```
backend/
├── controllers/
│   └── users.controller.js    # Lógica de negocio
├── routes/
│   └── users.routes.js         # Definición de rutas
├── data/
│   └── users.js                # Almacenamiento en memoria
├── server.js                   # Punto de entrada
└── package.json
```

## Instalación

```bash
npm install
```

## Ejecutar el Servidor

```bash
npm start
```

El servidor se ejecutará en: **http://localhost:3001**

## API Endpoints

### GET /api/users
Obtiene todos los usuarios registrados.

**Respuesta (200):**
```json
[
  {
    "nombre": "Juan Pérez",
    "documento": "12345678",
    "cargo": "Desarrollador"
  }
]
```

### POST /api/users
Crea un nuevo usuario.

**Request Body:**
```json
{
  "nombre": "Juan Pérez",
  "documento": "12345678",
  "cargo": "Desarrollador"
}
```

**Respuesta exitosa (201):**
```json
{
  "nombre": "Juan Pérez",
  "documento": "12345678",
  "cargo": "Desarrollador"
}
```

**Errores (400):**
```json
{
  "error": "Todos los campos obligatorios"
}
```
```json
{
  "error": "El documento ya existe"
}
```

### DELETE /api/users/:documento
Elimina un usuario por su documento.

**Parámetros:**
- `documento` (string): Documento del usuario a eliminar

**Respuesta exitosa (200):**
```json
{
  "message": "deleted"
}
```

**Error (404):**
```json
{
  "message": "Usuario no encontrado"
}
```

## Validaciones

- Todos los campos son obligatorios (nombre, documento, cargo)
- El documento debe ser único
- El documento se maneja como string para preservar ceros iniciales

## Persistencia

Los datos se guardan **en memoria** (array). Los datos se pierden al reiniciar el servidor.

## Dependencias

```json
{
  "express": "^4.18.2",
  "cors": "^2.8.5"
}
```

## CORS

CORS está habilitado para permitir peticiones desde cualquier origen. En producción, deberías restringir los orígenes permitidos:

```javascript
app.use(cors({
  origin: 'https://tu-dominio.com'
}));
```

## Scripts Disponibles

- `npm start`: Inicia el servidor en modo producción
- `npm run dev`: (Opcional) Inicia en modo desarrollo con nodemon

## Notas

- El puerto 3001 está hardcodeado. Considera usar variables de entorno para configuración.
- No hay autenticación implementada. Agregar para producción.
- No hay rate limiting. Considerar agregar para prevenir abuso.
