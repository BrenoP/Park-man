const initialState = {
   vacancies: {},
   sectors: {},
   showedVacancies: []
}

export default function vacanciesSectors(state = initialState, action) {
   console.log(state)
   switch (action.type) {
     case 'GET_VACANCIES':
         return {
            vacancies: {...state.vacancies, onlyVacancies: action.vacancies.vacancies },
            sectors: {...state.sectors, onlySectors: action.vacancies.sectors },
            showedVacancies: []
         }

      case 'CHANGE_VACANCIES':
         return {
               ...state, 
               showedVacancies: [action.newVacancies]
         }

      case 'DELETE_SHOWED_VACANCIES': 
         return {
            vacancies: {...state.vacancies},
            sectors: {...state.sectors},
            showedVacancies: [
            ...state.slice(0, action.index)
            ]
         }
      
      default: return state;
   }
}