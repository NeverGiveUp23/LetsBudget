import React from "react";
import {FilledInput, FormControl, InputAdornment, InputLabel} from "@mui/material";


const Housing = (props: {housing: any, setHousing: any; onKeyDown: any}) => {

    const {housing, setHousing, onKeyDown} = props;



    return (
        <>
            <FormControl fullWidth sx={{ m: 1, mt: 3, width: '25ch' }} variant="filled">
                <InputLabel htmlFor="filled-adornment-amount">Housing</InputLabel>
                <FilledInput
                    id="filled-adornment-amount"
                    type="number"
                    onKeyDown={
                        onKeyDown
                    }
                    value={housing}
                    onChange={e => setHousing(parseFloat(e.target.value))}
                    startAdornment={<InputAdornment position="start">$</InputAdornment>}
                />
            </FormControl>
        </>
    )
}


export default Housing;