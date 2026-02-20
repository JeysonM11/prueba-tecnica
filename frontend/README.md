# Frontend - Gestión de Usuarios

Interfaz de usuario construida con React y Material-UI para gestionar usuarios.

## Tecnologías

- React 18
- Material-UI (MUI)
- Axios
- React Hooks (useState, useEffect)

## Estructura del Proyecto

```
frontend/
├── public/
│   └── index.html              # HTML base
├── src/
│   ├── components/
│   │   ├── UserForm.js         # Formulario de registro
│   │   └── UsersTable.js       # Tabla de usuarios
│   ├── App.js                  # Componente principal
│   └── index.js                # Punto de entrada
└── package.json
```

## Instalación

```bash
npm install
```

## Ejecutar la Aplicación

```bash
npm start
```

La aplicación se abrirá automáticamente en: **http://localhost:3000**

## Componentes Principales

### UserForm
Formulario para registrar nuevos usuarios.

**Características:**
- Inputs: Nombre, Documento, Cargo
- Validación de campos obligatorios
- Validación de documento único (desde el backend)
- Campo documento solo acepta números
- Loading state durante el guardado
- Limpia el formulario después de guardar exitosamente

### UsersTable
Tabla que muestra todos los usuarios registrados.

**Características:**
- Muestra: Nombre, Documento, Cargo, Acciones
- Botón de eliminar por cada usuario
- Confirmación antes de eliminar
- Loading state individual por botón de eliminación
- Se actualiza automáticamente después de cada acción

### App
Componente principal que integra todo.

**Características:**
- Manejo centralizado de estados
- Sistema de mensajes (Snackbar + Alert)
- Loading global al cargar usuarios
- Integración con el backend vía Axios

## Funcionalidades

### ✅ Registrar Usuarios
- Formulario con validación
- Mensajes de error específicos
- Feedback visual durante el guardado

### ✅ Listar Usuarios
- Tabla responsiva con Material-UI
- Indicador de carga
- Mensaje cuando no hay usuarios

### ✅ Eliminar Usuarios
- Confirmación antes de eliminar
- Loading en el botón específico
- Actualización automática de la lista

## Estados Manejados

- **Loading States:**
  - Al consultar usuarios
  - Al guardar usuario
  - Al eliminar usuario (por botón individual)

- **Mensajes:**
  - Éxito al crear usuario
  - Error al crear usuario
  - Éxito al eliminar usuario
  - Error al eliminar usuario
  - Error al cargar usuarios

## Dependencias Principales

```json
{
  "react": "^18.2.0",
  "react-dom": "^18.2.0",
  "react-scripts": "^5.0.1",
  "@mui/material": "^7.3.8",
  "@emotion/react": "^11.14.0",
  "@emotion/styled": "^11.14.1",
  "axios": "^1.13.5"
}
```

## Scripts Disponibles

- `npm start`: Inicia la app en modo desarrollo
- `npm run build`: Crea el build de producción
- `npm test`: Ejecuta los tests
- `npm run eject`: Expone la configuración de Webpack

## Configuración del Backend

La aplicación espera que el backend esté corriendo en:
```
http://localhost:3001
```

Para cambiar esto, edita las URLs en los componentes o crea una variable de entorno:

```javascript
const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:3001';
```

## Validaciones Frontend

1. **Campos obligatorios:** Los 3 campos deben estar llenos
2. **Documento numérico:** Solo acepta dígitos (0-9)
3. **Documento único:** Validado por el backend

## Notas

- El backend debe estar corriendo antes de usar la aplicación
- Los mensajes desaparecen automáticamente después de 3 segundos
- El documento se guarda como string para preservar ceros iniciales
