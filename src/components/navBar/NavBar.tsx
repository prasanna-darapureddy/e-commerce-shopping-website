import { Badge, Box, Button, Container,  IconButton,  InputAdornment, TextField } from "@mui/material"
import { FavoriteBorder, LocalMallOutlined, Search } from "@mui/icons-material";
import logo from '../../assets/images/logo.jpg';
import { styles } from "./NavBarStyles"
import { useDispatch, useSelector,} from "react-redux";
import { handleSignIn, searchProducts } from "../../redux/reducers/ProductsSlice";
import SignUp from "../signUp/SignUp";
import { useNavigate } from "react-router-dom";
import { RootState } from "../../redux/store/Store";


function NavBar() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const {cartList, wishList} = useSelector((state:RootState) => state.productsList)

  return (
    <>
        <Box sx={styles.bgBox}>            
            <Container maxWidth={'lg'} sx={styles.navContentBox}>
                <IconButton>
                  <Box component={'img'} src={logo} alt='E Commarce' sx={styles.logo} onClick={() => navigate('/')}/>
                </IconButton>
                <TextField variant="outlined" sx={styles.searchInput} type="text" placeholder="Search here" 
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <Search sx={styles.searchIcon} />
                      </InputAdornment>
                    )
                  }}
                  onChange={(event) => dispatch(searchProducts(event.target.value))}
                />
                <Box sx={styles.iconsContainer}>
                  <IconButton sx={styles.navIcons} onClick={() => navigate('/wishlist')}>
                    <Badge badgeContent={wishList.length} color={'error'}>
                      <FavoriteBorder />                    
                    </Badge>
                  </IconButton>
                  <IconButton  sx={styles.navIcons} onClick={() => navigate('/cart')}>
                    <Badge badgeContent={cartList.length}  color={'error'}>
                      <LocalMallOutlined />
                    </Badge>
                  </IconButton>
                    <Button sx={styles.signBtn} onClick={() => dispatch(handleSignIn())}>Sign in/ Sign up</Button>
                    <SignUp/>
                </Box>                   
            </Container>
        </Box>
    </>
  )
}
export default NavBar