import actionsTypes from '../../constants/Products';

const actions = {
  getProducts: () => ({
    type: actionsTypes.REQUEST_PRODUCTS,
  }),
  getProductsSuccess: (products) => ({
    type: actionsTypes.SUCCESS_PRODUCTS,
    payload: products
  }),
  getProductsFailure: () => ({
    type: actionsTypes.FAILURE_PRODUCTS,
  }),
}

export default actions;