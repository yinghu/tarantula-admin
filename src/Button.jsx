function Button(prop){
    return (
       <button onClick={prop.action} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 m-1 rounded focus:outline-none focus:shadow-outline" type="button">{prop.name}</button> 
    )
}
export default Button