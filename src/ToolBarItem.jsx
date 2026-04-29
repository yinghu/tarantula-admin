import { useContext } from "react";
import Button from "./Button"
import AppCxt from "./AppCtx";


function ToolBarItem({job}){
    const {setCategory,setHeader} = useContext(AppCxt);

    const act =()=>{
        setCategory({type:job.Type,target:{}});
        setHeader(job.Name);
    }
    return (
        <Button name={job.Name} action={act}/>
    )
}
export default ToolBarItem  