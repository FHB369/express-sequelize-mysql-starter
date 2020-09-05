# Exam Management System (Backend)

---

**For running in Development Mode**

**Prerequisite**

1. Install [node](https://nodejs.org/de/download/)
2. Install [yarn](https://classic.yarnpkg.com/en/docs/install/)
3. Install [XAMPP](https://www.apachefriends.org/download.html)

**How to run**

1. Go to the project root directory
2. Run `yarn install` on terminal/CMD
3. Then run `yarn global add sequelize-cli nodemon` on terminal/CMD
4. Create a file named `.env` in the root directory & copy the texts from `.env.example`
5. Open phpMyAdmin from XAMPP and create a DB named **ems_development**
6. Then run migrations. The commands for migration & creating model are listed below in **DB Commands** section
7. Go back to root directory and run `yarn start`
8. Now your backend will be running on [localhost:8000](http://localhost:8000)

**DB Commands**

1. For creating a model, run `sequelize model:create --name TableName --attributes columnName:string, ...`
2. For migration, run `sequelize db:migrate`

All other **sequelize** commands are available here [Sequelize Documentation](https://sequelize.org/master/manual/model-basics.html)
