import { useContext } from "react";
import Button from "./Button"
import AppCxt from "./AppCtx";


function InstanceItem(prop){
    const {setCategory} = useContext(AppCxt);
    const act =()=>{
        console.log(`click it ${prop.name}`);
        setCategory({type:2,target:{}});
    }
    return (
        <Button name={prop.name} action={act}/>
    )
}
export default InstanceItem