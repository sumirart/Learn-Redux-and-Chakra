import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  quantity: {},
  total: 0,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState, // we also can define initial state here without creating variable
  reducers: {
    add: (state, action) => {
      state.total += 1;

      // find the item in the "products" by id, if not found then push action.payload to products and add action.payload.id to quantity
      // if found then add 1 to quantity[action.payload.id]
      const found = state.products.find(
        (product) => product.id === action.payload.id
      );

      if (!found) {
        // state.products.push(action.payload);
        state.products = [...state.products, action.payload];
        state.quantity[action.payload.id] = 1;
      } else {
        state.quantity[action.payload.id] += 1;
      }
    },
    decrease: (state, action) => {
      // find the item in the "products" by id, if not found then do nothing
      // if found then decrease 1 to quantity[action.payload.id]
      const found = state.products.find(
        (product) => product.id === action.payload.id
      );
      if (found) {
        state.quantity[action.payload.id] -= 1;
      }
      state.total -= 1;
    },
    remove: (state, action) => {
      // find the item in the "products" by id, if not found then do nothing
      // if found then remove the item from products and delete quantity[action.payload.id]
      const found = state.products.find(
        (product) => product.id === action.payload.id
      );
      if (found) {
        state.products = state.products.filter(
          (product) => product.id !== action.payload.id
        );
        state.total -= state.quantity[action.payload.id];
        delete state.quantity[action.payload.id];
      }
    },
  },
});

export const selectCart = (state) => state.cart;
export const { add, decrease, remove } = cartSlice.actions;

export default cartSlice.reducer;
