import actionsTypes from '../../constants/Cart';

const actions = {
  getCart: () => ({
    type: actionsTypes.CART_REQUEST,
  }),
  selectSize: () => ({
    type: actionsTypes.SELECT_SIZE_PRODUCT
  }),
  addProduct: (product) => ({
    type: actionsTypes.ADD_PRODUCT,
    payload: product
  }),
  addProductFailure: () => ({
    type: actionsTypes.ADD_PRODUCT_FAILURE,
  }),
  incrementQuantityProduct: (id) => ({
    type: actionsTypes.INCREMENT_QUANTITY_PRODUCT,
    payload: id
  }),
  decrementQuantityProduct: (id) => ({
    type: actionsTypes.DECREMENT_QUANTITY_PRODUCT,
    payload: id
  }),
  removeProduct: (sku) => ({
    type: actionsTypes.REMOVE_PRODUCT,
    payload: sku
  }),
}

// "quantitySelected": 2,
// "sizeSelected": "P",

export default actions;