import { Heading } from "../components/Heading";

export function Send(params) {
    return <div className="h-screen bg-red-200 flex flex-col justify-center">
        <div className="w-80 bg-white h-max m-auto border-2 rounded-md p-6">
       <div className="font-bold text-xl text-center">
        Send Money
       </div>

       <div className="flex py-4">
            <div className=" h-10 w-10 text-white text-lg flex flex-col ml-2 justify-center font-semibold rounded-full text-center bg-red-500 border-1">
                M
            </div>
          
                <div className=" font-bold text-gray-600 text-lg mt-1 ml-2">
                    Mohit 
                </div>
                <div className="font-bold text-gray-600 text-lg mt-1 ml-1">
                    Thakur
                 </div>
        </div>

        <div className=" text-xs font-semibold text-gray-600 ml-4 my-2">
        Amount(in Rs)
        </div>
        <div className="ml-3 mb-6 mr-3">
            <input className="w-full border-2 rounded-lg pl-1" type="text" placeholder="Enter amount"/>
        </div>

        <div>
        <button type="button" className="text-white w-full mt-3 bg-red-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5  dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">Initiate Transfer</button>
        </div>
        </div>

       
        
    </div>
}