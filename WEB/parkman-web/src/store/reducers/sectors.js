const initialState = {
   sectors: []
}

export default function sectors(state = initialState, action) {
  console.log(state.items)
   switch (action.type) {
     case 'CHANGE_SECTOR':
       return {
         items: [...state.items, {
          id: Math.random(),
          text: action.text,
        }]
      }
     default:
       return state;
   }
}