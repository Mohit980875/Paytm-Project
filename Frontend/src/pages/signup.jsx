import { BottomWarning } from "../components/BottomWarning";
import { Button } from "../components/Button";
import { Heading } from "../components/Heading";
import { InputBox } from "../components/InputBox";
import { SubHeading } from "../components/SubHeading";


export function Signup(params) {
    return <div className=" bg-slate-300 h-screen flex flex-col justify-center align-middle">
        <div className="bg-red-300 w-96 m-auto text-center p-4  h-max rounded-lg ">
            
            <Heading label={"SignUp"}/>
            <SubHeading label={"Enter your information to create an account"}/>
            <InputBox label ={"First Name"} placeholder={"Mohit"}/>
            <InputBox label ={"Last Name"} placeholder={"Thakur"}/>
            <InputBox label ={"Email"} placeholder={"mohit@gmail.com"}/>
            <InputBox label ={"Password"} placeholder={"123456"}/>
            <Button label={"Signup"}/>
            <BottomWarning label={"Already have an account"} to={"/signin"} buttonText={"Signin"}/>
           
        </div>
    </div>
}