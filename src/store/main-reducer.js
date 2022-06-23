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
      ]
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
      ]
    },
    {
      id: 2,
      title: 'Apollo Running Short Grey',
      price: '55',
      sizes: ['xs', 's', 'm', 'l'],
      colors: ['black', 'grey'],
      photoUrl: 'https://www.hankplayer.com/wp-content/uploads/mens-apolloblueprint-heathernavy-2.jpg',
      allPhotos: [
        'https://www.hankplayer.com/wp-content/uploads/mens-apolloblueprint-cream-2.jpg',
        'https://www.hankplayer.com/wp-content/uploads/mens-apolloblueprint-heathergrey-2-600x600.jpg',
        'https://www.hankplayer.com/wp-content/uploads/mens-apolloblueprint-heathernavy-2.jpg'
      ]
    }      
  ]
}

export const mainReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_ITEM': {
      return state;
    }
    default:
      return state;
  }
}

export const addItemActionCreator = () => ({type: 'ADD_ITEM'})