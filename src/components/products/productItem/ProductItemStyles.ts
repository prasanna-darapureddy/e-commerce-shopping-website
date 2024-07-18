export const styles = {
    cardItem:{
        display:'flex',
        flexDirection: 'column',
        minHeight:'300px',
        height:'100%',
        maxHeight:'900px',
        position:'relative',
    },
    favIcon:{
        position:'absolute',
        top:10,
        right:10,
        color:'#b20d55',
    },
    cardImg:{
        width:'100%',
        height:'200px',
        border: '1px solid #f5f5f5',
    },
    contentBtnBox:{
        display:'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        padding:'10px 20px',
        gap:1,
    },
    contentBox:{
        display:'flex',
        flexDirection: 'column',
        padding:'10px 20px',
        gap:1,
    },
    title:{
        fontSize:'20px',
        fontWeight:'bold',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap',                
    },
    price:{
        fontWeight:'bold',
        color:'#b20d55',
    },
    discount:{
        color:'green',
        fontSize:'10px',
        marginLeft:'10px',
    },
    brand:{
        fontSize:'12px',
        color:'#7e7e80',
    },
    titleRatingBox:{
        display:'flex',
        justifyContent: 'space-between',
    },
    rating:{
        border:'1px solid #ccc',
        borderRadius:'20px',
        display:'flex',
        alignItems: 'center',
        justifyContent:'center',
        alignSelf: 'flex-start',
        fontSize:'12px',
        padding:'2px',
        gap:0.2
    },
    star:{
        fontSize:'13px',
        color:'green',
        
    },
    cartBtn:{
        backgroundColor:'#b20d55',
        textTransform:'none',
        borderRadius:'20px',
        "&:hover":{
            backgroundImage:'linear-gradient(#fe382c, #b20d55)',
        }
    },
    description:{
        fontSize:'13px',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap',        
    },
    quntyBtnsBox:{
        display:'flex',
        alignItems: 'center',
        alignSelf: 'center',
    },
    addIcons:{
        color:'#b20d55',
    }
}