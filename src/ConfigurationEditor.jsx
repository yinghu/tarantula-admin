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
import QueryTopic from "./QueryTopic.jsx";
import QueryObject from "./QueryObject.jsx";

import Register from "./Register.jsx";
import ClusterCreate from "./ClusterCreate.jsx";
import ClusterGet from "./ClusterGet.jsx";
import ClusterUpdate from "./ClusterUpdate.jsx";
import ClusterReset from "./ClusterReset.jsx";
import ClusterDelete from "./ClusterDelete.jsx";
import SubscriptionList from "./SubscriptionList.jsx";

function ConfigurationEditor(){
    const {category,setCategory,header} = useContext(AppCxt);
    const cls = ()=>{
        setCategory(null);       
    }
    return (
        <div>
            <div className="relative h-8 bg-sky-500">
                <span className="absolute bottom-1 left-2 text-[16px] text-white">{header}</span>
                <MdClose className="absolute bottom-1 right-2 text-[24px] text-red-500" onClick={cls}/>
            </div>
            {category.type ==1 && <CreateInstance/>}     
            {category.type ==2 && <EditInstance/>}    
            {category.type ==3 && <EditCategory/>}
            {category.type ==4 && <CreateCategory/>}
            {category.type ==5 && <CreateEnum/>}
            {category.type ==12 && <CreateAccessKey/>}
            {category.type ==13 && <SendMessage/>}
            {category.type ==14 && <QueryTopic/>}
            {category.type ==15 && <QueryObject/>}
            {category.type ==16 && <Register/>}

            {category.type ==100 && <ListTokenRing/>}
            {category.type ==101 && <KeyTokenRing/>}
            {category.type ==102 && <SubscriptionList name="topic"/>}
            {category.type ==103 && <SubscriptionList name="task"/>}
            {category.type ==104 && <ClusterGet/>}
            {category.type ==105 && <ClusterReset/>}
            {category.type ==106 && <ClusterCreate/>}
            {category.type ==107 && <ClusterUpdate/>}
            {category.type ==108 && <ClusterDelete/>} 
        </div>
    )
}
export default ConfigurationEditor