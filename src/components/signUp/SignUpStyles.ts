export const styles = {
    modalBox:{
        position: 'absolute' as 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        bgcolor: 'background.paper',        
        boxShadow: 24,
        padding: 4,
        borderRadius:'20px',
        flex:1,
        minWidth:'220px',
        maxWidth:'400px',
        outline:'none',
    },
    modalContent:{
        padding: '50px 10px',
        height:'100%',
        display:'flex',
        flexDirection:'column',        
        gap:4,
        position:'relative',
        marginTop: '20px',
    },
    heading:{
        textAlign: 'center',
    },
    inputBox:{
        display:'flex',
        flexDirection:'column',
        gap:2
    },
    mobileInput:{
        "& input::-webkit-outer-spin-button, & input::-webkit-inner-spin-button": {
        display: "none",
        },
        "& input[type=number]": {
        MozAppearance: "textfield",
        },
    },
    indiaCode:{
        color:'#000',
    },
    continueBtn:{
        backgroundImage:'linear-gradient(#fe382c, #b20d55)',
        textTransform:'none',
        color:'#fff',
        borderRadius:'20px',
        padding: '10px',
    },
    closeIcon:{
        position:'absolute',
        top:15,
        right: 15,
        cursor:'pointer',
        color:'#000',
    },
}