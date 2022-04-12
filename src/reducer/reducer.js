export const initialState = {
  likedBasket: [],
};

const reducer = (state,action) => {
  switch(action.type) {
    case 'ADD_TO_LIKEDBASKET':
      let filteredBasket = state.likedBasket?.some((item) => {
        if(item.id === action.item.id) {
          return true
        } else {
          return false
        }
      })

      if(filteredBasket === false) {
        return {
          ...state,
          likedBasket: [...state.likedBasket, action.item],        
        }
      } else {
        console.log('Already liked')
      }   return {
        ...state,
      }

    
    case 'REMOVE_FROM_BASKET':
      const index = state.likedBasket?.findIndex(
        (basketItem) => basketItem.id === action.id
      )

      let newBasket = [...state.likedBasket];

      if(index >= 0) {
        newBasket.splice(index, 1);
      } else {
        console.warn(`Cant remove product (id: ${action.id}) as its not in basket!`)
      }

      return {
        ...state,
        likedBasket: newBasket
      }

      default:
        return state;
  }
};

export default reducer;