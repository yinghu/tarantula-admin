import { useContext } from "react";
import ToolBarItem from "./ToolBarItem";
import AppCxt from "./AppCtx";

function ToolBar(){
    
    const {taskList,unit} = useContext(AppCxt);

    return (
        <div>
            {
                taskList && taskList[unit].Jobs.map((job,ix)=>{
                    return <ToolBarItem key={ix} name={job.Name} action={job.Callback}/> 
                })
            }
        </div>
    )
}

export default ToolBar