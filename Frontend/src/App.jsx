import{BrowserRouter, Route, Routes} from "react-router-dom"
import { Signup } from "./pages/signup"
import { Signin } from "./pages/signin"
import { Dashboard } from "./pages/dashboard"
import { Send } from "./pages/send"
import { BottomWarning } from "./components/BottomWarning"


function App() {
  

  return (
    <>
    <BrowserRouter>
    {/* <BottomWarning label={"Already have an account"} buttonText={"Signin"} to={"/signup"}/> */}
    <Routes>

      <Route path="/signup" element={ <Signup/>}/>
      <Route path="/signin" element={ <Signin/>}/>
      <Route path="/dashboard" element={<Dashboard/>}/>
      <Route path="/send" element={<Send/>}/>

    </Routes>
    </BrowserRouter>

    </>
  )
}


export default App
