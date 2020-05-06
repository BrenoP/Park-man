import api from '../../services/api';

export function getVacancies() {
   return dispatch => {
      return api.get('/vacancy').then(res => {
         dispatch(vacancies(res.data))
      })
   }
}

export function vacancies(vacancies) {
   return {
      type: 'GET_VACANCIES',
      vacancies
   }
}