import React from "react";
import {FilledInput, FormControl, InputAdornment, InputLabel} from "@mui/material";


const Utilities = (props: {utilities: any, setUtilities: any; onKeyDown: any}) => {

    const {utilities, setUtilities, onKeyDown} = props;



    return (
        <>
            <FormControl fullWidth sx={{ m: 1, mt: 3, width: '25ch' }} variant="filled">
                <InputLabel htmlFor="filled-adornment-amount">Utilities</InputLabel>
                <FilledInput
                    id="filled-adornment-amount"
                    type="number"
                    onKeyDown={
                        onKeyDown
                    }
                    value={utilities}
                    onChange={e => setUtilities(parseFloat(e.target.value))}
                    startAdornment={<InputAdornment position="start">$</InputAdornment>}
                />
            </FormControl>
        </>
    )
}


export default Utilities;