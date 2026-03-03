import { useState } from "react";
import Button from "./Button";
import Input from "./Input";

function GetValue(){
    
    const [key,setKey] = useState("");
     const [factoryId,setFactoryId] = useState(1);
    const [classId,setClassId] = useState(1);
    const [debug,setDebug] = useState("");
    const get = ()=>{
        fetch(`http://192.168.1.11:8090/tarantula/presence/get/${factoryId}/${classId}/${key}`,
            {method:"GET",headers:{Accept:"application/json",'Content-Type':"application/x-www-form-urlencoded"}})
        .then(resp=>{
            return resp.json();
        })
        .then(data=>{
            console.log(data)
            setDebug(atob(data.Data));
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
                <div className="flex items-center justify-between">
                    <Button name='Get' action={get}/>
                </div>
            </form>
        </div>
    );
}

export default GetValue