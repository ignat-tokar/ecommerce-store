import { createStore } from "redux";

const ADD_ITEM_TO_CART = 'ecommerce-store/main-store/ADD_ITEM_TO_CART';
const REMOVE_ITEM_FROM_CART = 'ecommerce-store/main-store/REMOVE_ITEM_FROM_CART';
const CHANGE_CURRENCY = 'ecommerce-store/main-store/CHANGE_CURRENCY';

let initialState = {
  currency: 'usd',
  products: [
    {
      id: 0,
      title: 'Apollo Running Short White',
      usdPrice: 50,
      price: 50,
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
      title: 'adidas Adilette Shower',
      usdPrice: 24.95,
      price: 24.95,
      sizes: ['4', '5', '6', '9', '10', '11'],
      colors: ['black', 'white'],
      photoUrl: 'https://m.media-amazon.com/images/I/71DVmpfEniL._AC_SR920,736_.jpg',
      allPhotos: [
        'https://m.media-amazon.com/images/I/71DVmpfEniL._AC_SR920,736_.jpg',
        'https://m.media-amazon.com/images/I/51+B9Sray+L._AC_SR920,736_.jpg'
      ],
      inCart: true
    },
    {
      id: 2,
      title: 'Cole Haan GrandPro Rally Canvas Court Sneaker',
      usdPrice: 85,
      price: 85,
      sizes: ['7', '7.5', '8', '9', '10', '11'],
      colors: ['white'],
      photoUrl: 'https://m.media-amazon.com/images/I/71+Qifi+1yL._AC_SR920,736_.jpg',
      allPhotos: [
        'https://m.media-amazon.com/images/I/71+Qifi+1yL._AC_SR920,736_.jpg',
        'https://m.media-amazon.com/images/I/71j6fe9jFiL._AC_SR920,736_.jpg',
        'https://m.media-amazon.com/images/I/61zBRFstfqL._AC_SR920,736_.jpg'
      ],
      inCart: false
    },
    {
      id: 3,
      title: 'The North Face Pride Pullover Hoodie',
      usdPrice: 64.95,
      price: 64.95,
      sizes: ['7', '7.5', '8', '9', '10', '11'],
      colors: ['black', 'white'],
      photoUrl: 'https://m.media-amazon.com/images/I/71m27uOu1wL._AC_SR736,920_.jpg',
      allPhotos: [
        'https://m.media-amazon.com/images/I/71m27uOu1wL._AC_SR736,920_.jpg',
        'https://m.media-amazon.com/images/I/71E5SSXdYmL._AC_SR736,920_.jpg'
      ],
      inCart: false
    },
    {
      id: 4,
      title: 'The North Face Pride Tank',
      usdPrice: 29.95,
      price: 29.95,
      sizes: ['XS', 'SM', 'XL', '2XL'],
      colors: ['white', 'black'],
      photoUrl: 'https://m.media-amazon.com/images/I/61gdwGfWaCL._AC_SR736,920_.jpg',
      allPhotos: [
        'https://m.media-amazon.com/images/I/61gdwGfWaCL._AC_SR736,920_.jpg',
        'https://m.media-amazon.com/images/I/71zfLbhMoIL._AC_SR736,920_.jpg'
      ],
      inCart: false
    },
    {
      id: 4,
      title: 'The North Face Ea Basin Funnel Neck Long Sleeve',
      usdPrice: 88.95,
      price: 88.95,
      sizes: ['XS', 'SM', 'XL'],
      colors: ['black'],
      photoUrl: 'https://m.media-amazon.com/images/I/614+HTShODL._AC_SR736,920_.jpg',
      allPhotos: [
        'https://m.media-amazon.com/images/I/614+HTShODL._AC_SR736,920_.jpg',
        'https://m.media-amazon.com/images/I/71rxtlsXotL._AC_SR736,920_.jpg'
      ],
      inCart: false
    }
    ,
    {
      id: 5,
      title: 'The North Face Box Nse Pullover Hoodie',
      usdPrice: 54.95,
      price: 54.95,
      sizes: ['XS', 'SM', 'MD', 'XL', '2XL'],
      colors: ['blue', 'white', 'yellow'],
      photoUrl: 'https://m.media-amazon.com/images/I/71u+NVZhLJL._AC_SR736,920_.jpg',
      allPhotos: [
        'https://m.media-amazon.com/images/I/71u+NVZhLJL._AC_SR736,920_.jpg',
        'https://m.media-amazon.com/images/I/71jvLobExUL._AC_SR736,920_.jpg',
        'https://m.media-amazon.com/images/I/61PkcMurqAL._AC_SR736,920_.jpg'
      ],
      inCart: false
    }    
  ]
}

const store = createStore((state = initialState, action) => {
  switch (action.type) {
    case ADD_ITEM_TO_CART: {
      return {
        ...state, products: state.products.map(item => {
          if (item.id === action.id) {
            return { ...item, inCart: true }
          } else {
            return item;
          }
        })
      };
    }
    case REMOVE_ITEM_FROM_CART: {
      return {
        ...state, products: state.products.map(item => {
          if (item.id === action.id) {
            return { ...item, inCart: false }
          } else {
            return item;
          }
        })
      };
    }
    case CHANGE_CURRENCY: {
      return {
        ...state, products: state.products.map(item => {
          switch (action.currency) {
            case 'usd': {
              return { ...item, price: item.usdPrice }
            }
            case 'eur': {
              return { ...item, price: item.usdPrice * 0.95 }
            }
            case 'uah': {
              return { ...item, price: item.usdPrice * 29.5 }
            }
            default: return item;
          }
        })
      };
    }
    default:
      return state;
  }
});

export const addItemToCart = (id) => ({ type: ADD_ITEM_TO_CART, id });
export const removeItemFromCart = (id) => ({ type: REMOVE_ITEM_FROM_CART, id });
export const changeCurrency = (currency) => ({ type: CHANGE_CURRENCY, currency });

window.store = store;
export default store;