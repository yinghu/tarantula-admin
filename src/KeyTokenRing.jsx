import { useState } from "react";
import Button from "./Button";
import Input from "./Input";

function KeyTokenRing(){
    
    const [key,setKey] = useState("");
    const [debug,setDebug] = useState("");
    const get = ()=>{
        fetch(`http://192.168.1.11:8090/tarantula/presence/keyring/${key}`,
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
                <div className="flex items-center justify-between">
                    <Button name='KeyRing' action={get}/>
                </div>
            </form>
        </div>
    );
}

export default KeyTokenRing