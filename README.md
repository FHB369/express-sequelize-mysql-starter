# Express-Sequelize-MySQL starter project

A basic starter template for starting your next ExpressJS project with MySQL & Sequelize. You can start working on your app from very scratch with this template.

---

**Prerequisite**

1. Install [node](https://nodejs.org/de/download/)
2. Install [yarn](https://classic.yarnpkg.com/en/docs/install/)
3. Install [XAMPP](https://www.apachefriends.org/download.html)

**How to run**

1. Go to the project root directory
2. Run `yarn install` on terminal/CMD
3. Then run `yarn global add sequelize-cli nodemon` on terminal/CMD
4. Create a file named `.env` in the root directory & copy the texts from `.env.example`
5. Create a MySql DB & change the value of _database_ in `/configs/dbConfig.json`
6. Then run migrations. The commands for migration & creating model are listed below in **DB Commands** section
7. Go back to root directory and run `yarn start`
8. Now your backend will be running on [localhost:8000](http://localhost:8000)

**DB Commands**

1. For creating a model, run `sequelize model:create --name TableName --attributes columnName:string, ...`
2. For migration, run `sequelize db:migrate`

All other **sequelize** commands are available here [Sequelize Documentation](https://sequelize.org/master/manual/model-basics.html)

**Running on Docker**

The _Dockerfile_ is also included. You need to just build the image using

`docker build -t express-sequelize-mysql-starter`

and run using

`docker run express-sequelize-mysql-starter`.
