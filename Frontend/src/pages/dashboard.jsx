import { Appbar } from "../components/Appbar";
import { Balance } from "../components/Balance";
import {Users} from '../components/Users'

export function Dashboard(params) {
    return <div className="bg-red-100 h-screen">
        <Appbar/>
        <Balance value={"10,000"}/>
        <Users/>
    </div>
}