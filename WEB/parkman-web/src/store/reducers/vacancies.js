const initialState = {
   vacancies: {},
   sectors: {}
}

export default function vacancies(state = initialState, action) {
  console.log(state.vacancies)
   switch (action.type) {
     case 'GET_VACANCIES':
      return {
         vacancies: {...state.vacancies, onlyVacancies: action.vacancies.vacancies },
         sectors: {...state.sectors, onlySectors: action.vacancies.sectors }
      }
     default:
       return state;
   }
}