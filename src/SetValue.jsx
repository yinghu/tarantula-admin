import { useState } from "react";
import Button from "./Button";
import Input from "./Input";

function SetValue(){
    
    const [key,setKey] = useState("");
    const [value,setValue] = useState("");
    const [debug,setDebug] = useState("");
    const save = ()=>{
        fetch(`http://192.168.1.11:8090/tarantula/presence/set/${key}/${value}`,
            {method:"GET",headers:{Accept:"application/json",'Content-Type':"application/json"}})
        .then(resp=>{
            return resp.json();
        })
        .then(data=>{
            setDebug(JSON.stringify(data));
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