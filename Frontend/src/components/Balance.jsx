export function Balance({value}) {
    return <div className="flex m-2">
        <div className="ml-3 text-gray-600 font-extrabold mr-2 pt-0 font-serif text-lg ">
            Your balance -
        </div>
        <div className="text-xl font-extrabold text-gray-700 ">
        Rs {value}
        </div>
    </div>
}