import { createStore } from "redux";
import usdImg from "../assets/usd.png";
import uahImg from "../assets/uah.png";
import eurImg from "../assets/eur.png";

const ADD_ITEM_TO_CART = 'ecommerce-store/main-store/ADD_ITEM_TO_CART';
const REMOVE_ITEM_FROM_CART = 'ecommerce-store/main-store/REMOVE_ITEM_FROM_CART';
const CHANGE_CURRENCY = 'ecommerce-store/main-store/CHANGE_CURRENCY';

let initialState = {
  currency: 'usd',
  currencyImg: usdImg,
  products: [
    {
      id: 0,
      title: 'The North Face',
      subTitle: 'Pride Pullover Hoodie',
      usdPrice: 64.95,
      price: 64.95,
      sizes: ['XS', 'S', 'M', 'L'],
      colors: ['black', 'white'],
      photoUrl: 'https://m.media-amazon.com/images/I/71m27uOu1wL._AC_SR736,920_.jpg',
      allPhotos: [
        'https://m.media-amazon.com/images/I/71m27uOu1wL._AC_SR736,920_.jpg',
        'https://m.media-amazon.com/images/I/71E5SSXdYmL._AC_SR736,920_.jpg'
      ],
      inCart: false
    },        
    {
      id: 1,
      title: 'Brooks Distance',
      subTitle: 'Graphic Tank',
      usdPrice: 31.95,
      price: 31.95,
      sizes: ['XS', 'S', 'M', 'MD', 'LG', 'L'],
      colors: ['white'],
      photoUrl: 'https://m.media-amazon.com/images/I/61DW3CsCjKL._AC_SR736,920_.jpg',
      allPhotos: [
        'https://m.media-amazon.com/images/I/61DW3CsCjKL._AC_SR736,920_.jpg',
        'https://m.media-amazon.com/images/I/61Nze3qVi6L._AC_SR736,920_.jpg'
      ],
      inCart: false
    },
    {
      id: 2,
      title: 'The North Face Ea Basin',
      subTitle: 'Funnel Neck Long Sleeve',
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
    },
    {
      id: 3,
      title: 'Brooks Distance',
      subTitle: 'Graphic Short Sleeve',
      usdPrice: 36,
      price: 36,
      sizes: ['SM', 'M', 'L'],
      colors: ['blue', 'red'],
      photoUrl: 'https://m.media-amazon.com/images/I/719Uej+geCL._AC_SR736,920_.jpg',
      allPhotos: [
        'https://m.media-amazon.com/images/I/719Uej+geCL._AC_SR736,920_.jpg',
        'https://m.media-amazon.com/images/I/71J9Gs83ydL._AC_SR736,920_.jpg'
      ],
      inCart: true
    },
    {
      id: 4,
      title: 'The North Face Box',
      subTitle: 'Nse Pullover Hoodie',
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
    },    
    {
      id: 5,
      title: 'PUMA',
      subTitle: 'Performance Tee',
      usdPrice: 24.95,
      price: 24.95,
      sizes: ['SM', 'MD', 'M', 'L'],
      colors: ['black', 'white'],
      photoUrl: 'https://m.media-amazon.com/images/I/71MDgf92xxL._AC_SR736,920_.jpg',
      allPhotos: [
        'https://m.media-amazon.com/images/I/71MDgf92xxL._AC_SR736,920_.jpg',
        'https://m.media-amazon.com/images/I/71ezDKQOufL._AC_SR736,920_.jpg'
      ],
      inCart: false
    }
  ],
  cartProducts: []
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
      let cImg = null;
      switch(action.currency) {
        case 'uah': 
          cImg = uahImg;
          break;
        case 'eur': 
          cImg = eurImg;
          break;
        default: cImg = usdImg;
      }
      console.log(cImg);
      return {
        ...state, 
        currency: action.currency, 
        currencyImg: cImg,
        products: state.products.map(item => {
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