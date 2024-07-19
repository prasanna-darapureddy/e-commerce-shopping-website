import { Box, Button, IconButton, Paper, Stack, Tooltip, Typography } from "@mui/material"
import { AddCircle, Close, RemoveCircle, Star } from "@mui/icons-material";
import { useDispatch, useSelector, } from "react-redux";
import { addToCart, decrementQnty, deleteItem, incrementQnty, removeWishList } from "../../../redux/reducers/ProductsSlice";
import { styles } from "./CartItemStyles";
import { RootState } from "../../../redux/store/Store";

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
    },
    isItCartItem: boolean;
}

function CartItem(props: IProps) {
    const { cartProductDetails, isItCartItem } = props
    const { isAdded, cartList } = useSelector((state: RootState) => state.productsList)
    const cartItem = cartList.find((product) => product.id === cartProductDetails.id)
    const dispatch = useDispatch()

    const onClickCloseIcon = (id: number) => {
        isItCartItem && dispatch(deleteItem(id))
        !isItCartItem && dispatch(removeWishList(id))
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
                <Typography component={'span'} sx={styles.rating}>{cartProductDetails.rating} <Star sx={styles.star} /></Typography>
                {isItCartItem ?
                    <Box sx={styles.quntyBtnsBox}>
                        <IconButton onClick={() => dispatch(decrementQnty(cartProductDetails.id))}>
                            <RemoveCircle sx={styles.addIcons} />
                        </IconButton>
                        <Typography component={'span'}>{cartProductDetails.quantity}</Typography>
                        <IconButton onClick={() => dispatch(incrementQnty(cartProductDetails.id))}>
                            <AddCircle sx={styles.addIcons} />
                        </IconButton>
                    </Box>
                    :
                    <>
                        {isAdded && isItCartItem && cartItem ?
                            <Box sx={styles.quntyBtnsBox}>
                                <IconButton onClick={() => dispatch(decrementQnty(cartProductDetails.id))}>
                                    <RemoveCircle sx={styles.addIcons} />
                                </IconButton>
                                <Typography component={'span'}>{cartProductDetails.quantity}</Typography>
                                <IconButton onClick={() => dispatch(incrementQnty(cartProductDetails.id))}>
                                    <AddCircle sx={styles.addIcons} />
                                </IconButton>
                            </Box>
                            :
                            <Stack justifyContent={'flex-start'} alignItems={'flex-start'} pb={1}>
                                <Button variant='contained' sx={styles.cartBtn} onClick={() => dispatch(addToCart(cartProductDetails.id))}>Add to cart</Button>
                            </Stack>
                        }
                    </>
                }
            </Box>
            <IconButton sx={styles.closeBtn} onClick={() => onClickCloseIcon(cartProductDetails.id)}>
                <Tooltip title='Delete'>
                    <Close />
                </Tooltip>
            </IconButton>
        </Paper>
    )
}
export default CartItem