import React from "react";
import {FilledInput, FormControl, InputAdornment, InputLabel} from "@mui/material";


const CarPayment = (props: { carPayment: any; setCarPayment: any; onKeyDown: any }) => {

    const {carPayment, setCarPayment, onKeyDown} = props;






    return (
        <>
            <FormControl fullWidth sx={{ m: 1, mt: 3, width: '25ch'}} variant="filled">
                <InputLabel htmlFor="filled-adornment-amount">Car Payment</InputLabel>
                <FilledInput
                    id="filled-adornment-amount"
                    type="number"
                    onKeyDown={
                        onKeyDown
                    }
                    value={carPayment}
                    onChange={e => setCarPayment(parseFloat(e.target.value))}
                    startAdornment={<InputAdornment position="start">$</InputAdornment>}
                />
            </FormControl>
        </>
    )
}


export default CarPayment;