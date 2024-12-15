
import { Button } from "./Button"

export function Users(params) {
    return <div className="">
        <div className="font-extrabold text-xl text-red-700 ml-3">
        Users
        </div>
        <div className="ml-3 mb-6 mr-3">
            <input className="w-full rounded-lg pl-1" type="text" placeholder="Search users..."/>
        </div>
        <div>
        <User user={"user"}/>
        </div>
    
    </div>
    
}

 function User({user}){
    return <div className="flex m-3 justify-between bg-slate-300 p-2 ">
        <div className="flex ">
            <div className=" h-10 w-10 m-1 text-white text-lg flex flex-col justify-center font-semibold rounded-full text-center bg-red-500 border-1">
                M
            </div>
          
                <div className=" font-semibold text-lg mt-2 ml-4">
                    Mohit 
                </div>
                <div className="font-semibold text-lg mt-2 ml-1">
                    Thakur
                 </div>
        </div>
        <div className="mb-2">
            <Button label={"Send Money"}/>
        </div>

    </div>

 }