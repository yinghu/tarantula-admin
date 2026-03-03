import { useState } from "react";
import Button from "./Button";
import Input from "./Input";

function SetValue(){
    
    const [key,setKey] = useState("");
    const [value,setValue] = useState("");
    const [factoryId,setFactoryId] = useState(1);
    const [classId,setClassId] = useState(1);
    const [debug,setDebug] = useState("");
    const save = ()=>{
        fetch(`http://192.168.1.11:8090/tarantula/presence/set/${factoryId}/${classId}/${key}/${value}`,
            {method:"GET",headers:{Accept:"application/json",'Content-Type':"application/x-www-form-urlencoded"}})
        .then(resp=>{
            return resp.json();
        })
        .then(data=>{
            
            setDebug(JSON.stringify(JSON.parse(atob(data.Data))));
            console.log(data);
        })
        .catch(err=>{
            console.log(err);
        });
    };

    return (
       <div className="w-full max-w-xs">
            <p>{debug}</p>
            <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                <div className="mb-4">
                    <Input label="FactoryId :" changed={e=>{ setFactoryId(e.target.value)}} type="text" value={factoryId} prompt="factoryId"/>
                </div>
                <div className="mb-4">
                    <Input label="ClassId :" changed={e=>{ setClassId(e.target.value)}} type="number" value={classId} prompt="classId"/>
                </div>
                <div className="mb-4">
                    <Input label="Key :" changed={e=>{ setKey(e.target.value)}} type="text" value={key} prompt="key"/>
                </div>
                <div className="mb-6">
                    <Input label="Value :" changed={e=>{ setValue(e.target.value)}} type="text" value={value} prompt="value"/>
                </div>
                <div className="flex items-center justify-between">
                    <Button name='Save' action={save}/>
                </div>
            </form>
        </div>
    );
}

export default SetValue