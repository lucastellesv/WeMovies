import { createAction, createReducer } from "@reduxjs/toolkit";

const STATE = [];

export const addItem = createAction("ADD_ITEM");
export const removeItem = createAction("REMOVE_ITEM");
export const removeIndex = createAction("REMOVE_INDEX");
export const clearCart = createAction("CLEAR_CART");

export default createReducer(STATE, {
  [addItem.type]: (state, action) => [...state, action.payload],
  [removeIndex.type]: (state, action) => void state.splice(action.payload, 1),
  [removeItem.type]: (state, action) =>
    state.filter((item) => item.id !== action.payload),
  [clearCart.type]: () => {
    return STATE;
  },
});
