export function Appbar(params) {
    return <div className="flex justify-between  bg-red-400 p-2 ">
        <div>
           <span className="text-blue-900 font-extrabold text-3xl"> Pay</span>
          <span className="text-sky-500 font-extrabold text-3xl">tm</span> 
        </div>
        <div className="flex mr-2 ">
            <div className="font-semibold text-xl m-2 mr-3">
                Hello
            </div>
            <div className=" px-4 text-blue-950 text-xl flex flex-col justify-center font-bold rounded-full text-center bg-slate-500">
                U
            </div>
        </div>
    </div>
}