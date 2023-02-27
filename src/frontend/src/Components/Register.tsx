import React, {useState, useEffect} from "react";
import axios from "axios";
import budgetService from '../Service/BudgetService';


const Register = (props: { onCreate: () => void; }) => {

    const [firstname, setFirstName] = useState("");
    const [lastname, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");


    const handleSubmit2 = (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        axios.post("http://localhost:8080/api/v1/auth/register",
            {firstname, lastname, email, password},
            {
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            })
            .then(res => {
                props.onCreate()
            })
            .catch(err => console.log(err))
    }

    const handleSubmit = (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        budgetService.registerUser({firstname, lastname, email, password})
            .then(res => {
                props.onCreate()
            })
            .catch(err => console.log(err))
    }





    return (
        <div>
            <h1> Register</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <p> First Name</p>
                    <input onChange={e => setFirstName(e.target.value)} className="form-control" />
                </div>
                <div>
                    <p> Last Name</p>
                    <input onChange={e => setLastName(e.target.value)} className="form-control" />
                </div>
                <div>
                    <p> Email</p>
                    <input onChange={e => setEmail(e.target.value)} className="form-control" />
                </div>
                <div>
                    <p> Password</p>
                    <input onChange={e => setPassword(e.target.value)} className="form-control" />
                </div>
                <button className='btn btn-success'> Submit</button>
            </form>
        </div>
    )
}


export default Register;