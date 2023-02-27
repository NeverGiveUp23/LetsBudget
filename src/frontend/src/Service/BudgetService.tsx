import axios from "axios";

const axiosInstance = axios.create({
    baseURL: 'http://localhost:8080/api',
    timeout: 1000,
    headers: {
        'Content-Type': 'application/json'
    }
})


class BudgetService{

    registerUser(data: any){
        return axiosInstance.post(`/v1/auth/register`, data)
    }

    getAllBudgets(){
        return axiosInstance.get("/budget")
    }

    postBudgetForm(data: any){
        return axiosInstance.post("/budget", data)
    }

    deleteBudget(id: number){
        return axiosInstance.delete(`/budget/${id}`)
    }

}

export default new BudgetService();