const Vacancy = require('../models/Vacancy');

module.exports = {
   async store(req, res) {
      const { vacancy, idOccupant, sector } = req.body;
      
      await Vacancy.create({
         vacancy,
         idOccupant,
         sector
      });
   
      return res.json(req.body)
   },

   async index(req, res) {
      const vacancies = await Vacancy.find();

      return res.json(vacancies)
   },

   async update(req, res) {
      const { _id, idOccupant } = req.body;

      const responseVacancy = await Vacancy.findByIdAndUpdate(_id, 
         { idOccupant }, 
         { useFindAndModify: false, new: true }
      ); 
      return res.json(responseVacancy)
   }

}