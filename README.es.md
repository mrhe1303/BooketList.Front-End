#  Biblioteca Virtual - Front-End

Una aplicación web interactiva que permite a los usuarios explorar, gestionar y llevar un registro de libros que deben leerse antes de morir, organizados por género.

##  Descripción del Proyecto

Esta aplicación front-end proporciona una interfaz intuitiva y visualmente atractiva para que los usuarios puedan explorar colecciones de libros organizadas por género (Clásicos, Ficción, No Ficción, Ciencia Ficción, LatinoAmericanos e Historia), gestionar su biblioteca personal y mantener un registro de sus lecturas con calificaciones y reseñas.

##  Características Principales

### Home Page
- Biblioteca virtual estilizada con 6 estantes organizados por género
- Display con scroll horizontal mostrando los primeros 10 libros de cada categoría
- Botones de "Explorar la lista completa" para cada género
- Diseño responsivo y atractivo con Bootstrap

###  Navegación y Búsqueda
- Barra de navegación intuitiva con:
  - Enlace al home
  - Menú desplegable de géneros
  - Sección de autores
  - Buscador de libros y autores
  - Estado de sesión condicional (Iniciar Sesión / Perfil de usuario)
- Menú de usuario con opciones: Mi Cuenta, Mi Biblioteca, Cerrar Sesión

###  Página de Detalle de Libro
- Visualización completa de información del libro (portada, título, autor, fecha de publicación, descripción)
- Sistema de estado de lectura:
  - "Quiero leer"
  - "Leyendo"
  - "Leído"
- Sistema de calificación de 1 a 5 estrellas
- Modal para agregar reseñas (máximo 1000 caracteres)
- Enlace directo para comprar el libro en Amazon en diferentes formatos

###  Gestión de Usuarios
- Formulario de registro de nuevos usuarios
- Sistema de autenticación con JWT
- Biblioteca personal por usuario
- Persistencia de datos y preferencias

###  Funcionalidad de Búsqueda y Adición
- Buscador con resultados en tiempo real
- Opción para agregar libros nuevos si no existen en la base de datos
- Página de resultados con mensajes informativos

##  Tecnologías Utilizadas

- **React.js** - Framework principal para la construcción de la interfaz
- **React Router** - Navegación entre páginas y rutas
- **Bootstrap** - Framework CSS para diseño responsivo y componentes
- **FontAwesome** - Iconos y elementos visuales
- **Faker.js** - Verificación y generación de datos de prueba

##  Requisitos Previos

Antes de comenzar, asegúrate de tener instalado:

- [Node.js](https://nodejs.org/) (versión 14 o superior)
- [npm](https://www.npmjs.com/) o [yarn](https://yarnpkg.com/)
- Conexión con el back-end (Flask API)

## Instalación

1. Clona el repositorio:
```bash
git clone [URL-del-repositorio]
cd [nombre-del-proyecto-frontend]
```

2. Instala las dependencias:
```bash
npm install
```

3. Configura las variables de entorno creando un archivo `.env` en la raíz del proyecto:
```env
REACT_APP_API_URL=http://localhost:5000/api
REACT_APP_ENV=development
```

4. Inicia el servidor de desarrollo:
```bash
npm start
```

La aplicación estará disponible en `http://localhost:3000`

##  Dependencias Principales

```json
{
  "react": "^18.x.x",
  "react-dom": "^18.x.x",
  "react-router-dom": "^6.x.x",
  "bootstrap": "^5.x.x",
  "@fortawesome/fontawesome-free": "^6.x.x",
  "@fortawesome/react-fontawesome": "^0.x.x",
  "faker-js": "^8.x.x"
}
```

NOTA: SUJETO A CAMBIOS A MEDIDA QUE AVANZA EL PROYECTO**!!
