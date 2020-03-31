import api from '../../services/api';

export function getVacancies() {
   debugger
   return dispatch => {
      return api.get('/vacancy').then(res => {
         debugger
         dispatch({ 
            type: 'GET_VACANCIES',
            vacancies: res
         })
      })
   }
}

export function vacancies(vacancies) {
   return {
      type: 'GET_VACANCIES',
      vacancies
   }
}