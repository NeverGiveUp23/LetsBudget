import React from "react";
import {FilledInput, FormControl, InputAdornment, InputLabel, MenuItem, Select, SelectChangeEvent} from "@mui/material";
import {Theme, useTheme} from "@mui/material/styles";


const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
    PaperProps: {
        style: {
            maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
            width: 250,
        },
    },
};

const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
]

const Month = (props: {month: any, setMonth: any; onKeyDown: any}) => {

    const {month, setMonth, onKeyDown} = props;

    const theme = useTheme();


    function getStyles(months: string[], month: string, theme: Theme) {
        return {
            fontWeight: months.indexOf(month) === -1
                ? theme.typography.fontWeightRegular
                : theme.typography.fontWeightMedium,
        };
    }

    const handleChange = (event: SelectChangeEvent<typeof month>) => {
        const {
            target: { value },
        } = event;
        setMonth(
            typeof value === 'string' ? value.split(',') : (value as string[]),
        );
    };


    return (
        <>
            <FormControl fullWidth sx={{ m: 1, mt: 3, width: '25ch' }} variant="filled">
                <InputLabel htmlFor="filled-adornment-amount">Month</InputLabel>
                <Select
                    labelId="demo-multiple-name-label"
                    id="demo-multiple-name"
                    multiple
                    onKeyDown={onKeyDown }
                    MenuProps={MenuProps}
                    value={month}
                    onChange={handleChange}
                >
                    {months.map((month, i) => (
                        <MenuItem
                            key={i}
                            value={month}
                            style={getStyles(months, month, theme )}
                        >{month}</MenuItem>
                    ))}
                </Select>
            </FormControl>
        </>
    )
}


export default Month;