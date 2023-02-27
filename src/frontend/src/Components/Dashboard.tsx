import React from "react";
import SideBar from "./Sidebar";


type DashboardProps = {
    budgets: any;
    updateList: () => void;
}
const Dashboard = (props: DashboardProps) => {
    const {budgets, updateList } = props









    return (
        <div>
            <div>
               <SideBar/>
                {budgets.map((budget: any, i: React.Key | null | undefined) => (
                    <div key={i}>
                        <h1>Car Payment: {budget.carPayment}</h1>
                        <h1>Rent Payment: {budget.entertainment}</h1>
                        <h1>Utility Payment: {budget.housing}</h1>
                    </div>
                ))}
            </div>


        </div>
    )
}


export default Dashboard;