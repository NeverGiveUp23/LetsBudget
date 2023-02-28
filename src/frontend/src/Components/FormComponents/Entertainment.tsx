import React from "react";
import {FilledInput, FormControl, InputAdornment, InputLabel} from "@mui/material";


const Entertainment = (props: {entertainment: any; setEntertainment: any; onKeyDown: any}) => {

    const {entertainment, setEntertainment, onKeyDown} = props;






    return (
        <>
            <FormControl fullWidth sx={{ m: 1, mt: 3, width: '25ch' }} variant="filled">
                <InputLabel htmlFor="filled-adornment-amount">Entertainment</InputLabel>
                <FilledInput
                    id="filled-adornment-amount"
                    type="number"
                    onKeyDown={
                        onKeyDown
                    }
                    value={entertainment}
                    onChange={e => setEntertainment(parseFloat(e.target.value))}
                    startAdornment={<InputAdornment position="start">$</InputAdornment>}
                />
            </FormControl>
        </>
    )
}


export default Entertainment;