export function InputBox({placeholder,label, onchange}) {
    return <div className="py-1">
        <div className="text-sm font-medium py-2 text-left">
        {label}
        </div>
        <input onChange={onchange} className="w-full py-2 px-1 rounded-lg" type="text" placeholder={placeholder}/>
    </div>
}