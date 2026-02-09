import { useContext } from "react"
import {MdClose}  from 'react-icons/md';
import AppCxt from "./AppCtx"
import EditCategory from "./EditCategory";
import CreateCategory from "./CreateCategory";
import CreateEnum from "./CreateEnum";
import CreateInstance from "./CreateInstance";
import EditInstance from "./EditInstance";
import ListTokenRing from "./ListTokenRing";
function ConfigurationEditor(){
    const {category,setCategory} = useContext(AppCxt);
    const cls = ()=>{
        setCategory(null);       
    }
    return (
        <div>
            <div className="relative h-8 bg-sky-500"><MdClose className="absolute bottom-1 right-2 text-[24px] text-red-500" onClick={cls}/></div>
            {category.type ==1 && <CreateInstance/>}     
            {category.type ==2 && <EditInstance/>}    
            {category.type ==3 && <EditCategory/>}
            {category.type ==4 && <CreateCategory/>}
            {category.type ==5 && <CreateEnum/>}
            {category.type ==6 && <ListTokenRing/>}
        </div>
    )
}
export default ConfigurationEditor