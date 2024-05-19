import {BrowserRouter,Routes,Route} from "react-router-dom"
import Login from "./Components/Login"
import Header from "./Components/Header"

function App() {
  
  

  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path="/" element={<Login/>}/>
        {/* <Route index element={}/> */}
        <Route/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
