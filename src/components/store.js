import { createStore } from "redux";

const ADD_ITEM_TO_CART = 'ecommerce-store/main-store/ADD_ITEM_TO_CART';
const REMOVE_ITEM_FROM_CART = 'ecommerce-store/main-store/REMOVE_ITEM_FROM_CART';

let initialState = {
  products: [
    {
      id: 0,
      title: 'Apollo Running Short White',
      price: '50',
      sizes: ['xs', 's', 'm', 'l'],
      colors: ['black', 'grey'],
      photoUrl: 'https://www.hankplayer.com/wp-content/uploads/mens-apolloblueprint-cream-2.jpg',
      allPhotos: [
        'https://www.hankplayer.com/wp-content/uploads/mens-apolloblueprint-cream-2.jpg',
        'https://www.hankplayer.com/wp-content/uploads/mens-apolloblueprint-heathergrey-2-600x600.jpg',
        'https://www.hankplayer.com/wp-content/uploads/mens-apolloblueprint-heathernavy-2.jpg'
      ],
      inCart: false
    },
    {
      id: 1,
      title: 'Apollo Running Short Grey',
      price: '57',
      sizes: ['xs', 's', 'm', 'l'],
      colors: ['black', 'grey'],
      photoUrl: 'https://www.hankplayer.com/wp-content/uploads/mens-apolloblueprint-heathergrey-2-600x600.jpg',
      allPhotos: [
        'https://www.hankplayer.com/wp-content/uploads/mens-apolloblueprint-cream-2.jpg',
        'https://www.hankplayer.com/wp-content/uploads/mens-apolloblueprint-heathergrey-2-600x600.jpg',
        'https://www.hankplayer.com/wp-content/uploads/mens-apolloblueprint-heathernavy-2.jpg'
      ],
      inCart: true
    },
    {
      id: 2,
      title: 'Apollo Running Short Blue',
      price: '55',
      sizes: ['xs', 's', 'm', 'l'],
      colors: ['black', 'grey'],
      photoUrl: 'https://www.hankplayer.com/wp-content/uploads/mens-apolloblueprint-heathernavy-2.jpg',
      allPhotos: [
        'https://www.hankplayer.com/wp-content/uploads/mens-apolloblueprint-cream-2.jpg',
        'https://www.hankplayer.com/wp-content/uploads/mens-apolloblueprint-heathergrey-2-600x600.jpg',
        'https://www.hankplayer.com/wp-content/uploads/mens-apolloblueprint-heathernavy-2.jpg'
      ],
      inCart: false
    }      
  ]
}

const store = createStore((state = initialState, action) => {
  switch (action.type) {
    case ADD_ITEM_TO_CART: {
      state = state.products.map(item => {
        if(item.id === action.id){
          item.inCart = true;
        }
        return item;
      })
      return state;
    }
    case REMOVE_ITEM_FROM_CART: {
      state = state.products.map(item => {
        if(item.id === action.id){
          item.inCart = false;
        }
        return item;
      })
      return state;
    }
    default:
      return state;
  }
});

export const addItemToCart = (id) => ({type: ADD_ITEM_TO_CART, id});
export const removeItemFromCart = (id) => ({type: REMOVE_ITEM_FROM_CART, id});

window.store = store;
export default store;