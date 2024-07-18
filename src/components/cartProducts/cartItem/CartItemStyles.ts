export const styles = {
    cartItem: {
        display: 'flex',
        alignItems: 'center',
        gap: 3,
        position: 'relative',
        width: '100%',
        border: '1px solid #ccc',
    },
    cardImg: {
        width: { xs: '150px', sm: '200px', md: '250px', lg: '300px' },
        height: '200px',
        borderRight: '1px solid #ccc',
        minWidth: '100px',
        maxWidth: '200px',
    },
    contentBox: {
        display: 'flex',
        flexDirection: 'column',
        gap: 1
    },
    title: {
        fontSize: '20px',
        fontWeight: 'bold',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap',
    },
    price: {
        fontWeight: 'bold',
        color: '#b20d55',
    },
    discount: {
        color: 'green',
        fontSize: '10px',
        marginLeft: '10px',
    },
    brand: {
        fontSize: '12px',
        color: '#7e7e80',
    },
    titleRatingBox: {
        display: 'flex',
        justifyContent: 'space-between',
    },
    rating: {
        border: '1px solid #ccc',
        borderRadius: '20px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'flex-start',
        fontSize: '12px',
        padding: '2px',
        gap: 0.2
    },
    star: {
        fontSize: '13px',
        color: 'green',
    },
    description: {
        fontSize: '13px',
        width: '80%'
    },
    quntyBtnsBox: {
        display: 'flex',
        alignItems: 'center',
        paddingLeft: '0px',
    },
    addIcons: {
        color: '#b20d55',
    },

    closeBtn: {
        position: 'absolute',
        top: '10px',
        right: '10px',
    }
}