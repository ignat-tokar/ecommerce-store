let initialState = {
  field: null
}

export const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_ITEM': {
      return {
        ...state,
        field: action.field
      };
    }
    default:
      return state;
  }
}

export const addItemActionCreate = (field) => ({type: 'ADD_ITEM', field})