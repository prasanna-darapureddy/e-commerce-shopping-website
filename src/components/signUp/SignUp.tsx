import { Box, Button, IconButton, InputAdornment, InputLabel, Modal, TextField, Typography } from "@mui/material"
import { useDispatch, useSelector } from "react-redux"
import { RootState } from "../../redux/store/Store"
import { handleSignIn } from "../../redux/reducers/ProductsSlice"
import { styles } from "./SignUpStyles"
import { Close } from "@mui/icons-material"

function SignUp() {
    const {signInUpModal} = useSelector((state:RootState) => state.productsList)
    const dispatch = useDispatch()

    return (
    <Modal
        open={signInUpModal}
        onClose={() => dispatch(handleSignIn())}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
    >
        <Box sx={styles.modalBox}>
            <IconButton sx={styles.closeIcon} onClick={() => dispatch(handleSignIn())}>
                <Close />
            </IconButton>
            <Box sx={styles.modalContent}>                
                <Typography id="modal-modal-title" variant="h4" component="h2" sx={styles.heading}>
                    Welcome to Online Shop
                </Typography>

                <Box sx={styles.inputBox}>
                    <InputLabel>Please enter your email</InputLabel>
                    <TextField type='text' variant="standard" label={'Email'} sx={styles.mobileInput} />
                </Box>                
                <Box sx={styles.inputBox}>
                    <InputLabel>Please enter your mobile number</InputLabel>
                    <TextField type='number' variant="standard" label={'Mobile Number'} sx={styles.mobileInput} 
                        InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                            <Typography sx={styles.indiaCode}>+91</Typography>
                            </InputAdornment>
                        )
                        }}
                    />
                </Box>
                <Button sx={styles.continueBtn}>Continue</Button>               
            </Box>
        </Box>
    </Modal>
  )
}

export default SignUp