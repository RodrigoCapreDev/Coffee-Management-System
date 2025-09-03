# Coffee-Management-System

Repositorio para una app que gestiona un catálogo de cafés de especialidad.

## Características

- CRUD completo de cafés
- Frontend en React + Vite
- Backend en Django + Django REST Framework
- Base de datos PostgreSQL (en Docker) o SQLite (local)
- Proxy reverso con Nginx (en Docker)
- Contenedores listos para desarrollo local

## Levantar la aplicación con Docker

1. Clona el repositorio:
   ```bash
   git clone https://github.com/RodrigoCapreDev/Coffee-Management-System.git
   cd Coffee-Management-System
   ```

2. Ejecuta en la raíz del proyecto:
   ```bash
   docker-compose up --build
   ```

3. Accede a la app en [http://localhost](http://localhost)

## Levantar la aplicación localmente (sin Docker)

1. Instala dependencias del backend:
   ```bash
   cd backend
   pip install -r requirements.txt
   python manage.py migrate
   python manage.py runserver
   ```

2. Instala dependencias del frontend:
   ```bash
   cd frontend/coffees-front
   npm install
   npm run dev
   ```

3. Accede a:
   - Backend: [http://localhost:8000/api/coffees/](http://localhost:8000/api/coffees/)
   - Frontend: [http://localhost:5173](http://localhost:5173)

4. **IMPORTANTE:**
    Si levantas el frontend sin Docker, debes cambiar la línea de la URL en `frontend/coffees-front/src/api/coffeeApi.js`:
    ```js
    export const API_URL = '/api/coffees/';
    ```
    por:
    ```js
    export const API_URL = 'http://localhost:8000/api/coffees/';
    ```
    Así el frontend se conecta correctamente al backend local. Si usas Docker y Nginx, deja la ruta relativa (`/api/coffees/`).

## Variables de entorno

Copia `.env.example` a `.env` y completa los datos necesarios para la base de datos y Django.

## Estructura del proyecto

```
backend/         # Django + DRF
frontend/        # React + Vite
docker-compose.yml
nginx.conf
```

## Autor

RodrigoCapreDev

---