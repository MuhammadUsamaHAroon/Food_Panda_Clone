import {ADD_TO_CART} from './constant';
export const cartData = (data = [], action) => {
  if (action.type === ADD_TO_CART) {
    console.log('Reducers--->', action.data);
    return action.data;
  } else {
    return 'No Action Matched!';
  }
};
