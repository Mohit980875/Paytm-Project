import { BottomWarning } from "../components/BottomWarning";
import { Button } from "../components/Button";
import { Heading } from "../components/Heading";
import { InputBox } from "../components/InputBox";
import { SubHeading } from "../components/SubHeading";

export function Signin(params) {
       return <div className=" bg-slate-300 h-screen flex flex-col justify-center align-middle">
            <div className="bg-red-300 w-96 m-auto text-center p-4  h-max rounded-lg ">
                
                <Heading label={"SignIn"}/>
                <SubHeading label={"Enter your credentials to access your account"}/>
                <InputBox label ={"Email"} placeholder={"mohit@gmail.com"}/>
                <InputBox label ={"Password"} placeholder={"123456"}/>
                <Button label={"Sign in"}/>
                <BottomWarning label={"Don't have an account"} to={"/signup"} buttonText={"Signup"}/>
               
            </div>
        </div>
}