import * as React from 'react';
import BudgetForm from "./BudgetForm";
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';

type Anchor =  'Add Budget';

type State = {
    [key in Anchor]: boolean;
} & { [key: string]: boolean };

const anchorMapping: Record<Anchor, 'right'> = {
    'Add Budget': 'right',
};

export default function TemporaryDrawer() {
    const [state, setState] = React.useState({
        'Add Budget': false,
    });

    const toggleDrawer =
        (anchor: Anchor, open: boolean) =>
            (event: React.KeyboardEvent | React.MouseEvent) => {
                if (
                    event.type === 'keydown' &&
                    ((event as React.KeyboardEvent).key === 'Tab' ||
                        (event as React.KeyboardEvent).key === 'Shift')
                ) {
                    return;
                }

                setState({ ...state, [anchor]: open });
            };

    const list = (anchor: Anchor) => (
        <Box
            sx={{ width:  350 }}
            role="presentation"
            onClick={toggleDrawer(anchor, true)}
            onKeyDown={toggleDrawer(anchor, true)}
        >
            <BudgetForm toggleDrawer={toggleDrawer} anchor={anchor}/>
            <Divider />
        </Box>
    );

    return (
        <div>
            {([ 'Add Budget'] as const).map((anchor) => (
                <React.Fragment key={anchor}>
                    <Button onClick={toggleDrawer(anchor, true)}>{anchor}</Button>
                    <Drawer
                        anchor={anchorMapping[anchor]}
                        open={state[anchor]}
                        onClose={toggleDrawer(anchor, false)}
                    >
                        {list(anchor)}
                    </Drawer>
                </React.Fragment>
            ))}
        </div>
    );
}