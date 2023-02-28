import React, {useState} from "react";
import BudgetService from "../Service/BudgetService";
import CarPayment from "./FormComponents/CarPayment";
import Entertainment from "./FormComponents/Entertainment";
import Housing from "./FormComponents/Housing";
import Misc from "./FormComponents/Misc";
import Utilities from "./FormComponents/Utilities";
import Month from "./FormComponents/Month";


const BudgetForm = (props: { toggleDrawer: any; anchor: any }) => {

    const {toggleDrawer, anchor} = props;

    const [carPayment, setCarPayment] = useState(0);
    const [entertainment, setEntertainment] = useState(0);
    const [housing, setHousing] = useState(0);
    const [misc, setMisc] = useState(0);
    const [utilities, setUtilities] = useState(0);
    const [month, setMonth] = useState<string[]>([]);



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



    const onKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.keyCode === 13) { // check if the "Enter" key was pressed
            toggleDrawer(anchor, true)(event); // open the drawer
        }
    };

    return (
            <form onSubmit={handleBudgetForm}>
                    <CarPayment carPayment={carPayment} setCarPayment={setCarPayment} onKeyDown={onKeyDown} />
                    <Entertainment entertainment={entertainment} setEntertainment={setEntertainment} onKeyDown={onKeyDown}/>
                    <Housing housing={housing} setHousing={setHousing} onKeyDown={onKeyDown}/>
                    <Utilities utilities={utilities} setUtilities={setUtilities} onKeyDown={onKeyDown}/>
                    <Misc misc={misc} setMisc={setMisc} onKeyDown={onKeyDown}/>
                    <Month month={month} setMonth={setMonth} onKeyDown={onKeyDown}/>
            </form>
    )
}

export default BudgetForm;