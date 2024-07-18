import { Box, Button, IconButton, Paper, Typography } from "@mui/material"
import { styles } from "./ProductItemStyles"
import { AddCircle, Favorite, FavoriteBorder, RemoveCircle, Star } from "@mui/icons-material";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, addToWishList, decrementQnty, incrementQnty, removeWishList } from "../../../redux/reducers/ProductsSlice";
import { RootState } from "../../../redux/store/Store";

interface IProps {
    eachProduct: {
        id: number;
        title: string;
        description: string;
        price: number;
        discountPercentage: number;
        rating: number;
        stock: number;
        brand: string;
        category: string;
        quantity: number | null;
        thumbnail: string;
        images: string[];
    }
}

function ProductItem(props: IProps) {
    const { eachProduct } = props
    const dispatch = useDispatch()
    const {cartList, isAdded, wishList, isWishListed} = useSelector((state:RootState) => state.productsList)
    const cartItm = cartList.find((product) => product.id === eachProduct.id)
    const selectedWishListItem = wishList.find((product) => product.id === eachProduct.id)

    return (
        <Paper sx={styles.cardItem}>
            {selectedWishListItem && isWishListed ?
            <Favorite sx={styles.favIcon} onClick={() => dispatch(removeWishList(eachProduct.id))}/>
            :             
            <FavoriteBorder sx={styles.favIcon} onClick={() => dispatch(addToWishList(eachProduct.id))}/> 
            }
            
            <Box component={'img'} src={eachProduct.thumbnail} alt={eachProduct.title} sx={styles.cardImg} />
            <Box sx={styles.contentBox}>
                <Typography sx={styles.brand}>{eachProduct.category} {'>'} {eachProduct.brand}</Typography>
                <Typography sx={styles.title}>{eachProduct.title}</Typography>
                <Typography sx={styles.description}>{eachProduct.description}</Typography>
                <Typography sx={styles.price}>Rs. {eachProduct.price}
                    <Box component={'span'} sx={styles.discount}> {eachProduct.discountPercentage} % off</Box>
                </Typography>                
                <Typography component={'span'} sx={styles.rating}>{eachProduct.rating} <Star sx={styles.star}/></Typography>
                {cartItm && isAdded === true ? 
                <Box sx={styles.quntyBtnsBox}>
                     <IconButton onClick={() => dispatch(decrementQnty(eachProduct.id))}>
                        <RemoveCircle sx={styles.addIcons}/>
                    </IconButton>
                    <Typography component={'span'}>{cartItm.quantity}</Typography>
                    <IconButton onClick={() => dispatch(incrementQnty(eachProduct.id))}>
                        <AddCircle sx={styles.addIcons}/>
                    </IconButton>
                </Box>
                :
                <Button variant='contained' sx={styles.cartBtn} onClick={() =>  dispatch(addToCart(eachProduct.id))}>Add to cart</Button>
                }                
            </Box>
        </Paper>
    )
}
export default ProductItem