import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { fetchProducts } from "../../redux/reducers/ProductsSlice"
import { AppDispatch, RootState } from "../../redux/store/Store";
import { CircularProgress, Container, Grid, Stack, Typography } from "@mui/material";
import { styles } from "./ProductsStyles";
import ProductItem from "./productItem/ProductItem";
export const useAppDispatch = () => useDispatch<AppDispatch>();

function Products() {
  const dispatch = useAppDispatch()
  const { filtersList, productsList, status, error } = useSelector((state: RootState) => state.productsList)

  useEffect(() => {
    dispatch(fetchProducts())
  }, [dispatch])

  return (
    <Container maxWidth={'lg'} sx={styles.productsBox}>
      <Typography variant="h3">Products</Typography>
      <Grid container spacing={3}>
        {status === 'loading' ?
          <Stack height={'60vh'} width={'100%'} direction={'row'} justifyContent={'center'} alignItems={'center'} color={'#b20d55'}>
            <CircularProgress color="inherit" />
          </Stack>
          : error ?
            <Stack height={'60vh'} width={'100%'} direction={'row'} justifyContent={'center'} alignItems={'center'} color={'#b20d55'}>
              <Typography variant="h4">{error}</Typography>
            </Stack>
            :
            <>
              {filtersList.length > 0 ?
                <>
                  {filtersList.map(product => (
                    <Grid item xs={12} sm={6} md={4} lg={3} key={product.id}>
                      <ProductItem eachProduct={product} key={product.id} />
                    </Grid>
                  ))}
                </>
                :
                <Stack height={'60vh'} width={'100%'} direction={'row'} justifyContent={'center'} alignItems={'center'} color={'#b20d55'}>
                  <Typography variant="h4">No Data Found</Typography>
                </Stack>
              }
            </>
        }
      </Grid>
    </Container>
  )
}
export default Products