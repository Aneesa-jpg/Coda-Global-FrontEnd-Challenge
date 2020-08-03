export default (state, action) => {
    switch(action.type) {
      case 'GET_RECIPES':
        return{
          ...state,
         recipes : action.payload,
          loading : false
        }
      
      case 'TRANSACTION_ERROR':
          return {
            ...state,
            error:action.payload
            
          }
      default:
        return state;
    }
  }