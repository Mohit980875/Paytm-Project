import { useEffect, useState } from "react";
import { Appbar } from "../components/Appbar";
import { Balance } from "../components/Balance";
import {Users} from '../components/Users'
import axios from 'axios';

export function Dashboard(params) {
    const[filter, setFilter] = useState("");
    const[users,setUsers] = useState([]);

    useEffect(() => {
    const fetchUsers = async ()=>{
       const res = await axios.get(`http://localhost:3000/api/v1/user/bulk?filter=${filter}`);
        setUsers(res.data.user);
     }

   fetchUsers();

    }, [filter])
    
    return <div className="bg-red-100 h-screen">
        <Appbar/>
        <Balance value={"10,000"}/>
        <Users users ={users} onchange={(e)=>setFilter(e.target.value)}/>
    </div>
}