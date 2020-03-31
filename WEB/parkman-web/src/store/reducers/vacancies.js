const initialState = {
   vacancies: []
}

export default function sectors(state = initialState, action) {
  console.log(state.vacancies)
   switch (action.type) {
     case 'GET_VACANCIES':
      debugger
       return {
         vacancies: [...state.vacancies, {
            vacancies: action.vacancies
         }]
      }
     default:
       return state;
   }
}