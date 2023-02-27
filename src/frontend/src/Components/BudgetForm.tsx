import React, {useState} from "react";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import BudgetService from "../Service/BudgetService";
import { Theme, useTheme } from '@mui/material/styles';
import {
    FilledInput,
    FormControl,
    InputAdornment,
    InputLabel,
    MenuItem,
    OutlinedInput,
    Select, SelectChangeEvent,
} from "@mui/material";

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
const BudgetForm = (props: { toggleDrawer: any; anchor: any }) => {

    const {toggleDrawer, anchor} = props;
    const theme = useTheme();

    const [carPayment, setCarPayment] = useState(0);
    const [entertainment, setEntertainment] = useState(0);
    const [housing, setHousing] = useState(0);
    const [misc, setMisc] = useState(0);
    const [utilities, setUtilities] = useState(0);
    const [month, setMonth] = useState<string[]>([]);




    function getStyles(months: string[], month: string[], theme: Theme) {
        return {
            fontWeight: month.every((m) => months.indexOf(m) === -1)
                    ? theme.typography.fontWeightRegular
                    : theme.typography.fontWeightMedium,
        };
    }





    const handleBudgetForm = (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        BudgetService.postBudgetForm({carPayment, entertainment, housing, misc, utilities, month})
            .then(res =>{
                setCarPayment(0);
                setEntertainment(0);
                setHousing(0);
                setMisc(0);
                setUtilities(0);
                setMonth([]);
            })
            .catch(err => console.log(err))
    }

    const handleChange = (event: SelectChangeEvent<typeof month>) => {
        const {
            target: { value },
        } = event;
        setMonth(
            typeof value === 'string' ? value.split(',') : (value as string[]),
        );
    };

    const onKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.keyCode === 13) { // check if the "Enter" key was pressed
            toggleDrawer(anchor, true)(event); // open the drawer
        }
    };

    return (
            <form onSubmit={handleBudgetForm}>
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
                <FormControl fullWidth sx={{ m: 1, mt: 3, width: '25ch' }} variant="filled">
                    <InputLabel htmlFor="filled-adornment-amount">Month</InputLabel>
                    <Select
                        labelId="demo-multiple-name-label"
                        id="demo-multiple-name"
                        multiple
                        onKeyDown={
                            onKeyDown
                        }
                        MenuProps={MenuProps}
                        value={month}
                        onChange={handleChange}
                    >
                        {[months].map((month, i) => (
                            <MenuItem
                            key={i}
                            value={month}
                            style={getStyles(months, month, theme )}
                            >{month}</MenuItem>
                        ))}
                    </Select>
                </FormControl>
            </form>
    )
}

export default BudgetForm;