# AppStore7

Esta aplicacion intenta imitar la PlayStore de google. Lo estoy haciendo debido que hay un challenge y me intereso.
En este repositorio se encuentra el backend y el frontend de la tienda de aplicaciones que desarrolle. El backend se encuentra desarrollado en NodeJS, mientras que el frontend con la librearia de ReactJS. Puse el frontend y backend en el mismo repositorio, con el objetivo de simplificar mi trabajo a la hora de subirlo a Heroku.

## Backend

Se encuentra ubicado en la raiz del repositorio, y todos los archivos estan en la carpeta ```server```

### Instalación

Para instalar el backend, debe ejecutar el comando npm install en la raiz de la carpeta del repositorio.

```bash
npm install
npm start
```

### Requirements

El unico requerimiento es tener una base de datos de MongoDB. En mi caso utilice MongoDB Atlas.

### Variables locales.

El backend esta compuesto por 4 variables locales:

-  ORIGIN: Se almacenara el URL que puede hacer peticiones a la api.
-  DB_CNN: Se almacenara el URI de la pase de datos de MongoDB.
-  JWT_PRIVATE_KEY: Se almacenara la clave secreta que codificara y decodificara el token de la autenticacion.

### API Docs

#### Auth

##### `POST /api/auth/register'

Parametros dentro del body: 

-  `name`: String 
-  `email`: String 
-  `password`: String 
-  `isDev`: Booleano

##### `POST /api/auth` - Registro

---
