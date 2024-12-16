
import { useNavigate } from "react-router-dom"
import { Button } from "./Button"

export function Users({onchange,users}) {
    return <div className="">
        <div className="font-extrabold text-xl text-red-700 ml-3">
        Users
        </div>
        <div className="ml-3 mb-6 mr-3">
            <input onChange={onchange} className="w-full rounded-lg pl-1" type="text" placeholder="Search users..."/>
        </div>
        <div>
            {users.map((user,index)=> <User key={index} user={user}/>)}
    
        </div>
    
    </div>
    
}

 function User({user}){
    const navigate = useNavigate();
    return <div className="flex m-3 justify-between bg-slate-300 p-2 ">
        <div className="flex ">
            <div className=" h-10 w-10 m-1 text-white text-lg flex flex-col justify-center font-semibold rounded-full text-center bg-red-500 border-1">
                {user.firstName[0].toUpperCase()}
            </div>
          
                <div className=" font-semibold text-lg mt-2 ml-4">
                    {user.firstName}
                </div>
                <div className="font-semibold text-lg mt-2 ml-1">
                  {user.lastName}
                 </div>
        </div>
        <div className="mb-2">
            <Button onclick={()=>navigate(`/send?id=${user.userId}&firstName=${user.firstName}&lastName=${user.lastName}`)} label={"Send Money"}/>
        </div>

    </div>

 }