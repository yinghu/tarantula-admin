function Select(prop){
    return (
        <>
            <label className="block text-gray-700 text-sm font-bold mb-2">{prop.name}</label>                
            <select defaultValue="none" onChange={prop.changed} className="w-full h-8 border border-gray-300 mb-2">
                <option value="none" disabled>{prop.title}</option>
                {prop.data.map((c,ix)=>{
                    return <option key={ix} value={c.Type}>{c.Name}</option>
                })}
            </select>
        </>
    )
}
export default Select