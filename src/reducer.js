import { ADVANCE_HR, ADVANCE_MIN } from './actions';

const initialState = {
    hour: 12,
    minute: 0
  };

  
  function reducer(state = initialState, action) {
    switch (action.type) {
        case ADVANCE_HR:
             return {
                ...state,
                hour: (state.hour + 1) % 24
            };
        case ADVANCE_MIN: 
            return {
                ...state,
                minute: (state.minute + 1 ) % 60
            }
    
 
      default:
        return state;
    }
  }

  export default reducer

