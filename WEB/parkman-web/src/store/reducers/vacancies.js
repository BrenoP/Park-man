const initialState = {
   vacancies: []
}

export default function vacancies(state = initialState, action) {
  console.log(state.vacancies)
   switch (action.type) {
     case 'GET_VACANCIES':
       return {
         vacancies: [...state.vacancies, {
            vacancies: action.vacancies
         }]
      }
     default:
       return state;
   }
}