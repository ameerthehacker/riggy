import CART_ACTIONS from '../actions/cart';

export default (state = {}, action) => {
  let productId;

  switch(action.type) {
    case CART_ACTIONS.ADD_TO_CART:
      productId = action.payload;

      if(state.hasOwnProperty(productId)) {
        state = { ...state };
        state[productId] += 1;
      }
      else {
        state = { ...state };
        state[productId] = 1;
      }

      return state;

    case CART_ACTIONS.REMOVE_FROM_CART:
      productId = action.payload;

      if(state.hasOwnProperty(productId)) {
        state = { ...state };

        if(state[productId] > 0) {
          state[productId] -= 1;
        }
        
        if(state[productId] == 0) {
          delete state[productId];
        }
      }

      return state;
    default:
      return state;
  }
}