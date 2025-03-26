import { createSlice } from '@reduxjs/toolkit'


const initialState = {
  cartItems: [],
  totalAmount: 0,
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    
    
    addToCart: (state, action) => {
      const item = state.cartItems.find(i => i.id === action.payload.id);
      if(item){
        item.quantity += 1;
      } else{
        state.cartItems.push({...action.payload,quantity: 1});
      }
      state.totalAmount += action.payload.price;
    },
    removeFromCart: (state, action) => {
      const item = state.cartItems.find(i => i.id === action.payload.id);
      if (item) {
        if (item.quantity > 1) {
          item.quantity -= 1;
          state.totalAmount -= item.price; // Deduct only one item's price
        } else {
          state.totalAmount -= item.price;
          state.cartItems = state.cartItems.filter(i => i.id !== action.payload.id);
        }
      }
    },
    // ✅ Add this resetCart reducer
    resetCart: (state) => {
      state.cartItems = [];
      state.totalAmount = 0;
    }
  },
})

// Action creators are generated for each case reducer function
export const {addToCart, removeFromCart, resetCart } = cartSlice.actions

export default cartSlice.reducer