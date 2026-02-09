import {instance_list} from "./Admin.mjs";
import { useContext, useState } from "react";
import AppCxt from "./AppCtx";
import InstanceItem from "./InstanceItem";

function InstanceBar(){
    const {token,unit,categoryList} = useContext(AppCxt);
    const [instances,setInstances] = useState([]);
    const selected = e=>{
        console.log(e.target.value);
        instance_list(token,e.target.value,ins=>{
            console.log(ins);
            setInstances(ins);
        });      
    };
    return (
        <fieldset className="border-2 border-gray-200">
            <legend className="m-2">Instances</legend>
                <div className="m-2">
                    <select defaultValue="none" onChange={selected} className="w-full border border-gray-300">
                        <option value="none" disabled>Select to load</option>
                        {categoryList && categoryList.map(c=>{
                            if (c.Scope==unit){
                                return <option key={c.Id} value={c.Name}>{c.Name}</option>
                            }
                        })}
                    </select>
                </div>
                <div>
                    {instances.map(c=>{
                        return <InstanceItem key={c.ItemId} name={c.ConfigurationName}/>          
                    })}
                </div>
                
        </fieldset>
    )
}

export default InstanceBar