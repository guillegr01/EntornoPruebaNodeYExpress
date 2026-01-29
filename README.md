# EntornoPruebaNodeYExpress
Repositorio donde se subira un proyecto de prueba en el que explicamos como crear un entorno en vs code para trabajar con typescript, Node.js y express . Este entorno será válido para crear un backend.

# Pasos
## Crear repositorio
- Lo primero de todo es crear un repositorio en el que guardar nuestro proyecto, en el caso de que queramos que nuestro proyecto vaya a ser subido a GitHub o similares.
- Para crear un repositorio hay que seguir los pasos explicados en el repositorio de sintaxisBasicaTS.

## Entorno VS Code
- Una vez creado el repo y clonado en VS Code nos creamos 2 carpetas dentro del proyecto: backend/server y frontend/client.
- Para cada una nos abriremos un terminal en vs code y nos situaremos en dichas carpetas: "cd .\backend" y en la otra "cd .\frontend" .
- En este documento nos centraremos en el backend.

## Terminal de BackEnd
- Seleccionamos la terminal del backend y ponemos el comando para que instalar NodeJs en nuestro proyecto: "npm init -y".
- Con este comando se nos crea en la carpeta backend un archivo llamado "package.json".
- Luego instalamos una dependencia propia para typescript y poder ejecutar nuestro codigo: "npm install ts-node-dev -D".
- Para probar que lo hemos instalado bien podriamos ejecutar una primera vez el archivo index.ts por ejemplo asi: "npx ts-node-dev --respawn index.ts".
- Esto es un poco largo asique para que el ejecutar el codigo sea más simple haremos lo siguiente:
    - En el archivo package.json, en el apartado de scripts, en vez de "test": "patatinpatatan", pondremos "dev": "ts-node-dev --respawn src/index.ts".
    - ACLARACION: nuestro archivo de codigo lo meteremos en una carpeta llamada src situada dentro de la carpeta de backend.
    - ACLARACIÖN: SI nuestro archivo ejecutable se llamase diferente de index, pues entonces pondríamos el nombre del archivo en el script.
    - Luego en el apartado "main" del archivo package.json pondremos "main": "src/index.ts" o la ruta donde tengamos nuestro archivo ejecutable.
- Ahora instalamos el paquete de express desde la consola backend con el comando: "npm install express".
- Ahora para ejecutar nuestro código, desde la terminal backend pondríamos el comando: "npm run dev".

## Crear API Básica
- Ya tendríamos configurado el entorno y nos pondriamos a empezar a crear la API.
- Antes de nada, si al final trabajamos con express hay que instalar una dependencia adicional:
    - En la terminal backend ponemos el siguinete comando: "npm install @types/express -D".
- Ahora si creariamos nuestra API básica:
  

