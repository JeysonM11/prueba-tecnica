# Gestión de Usuarios - Prueba Técnica

Aplicación full-stack para la gestión de usuarios (registrar, listar y eliminar).

## Tecnologías Utilizadas

### Frontend
- React 18
- Material-UI (MUI)
- Axios
- React Hooks (useState, useEffect)

### Backend
- Node.js
- Express
- CORS

## Estructura del Proyecto

```
prueba-tecnica/
├── backend/              # API REST con Express
│   ├── controllers/
│   ├── data/
│   ├── routes/
│   ├── server.js
│   ├── package.json
│   └── README.md        # 📖 Documentación del backend
│
├── frontend/            # Aplicación React
│   ├── public/
│   ├── src/
│   ├── package.json
│   └── README.md        # 📖 Documentación del frontend
│
├── .gitignore
└── README.md            # Este archivo
```

## 📚 Documentación Detallada

- **Backend:** Ver [backend/README.md](backend/README.md) para instrucciones específicas del servidor
- **Frontend:** Ver [frontend/README.md](frontend/README.md) para instrucciones específicas de la aplicación React

## Inicio Rápido

### 1. Clonar el repositorio

```bash
git clone <url-del-repositorio>
cd prueba-tecnica
```

### 2. Instalar y ejecutar el Backend

```bash
cd backend
npm install
npm start
```

El servidor estará en: `http://localhost:3001`

### 3. Instalar y ejecutar el Frontend

En una nueva terminal:

```bash
cd frontend
npm install
npm start
```

La aplicación se abrirá en: `http://localhost:3000`

## Funcionalidades Implementadas

✅ **Registrar Usuarios**
- Formulario con validación de campos obligatorios
- Validación de documento único
- Mensajes de éxito/error

✅ **Listar Usuarios**
- Tabla responsiva con Material-UI
- Indicadores de carga
- Actualización automática

✅ **Eliminar Usuarios**
- Confirmación antes de eliminar
- Feedback visual
- Actualización automática de la lista

## Validaciones Implementadas

### Frontend
- Todos los campos son obligatorios
- El campo documento solo acepta números
- Mensajes de error específicos del backend

### Backend
- Validación de campos requeridos (nombre, documento, cargo)
- Validación de documento único
- Manejo de errores 404
- Documento se maneja como string (preserva ceros iniciales)

## API Endpoints

| Método | Endpoint | Descripción |
|--------|----------|-------------|
| GET | /api/users | Obtiene todos los usuarios |
| POST | /api/users | Crea un nuevo usuario |
| DELETE | /api/users/:documento | Elimina un usuario por documento |

Ver [backend/README.md](backend/README.md) para detalles completos de la API.

## Manejo de Estados

- **Loading:** Indicadores visuales en todas las operaciones asíncronas
- **Mensajes:** Snackbar con Auto-hide en 3 segundos
- **Validaciones:** Feedback inmediato al usuario

## Persistencia

Los datos se almacenan **en memoria** (array). Los datos se perderán al reiniciar el servidor.

## Autor

Jeyso


