import { useSelector } from "react-redux"
import { RootState } from "../../redux/store/Store"
import { Container, Grid, Stack, Typography } from "@mui/material"
import { styles } from "./CartProductsStyles"
import CartItem from "./cartItem/CartItem"

function CartProducts() {
  const { cartList } = useSelector((state: RootState) => state.productsList)

  return (
    <Container maxWidth={'lg'} sx={styles.cartListBox}>
      <Typography variant="h3">Cart List</Typography>
      <Grid container spacing={3}>
        {cartList.length > 0 ?
          <>
            {cartList.map(product => (
              <Grid item xs={12} key={product.id}>
                <CartItem key={product.id} cartProductDetails={product} isItCartItem={true}/>
              </Grid>
            ))}
          </> :

          <Stack flexDirection={'column'} alignItems={'center'} justifyContent={'center'} color={'#b20d55'} height={'50vh'} width={'100%'}>
            <Typography variant="h3" textAlign={'center'}>Your cart is empty</Typography>
          </Stack>
        }
      </Grid>
    </Container >
  )
}
export default CartProducts