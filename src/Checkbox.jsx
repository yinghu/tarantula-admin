function Checkbox(prop){
    return(
        <>
        <label className="block text-gray-700 text-sm font-bold mb-2">{prop.label}</label>
        <input onChange={prop.changed} className="w-4 h-4 border border-default-medium rounded-xs bg-neutral-secondary-medium focus:ring-2 focus:ring-brand-soft" type='checkbox'/>
        </>
    )
}
export default Checkbox