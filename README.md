
![Logo](./client/src/assets/images/logo-orange.svg)


# Orange Coverage Map

Este servicio integral de Orange permite a los usuarios contribuir activamente a la mejora y expansión de la cobertura de internet. 

Los usuarios pueden compartir sus experiencias de conectividad mediante inputs directos en la aplicación de Orange, proporcionando información valiosa sobre la calidad de la señal de red en ubicaciones específicas.


## Herramientas tecnológicas

Una herramienta tecnológica o tech stack es un conjunto de herramientas y tecnologías que trabajan de manera unida para construir un producto y solucionar un problema o necesidad. Estas herramientas y tecnologías pueden ser lenguajes de programación, motores de bases de datos, servidores web y frameworks.

En este proyecto podemos identificar los siguientes tech stacks:

**Frontend:**

- **React Stack**: React es una biblioteca de JavaScript para construir interfaces de usuario. Las dependencias que comienzan con `@types/react`, `@types/react-dom`, `@types/react-router`, `@types/react-router-dom`, `react`, `react-dom`, `react-router`, `react-router-dom` y `react-hook-form` son todas parte de este stack.

- **React-CSV Stack**: Esta biblioteca permite la generación de archivos CSV en una aplicación React. Las dependencias que comienzan con `react-csv`, `react-csv-downloader` son todas parte de este stack.


**Backend:**

- **Express Stack**: Express es un marco de aplicación web para Node.js, diseñado para construir aplicaciones web y API. La dependencia `express` es parte de este stack.

- **Sequelize Stack**: Sequelize es un ORM (Object-Relational Mapping) para Node.js y soporta los dialectos PostgreSQL, MySQL, SQLite y MSSQL. La dependencia `sequelize` es parte de este stack.

- **Bcrypt Stack**: Bcrypt es una biblioteca para hashing passwords. La dependencia `bcrypt` es parte de este stack.

- **Jsonwebtoken Stack**: jsonwebtoken es una biblioteca para crear y verificar tokens JWT (JSON Web Tokens). La dependencia `jsonwebtoken` es parte de este stack.

- **UUID Stack**: UUID es una biblioteca para generar identificadores únicos. La dependencia `uuid` es parte de este stack.

- **Zod Stack**: Zod es una biblioteca para la validación de datos. La dependencia `zod` es parte de este stack.


## Instalación

Clona este repositorio desde GitHub en tu máquina local: 

```github
  https://github.com/angu-m9/orange-coverage-map.git
```


## Dependencias
Se puede instalar todas las dependecias con:
```
npm install
```
Para las depencendias de Front desde el directorio donde se encuentra el archivo package.json del Frontend.

Para las depencendias de Back desde el directorio donde se encuentra el archivo package.json del Backend.


## Dependencias del Frontend

En el caso de necesitar hacer las installaciones de forma individual se puede. Desde el directorio donde se encuentra el archivo package.json del FRONT, instala las siguientes dependencias en la terminal.

dependencies:
```bash
npm install @popperjs/core@2.11.8
npm install @react-google-maps/api@2.19.2
npm install @types/detect-browser@4.0.0
npm install @types/dotenv@8.2.0
npm install @types/react-router@5.1.20
npm install @types/react-router-dom@5.3.3
npm install boosted@5.3.2
npm install detect-browser@5.3.0
npm install dotenv@16.3.1
npm install jsdom@22.1.0
npm install json-server@0.17.4
npm install leaflet@1.9.4
npm install leaflet.heat@0.2.0
npm install react@18.2.0
npm install react-csv@2.2.2
npm install react-csv-downloader@3.0.0
npm install react-device-detect@2.2.3
npm install react-dom@18.2.0
npm install react-hook-form@7.47.0
npm install react-leaflet@4.2.1
npm install react-modal@3.16.1
npm install react-router@6.20.0
npm install react-router-dom@6.18.0
```
devDependencies:
```bash
npm install @testing-library/jest-dom@6.1.4
npm install @testing-library/react@14.1.0
npm install @types/jest@29.5.8
npm install @types/react@18.2.15
npm install @types/react-csv@1.1.8
npm install @types/react-dom@18.2.7
npm install @types/react-modal@3.16.3
npm install @typescript-eslint/eslint-plugin@6.0.0
npm install @typescript-eslint/parser@6.0.0
npm install @vitejs/plugin-react-swc@3.3.2
npm install @vitest/coverage-v8@0.34.6
npm install eslint@8.45.0
npm install eslint-plugin-react-hooks@4.6.0
npm install eslint-plugin-react-refresh@0.4.3
npm install jest@29.7.0
npm install sass@1.69.5
npm install ts-jest@29.1.1
npm install typescript@5.0.2
npm install vite@4.4.5
npm install vitest@0.34.6
```
## Dependencias del Backend

En el caso de necesitar hacer las installaciones de forma individual se puede.  Desde el directorio donde se encuentra el archivo package.json, instala las siguientes dependencias en la terminal.

dependencies:
```bash
npm install @types/jest@29.5.5
npm install bcrypt@5.1.1
npm install cors@2.8.5
npm install dotenv@16.3.1
npm install express@4.18.2
npm install jest@29.7.0
npm install jsonwebtoken@9.0.2
npm install multer@*
npm install mysql2@3.6.2
npm install sequelize@6.33.0
npm install ts-jest@29.1.1
npm install ts-node@10.9.1
npm install ts-node-dev@2.0.0
npm install uuid@8.3.2
```
devDependencies:
```bash
npm install @types/bcrypt@5.0.1
npm install @types/cors@2.8.15
npm install @types/dotenv@8.2.0
npm install @types/express@4.17.20
npm install @types/jsonwebtoken@9.0.4
npm install @types/multer@1.4.9
npm install @types/node@20.8.7
npm install @types/sequelize@4.28.17
npm install @types/supertest@2.0.14
npm install @types/uuid@9.0.6
npm install nodemon@3.0.1
npm install supertest@6.3.3
npm install typescript@5.2.2
```  


## Variables de entorno

Para ejecutar este proyecto, se necesitan añadir las siguientes variables de entorno. Para conseguirlo necesitarías una cuenta de Google, y pedir tu API_KEY propia. 

`API_KEY`

Antes de correr la aplicación es necesario crear el esquema de una base de datos, utilizando el archivo: 

`schema.sql`

Para proteger la información sensible hay que crear variables globales del entorno y guardarlas en el archivo: 

`.env`

## Developers

- Virginia Santana - Product Owner - [@VirginiaSantana](https://github.com/VirginiaSantana)
- Sophia Wong - Scrum Master - [@sophiawm](https://github.com/sophiawm)
- Bryan Mariano - Developer - [@BRYAN-MARIANO](https://github.com/BRYAN-MARIANO)
- Fernando Angulo- Developer - [@angu-m9](https://github.com/angu-m9)
- Jes Hardy - Developer - [@JesHardyM](https://github.com/JesHardyM)
- Adriana Martínez- Developer - [@DigitalChampeta](https://github.com/DigitalChampeta)
- Ainhoa Aguado - Developer - [@AinhoaAguado](https://github.com/AinhoaAguado)


## Métodos Ágiles
```
SCRUM + KANBAN 
```

 ![Jira](https://img.shields.io/badge/jira-%230A0FFF.svg?style=for-the-badge&logo=jira&logoColor=white) ![Notion](https://img.shields.io/badge/Notion-%23000000.svg?style=for-the-badge&logo=notion&logoColor=white) 


## Caracteristicas

- Responsive Design


## Roadmap

- Crear una librería para poder integrar esta solución en cualquier frontal. Es decir, de manera transparenta o visible para el usuario se podría recolectar la información de su calidad de red y almacenarse en BB.DD

- Incentivar al usuario a recolectar datos. Mediante gamificación se permitiría premiar al usuario que envia datos por distintas localizaciones pudiendo optar a premios Orange (Bonos de datos, SVAs, etc)


## Referencia de Estilo

Orange Boosted es una biblioteca de componentes accesible y ergonómica basada en Bootstrap y con la marca Orange.

https://boosted.orange.com/


## Badges
![Canva](https://img.shields.io/badge/Canva-%2300C4CC.svg?style=for-the-badge&logo=Canva&logoColor=white) ![Figma](https://img.shields.io/badge/figma-%23F24E1E.svg?style=for-the-badge&logo=figma&logoColor=white)
![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white) ![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)![SASS](https://img.shields.io/badge/SASS-hotpink.svg?style=for-the-badge&logo=SASS&logoColor=white) ![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white) ![Bootstrap](https://img.shields.io/badge/bootstrap-%238511FA.svg?style=for-the-badge&logo=bootstrap&logoColor=white) ![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB) ![NPM](https://img.shields.io/badge/NPM-%23CB3837.svg?style=for-the-badge&logo=npm&logoColor=white) ![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white) ![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB) ![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white) ![MySQL](https://img.shields.io/badge/mysql-%2300000f.svg?style=for-the-badge&logo=mysql&logoColor=white) ![Postman](https://img.shields.io/badge/Postman-FF6C37?style=for-the-badge&logo=postman&logoColor=white) ![GIT](https://img.shields.io/badge/Git-fc6d26?style=for-the-badge&logo=git&logoColor=white) ![GITHUB](https://img.shields.io/badge/GITHUB-black?logo=github&logoColor=white)

## Agradecemientos 

Agradecemos la amable orientación de José Luis Montesinos.

