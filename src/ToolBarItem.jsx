import { useContext } from "react";
import Button from "./Button"
import AppCxt from "./AppCtx";


function ToolBarItem({job}){
    const {setCategory} = useContext(AppCxt);

    const act =()=>{
        setCategory({type:job.Type,target:{}});
    }
    return (
        <Button name={job.Name} action={act}/>
    )
}
export default ToolBarItem  