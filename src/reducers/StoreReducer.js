import { ADD_ITEM } from '../actions/types';

const initialState = {
  cart: {
    items: [
      {
        name: 'Whole Wheat Bread',
        quantity: 3,
        id: 'abcdef',
        price: 250,
        image: 'https://cdn.sallysbakingaddiction.com/wp-content/uploads/2019/11/homemade-sandwich-bread-600x900.jpg'
      },
      {
        name: 'Better Whole Wheat Bread',
        quantity: 1,
        id: 'defasd',
        price: 4000,
        image: 'https://cdn.sallysbakingaddiction.com/wp-content/uploads/2019/11/homemade-sandwich-bread-600x900.jpg'
      }
    ]
  }
};

const StoreReducer = (state = initialState, action) => {
  const newAction = action;
  switch (newAction.type) {
    case ADD_ITEM:
      // add item to items array
      let updatedCart = state.cart;
      updatedCart.items.push({
        name: 'Bread!',
        quantity: 1,
        id: 'abcdef',
        price: 250,
        image: 'https://cdn.sallysbakingaddiction.com/wp-content/uploads/2019/11/homemade-sandwich-bread-600x900.jpg'
      });
      return {
        ...state,
        cart: updatedCart
      };
    default:
      return state;
  }
};

export default StoreReducer;
