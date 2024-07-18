export const styles = {
    bgBox: {
        backgroundColor: '#080d33',
        padding: '10px',
        color: '#fff',
        position: 'sticky',
        top: 0,
        zIndex: 2,
    },
    navContentBox: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: { md: 'space-between' },
        gap: 3,
    },
    logo: {
        height: '50px',
        width: '50px',
        cursor: 'pointer',
    },
    searchInput: {
        width: { xs: '100%', md: '50%' },
        display: { xs: 'none', sm: 'block' },
        "&.MuiTextField-root": { backgroundColor: '#2d2a40', borderRadius: '5px', },
        "& .MuiOutlinedInput-root fieldset": {
            border: 'none',
        },
        "& input": { color: '#b8b8b8', "&::placeholder": { color: '#b8b8b8', opacity: 1 } },

        "& .MuiOutlinedInput-root": {
            borderRadius: '5px',
            padding: '5px',
        },
        "& .MuiOutlinedInput-input": {
            padding: '5px',
            paddingLeft: '5px',
        },
        "& .MuiInputBase-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
            border: "none",
            color: '#b8b8b8',
        }
    },
    iconsContainer: {
        display: 'flex',
        alignItems: 'center',
        gap: 3,
    },
    searchIcon: {
        color: '#b8b8b8'
    },
    navIcons: {
        cursor: 'pointer',
        color: '#fff',
    },
    signBtn: {
        textTransform: 'none',
        color: '#fff',
    },
    modalBox: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        boxShadow: 24,
        p: 4,
    }
}