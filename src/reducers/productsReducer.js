import PRODUCT_ACTIONS from '../actions/product';
import PRODUCTS from '../products';

export default (state = [], action) => {
  switch(action.type) {
    case PRODUCT_ACTIONS.GET_PRODUCTS:
      state = PRODUCTS;

      return state;
      
    default:
      return state;
  }
}