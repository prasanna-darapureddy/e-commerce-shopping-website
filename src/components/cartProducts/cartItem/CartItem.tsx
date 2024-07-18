import { Box, IconButton, Paper, Tooltip, Typography } from "@mui/material"
import { AddCircle, Close, RemoveCircle, Star } from "@mui/icons-material";
import { useDispatch, } from "react-redux";
import { decrementQnty, deleteItem, incrementQnty, removeWishList } from "../../../redux/reducers/ProductsSlice";
import { styles } from "./CartItemStyles";

interface IProps {
    cartProductDetails: {
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

function CartItem(props: IProps) {
    const { cartProductDetails } = props
    const dispatch = useDispatch()  
    
    const onClickCloseIcon = (id: number) => {
        dispatch(removeWishList(id))
        dispatch(deleteItem(id))
    }

    return (
        <Paper sx={styles.cartItem}>           
            <Box component={'img'} src={cartProductDetails.thumbnail} alt={cartProductDetails.title} sx={styles.cardImg} />
            <Box sx={styles.contentBox}>
                <Typography sx={styles.brand}>{cartProductDetails.category} {'>'} {cartProductDetails.brand}</Typography>
                <Typography sx={styles.title}>{cartProductDetails.title}</Typography>
                <Typography sx={styles.description}>{cartProductDetails.description}</Typography>
                <Typography sx={styles.price}>Rs. {cartProductDetails.price}
                    <Box component={'span'} sx={styles.discount}> {cartProductDetails.discountPercentage} % off</Box>
                </Typography>                
                <Typography component={'span'} sx={styles.rating}>{cartProductDetails.rating} <Star sx={styles.star}/></Typography>                
                
                <Box sx={styles.quntyBtnsBox}>
                     <IconButton onClick={() => dispatch(decrementQnty(cartProductDetails.id))}>
                        <RemoveCircle sx={styles.addIcons}/>
                    </IconButton>
                    <Typography component={'span'}>{cartProductDetails.quantity}</Typography>
                    <IconButton onClick={() => dispatch(incrementQnty(cartProductDetails.id))}>
                        <AddCircle sx={styles.addIcons}/>
                    </IconButton>
                </Box>
                
            </Box>
            <IconButton sx={styles.closeBtn} onClick={() => onClickCloseIcon(cartProductDetails.id)}>
                <Tooltip title='Delete'>
                    <Close/>
                </Tooltip>
            </IconButton>
        </Paper>
    )
}
export default CartItem