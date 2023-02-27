import { useState } from 'react'
import {Routes, Route} from "react-router-dom";
import './App.css'
import Register from "./Components/Register";
import Main from "./Components/Main";

function App() {
    const [refresh, setRefresh] = useState(true)

    const updateList = ()=>{
        setRefresh(!refresh);
    }

  return (
      <div >
          <Routes>
              <Route element={<Register  onCreate={updateList}/>} path="/register"     />
              <Route element={<Main />} path="/dashboard"/>
          </Routes>
      </div>
  )
}

export default App
