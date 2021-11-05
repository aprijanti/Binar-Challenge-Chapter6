const { Router } = require('express')

const controller = require ('../controllers/user')

const routers = Router()

routers.get('/register', controller.viewRegister)
routers.get('/login', controller.viewLogin)
routers.get("/dashboard", controller.viewDashboard);
routers.get("/dashboard/dorms", controller.viewDorms);

module.exports = routers