import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { fetchProducts } from "../../redux/reducers/ProductsSlice"
import { AppDispatch, RootState } from "../../redux/store/Store";
import { Container, Grid, Typography } from "@mui/material";
import { styles } from "./ProductsStyles";
import ProductItem from "./productItem/ProductItem";
export const useAppDispatch = () => useDispatch<AppDispatch>();

function Products() {
  const dispatch = useAppDispatch()
  const { productsList } = useSelector((state: RootState) => state.productsList)

  useEffect(() => {
    dispatch(fetchProducts())
  }, [dispatch])

  return (
    <Container maxWidth={'lg'} sx={styles.productsBox}>
      <Typography variant="h3">Products</Typography>
      <Grid container spacing={3}>
        {productsList.map(product => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={product.id}>
            <ProductItem eachProduct={product} key={product.id} />
          </Grid>
        ))}
      </Grid>
    </Container>
  )
}
export default Products