import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

export interface ProductsListState {
  productsList: {
    id: number;
    title: string;
    description: string;
    price: number;
    discountPercentage: number;
    rating: number;
    stock: number;
    brand: string;
    category: string;
    thumbnail: string;
    images: string[];
    quantity: number | null;
  }[],
  cartList: {
    id: number;
    title: string;
    description: string;
    price: number;
    discountPercentage: number;
    rating: number;
    stock: number;
    brand: string;
    category: string;
    thumbnail: string;
    quantity: number | null;
    images: string[];
  }[],
  wishList: {
    id: number;
    title: string;
    description: string;
    price: number;
    discountPercentage: number;
    rating: number;
    stock: number;
    brand: string;
    category: string;
    thumbnail: string;
    quantity: number | null;
    images: string[];
  }[],
  status: string,
  error: string,
  isAdded: boolean;
  signInUpModal: boolean;
  isWishListed: boolean;
}

const initialState: ProductsListState = {
  productsList: [],
  cartList: [],
  wishList: [],
  status: 'initial',
  error: '',
  isAdded: false,
  signInUpModal: false,
  isWishListed: false,
}

export const fetchProducts = createAsyncThunk('productsList/fetchProducts', async () => {
  try {
    const data = await fetch('https://dummyjson.com/products')
    const response = await data.json()
    return response.products
  }
  catch (error) {
    initialState.status = 'failed'
  }
})

export const ProductsSlice = createSlice({
  name: 'productsList',
  initialState,
  reducers: {
    handleSignIn: (state) => {
      state.signInUpModal = !state.signInUpModal
    },
    addToWishList: (state, action) => {
      const wishListedItem = state.productsList.find(eachProduct => eachProduct.id === action.payload)
      wishListedItem && (state.wishList.push({ ...wishListedItem, 'quantity': 1 }))
      wishListedItem && wishListedItem.id === action.payload && (state.isWishListed = true)
    },
    removeWishList: (state, action) => {
      const existedWishList = state.productsList.find(eachProduct => eachProduct.id === action.payload)
      if (existedWishList && existedWishList.id === action.payload) {
        const removedItem = state.wishList.filter(eachProduct => eachProduct.id !== action.payload)
        state.wishList = removedItem
      }
    },
    addToCart: (state, action) => {
      const selectedItem = state.productsList.find(eachProduct => eachProduct.id === action.payload)
      selectedItem && (state.cartList.push({ ...selectedItem, 'quantity': 1 }))
      selectedItem && selectedItem.id === action.payload && (state.isAdded = true)
    },
    deleteItem: (state, action) => {
      const updateCartList = state.cartList.filter(eachItem => eachItem.id !== action.payload)
      state.cartList = updateCartList
    },
    incrementQnty: (state, action) => {
      const item = state.cartList.find(eachProduct => eachProduct.id === action.payload);
      item?.quantity && (item.quantity += 1)
    },
    decrementQnty: (state, action) => {
      const item = state.cartList.find(eachProduct => eachProduct.id === action.payload);
      item?.quantity && item.quantity >= 1 && (item.quantity -= 1)
      item?.quantity && item.quantity < 1 && (state.cartList = state.cartList.filter(eachItem => eachItem.id !== action.payload))
    },
    removeCartItems: (state) => {
      state.cartList = []
    },
    searchProducts: (state, action) => {
      const filteredList = state.productsList.filter(eachProduct => (
        eachProduct.title.toLowerCase().includes(action.payload.toLowerCase())
      ))
      state.productsList = filteredList
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.status = 'loading'
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.status = 'succeeded'
        state.productsList = action.payload
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.status = 'failed'
        action.error.message !== undefined && (state.error = action.error.message)
      })
  }
})

export const { handleSignIn, addToWishList, removeWishList, addToCart, deleteItem, incrementQnty, decrementQnty, removeCartItems, searchProducts } = ProductsSlice.actions
export default ProductsSlice.reducer