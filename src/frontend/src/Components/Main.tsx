import React, {useEffect, useState} from "react";
import BudgetService from "../Service/BudgetService";
import Dashboard from "../Components/Dashboard";

const Main = () => {
    const [budgets, setBudgets] = useState([])
    const [refresh, setRefresh] = useState(true)

    const updateList = () => {
        setRefresh(!refresh);
    }


    useEffect(() => {
        BudgetService.getAllBudgets()
            .then(res => {
                setBudgets(res.data)
                updateList()
            })
            .catch(err => console.log(err))
    }, [refresh])



    return (
        <div>
            <Dashboard budgets={budgets} updateList={updateList} />
        </div>
    )
}

export default Main;