import { configureStore } from '@reduxjs/toolkit'
import ProductsSlice from '../reducers/ProductsSlice'

const Store = configureStore({
  reducer: {
    productsList: ProductsSlice,
  }
})

export type RootState = ReturnType<typeof Store.getState>
export type AppDispatch = typeof Store.dispatch
export default Store