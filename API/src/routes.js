const { Router } = require('express');
const VacancyController = require('./controllers/vacancyController')
const routes = Router();

routes.get('/vacancy', VacancyController.index);
routes.post('/vacancy', VacancyController.store);
routes.put('/vacancy', VacancyController.update)

module.exports = routes;