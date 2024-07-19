import { Container, Grid, Stack, Typography } from '@mui/material'
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
        {wishList.length > 0 ?
          <>
            {wishList.map(product => (
              <Grid item xs={12} key={product.id}>
                <CartItem key={product.id} cartProductDetails={product} />
              </Grid>
            ))}
          </> :
          <Stack flexDirection={'column'} alignItems={'center'} justifyContent={'center'} color={'#b20d55'} height={'50vh'} width={'100%'}>
            <Typography variant="h3" textAlign={'center'}>Your wishlist is empty</Typography>
          </Stack>
        }
      </Grid>
    </Container>
  )
}

export default WishList