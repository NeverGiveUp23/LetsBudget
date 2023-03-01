import React from "react";
import {Link} from "react-router-dom";


const RegisterComponent =(props: any) => {

    const {firstname, setFirstName, email, setEmail, password, setPassword, lastname, setLastName} = props;


    return (
        <>
            <div>
                <label htmlFor="firstname"
                       className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    First Name</label>
                <input type="text" name="firstname" id="email"
                       value={firstname}
                       onChange={e => setFirstName(e.target.value)}
                       className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                       placeholder="John " />
            </div>
            <div>
                <label htmlFor="lastname"
                       className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    Last Name</label>
                <input type="text" name="lastname" id="email"
                       value={lastname}
                       onChange={e => setLastName(e.target.value)}
                       className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                       placeholder=" Doe" />
            </div>
            <div>
                <label htmlFor="email"
                       className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    Your Email</label>
                <input type="email" name="email" id="email"
                       value={email}
                       onChange={e => setEmail(e.target.value)}
                       className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                       placeholder="John Doe" />
            </div>
            <div>
                <label htmlFor="password"
                       className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                <input type="password" name="password" id="password" placeholder="••••••••"
                       value={password}
                       onChange={e => setPassword(e.target.value)}
                       className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
            </div>
            <Link to={"/dashboard"}>
                <button type="submit"
                        className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Create
                    an account
                </button>
            </Link>
            <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                Already have an account? <a href="#"
                                            className="font-medium text-primary-600 hover:underline dark:text-primary-500">Login
                here</a>
            </p>
        </>
    )
}


export default RegisterComponent;