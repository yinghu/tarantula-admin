import { useContext } from "react"
import {MdClose}  from 'react-icons/md';
import AppCxt from "./AppCtx"
import EditCategory from "./EditCategory";
import CreateCategory from "./CreateCategory";
import CreateEnum from "./CreateEnum";
import CreateInstance from "./CreateInstance";
import EditInstance from "./EditInstance";
import ListTokenRing from "./ListTokenRing";
import KeyTokenRing from "./KeyTokenRing.jsx";
import CreateAccessKey from "./CreateAccessKey.jsx";
import SendMessage from "./SendMessage.jsx";
import QueryMessage from "./QueryMessage.jsx";
import Register from "./Register.jsx";
import ClusterCreate from "./ClusterCreate.jsx";
import ClusterGet from "./ClusterGet.jsx";
import ClusterUpdate from "./ClusterUpdate.jsx";
import ClusterReset from "./ClusterReset.jsx";
import ClusterDelete from "./ClusterDelete.jsx";
import ClusterPull from "./ClusterPull.jsx";
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
            {category.type ==11 && <KeyTokenRing/>}
            {category.type ==12 && <CreateAccessKey/>}
            {category.type ==13 && <SendMessage/>}
            {category.type ==14 && <QueryMessage/>}
            {category.type ==15 && <QueryMessage/>}
            {category.type ==16 && <Register/>}
            {category.type ==100 && <ClusterCreate/>}
            {category.type ==101 && <ClusterGet/>}
            {category.type ==102 && <ClusterUpdate/>}
            {category.type ==103 && <ClusterReset/>}
            {category.type ==104 && <ClusterDelete/>} 
            {category.type ==105 && <ClusterPull/>}
        </div>
    )
}
export default ConfigurationEditor