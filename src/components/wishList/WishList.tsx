import { Container, Grid, Typography } from '@mui/material'
import CartItem from '../cartProducts/cartItem/CartItem'
import { styles } from './WishListStyles'
import { useSelector } from 'react-redux'
import { RootState } from '../../redux/store/Store'

function WishList() {
  const { wishList } = useSelector((state: RootState) => state.productsList)

  return (
    <Container maxWidth={'lg'} sx={styles.wishListBox}>
      <Typography variant="h3">Wish List</Typography>
      <Grid container spacing={3} >
        {wishList.map(product => (
          <Grid item xs={12} key={product.id}>
            <CartItem key={product.id} cartProductDetails={product} />
          </Grid>
        ))}
      </Grid>
    </Container>
  )
}

export default WishList