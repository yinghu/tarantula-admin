import {MdKeyboardDoubleArrowRight}  from 'react-icons/md';
import { useContext} from "react";
import AppCxt from "./AppCtx.js";
import {category_list} from "./Admin.mjs";

function AdminItem(prop){
    const {token,unit,setUnit,taskList,setCategoryList} = useContext(AppCxt);
    const onUnit = ()=>{
        setUnit(prop.name);
        let tsk = taskList[prop.name];
        category_list(token,tsk.Name,tsk.ScopeSequence,clist=>{
            setCategoryList(clist);
        });
    };
    return (
        <div onClick = {onUnit} className="relative w-full h-16 bg-green-500 border-b-2 border-red-500">
            { unit == prop.name && <span className="absolute top-4 right-2 text-[32px] text-red-200"><MdKeyboardDoubleArrowRight/></span>}
            <span className="absolute bottom-4 left-2 text-[16px] text-red-200">{prop.name}</span>    
        </div>
    )
}

export default AdminItem