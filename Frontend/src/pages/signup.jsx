import { useState } from "react";
import { BottomWarning } from "../components/BottomWarning";
import { Button } from "../components/Button";
import { Heading } from "../components/Heading";
import { InputBox } from "../components/InputBox";
import { SubHeading } from "../components/SubHeading";
import axios from 'axios';
import { useNavigate } from "react-router-dom";


export function Signup(params) {
    const navigate = useNavigate();

    const [firstName,setfirstName] = useState("");
    const [lastName,setlastName] = useState("");
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");

   async function onclick(params) {
       const res = await axios.post("http://localhost:3000/api/v1/user/signup",{
            username: email,
            firstName:firstName,
            lastName:lastName,
            password:password
        },{
            headers:{
                "Content-Type": "application/json"
            }
        })

        localStorage.setItem('token', res.data.token);
        navigate("/dashboard");
        
    }

    return <div className=" bg-slate-300 h-screen flex flex-col justify-center align-middle">
        <div className="bg-red-300 w-96 m-auto text-center p-4  h-max rounded-lg ">
            
            <Heading label={"SignUp"}/>
            <SubHeading label={"Enter your information to create an account"}/>
            <InputBox  label ={"First Name"} placeholder={"Mohit"} onchange={(e)=> setfirstName(e.target.value) }/>
            <InputBox label ={"Last Name"} placeholder={"Thakur"} onchange={(e)=> setlastName(e.target.value)}/>
            <InputBox label ={"Email"} placeholder={"mohit@gmail.com"} onchange={(e)=> setEmail(e.target.value)}/>
            <InputBox label ={"Password"} placeholder={"123456"}  onchange={(e)=> setPassword(e.target.value)}/>
            <Button label={"Signup"} onclick ={onclick}/>
            <BottomWarning label={"Already have an account"} to={"/signin"} buttonText={"Signin"}/>
           
        </div>
    </div>
}