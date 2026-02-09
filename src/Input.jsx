function Input(prop){
    return(
        <>
        <label className="block text-gray-700 text-sm font-bold mb-2">{prop.label}</label>
        <input onChange={prop.changed} className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" value={prop.value} type={prop.type} placeholder={prop.prompt}/>
        </>
    )
}
export default Input