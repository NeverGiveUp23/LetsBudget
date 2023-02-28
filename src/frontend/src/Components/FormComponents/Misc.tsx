import React from "react";
import {FilledInput, FormControl, InputAdornment, InputLabel} from "@mui/material";


const Misc = (props: {misc: any, setMisc: any; onKeyDown: any}) => {

    const {misc, setMisc, onKeyDown} = props;



    return (
        <>
            <FormControl fullWidth sx={{ m: 1, mt: 3, width: '25ch' }} variant="filled">
                <InputLabel htmlFor="filled-adornment-amount">Misc.</InputLabel>
                <FilledInput
                    id="filled-adornment-amount"
                    type="number"
                    onKeyDown={
                        onKeyDown
                    }
                    value={misc}
                    onChange={e => setMisc(parseFloat(e.target.value))}
                    startAdornment={<InputAdornment position="start">$</InputAdornment>}
                />
            </FormControl>
        </>
    )
}


export default Misc;