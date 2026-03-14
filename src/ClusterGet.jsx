import { useState,useContext } from "react";
import Input from "./Input";
import Button from "./Button";
import { get_json } from "./Admin.mjs";
import AppCxt from "./AppCtx";

function ClusterGet(){
    const {token} = useContext(AppCxt);
    const [key,setKey] = useState("");
    const [debug,setDebug] = useState("");

    const cgt = ()=>{
        const headers = {'Authorization' : `Bearer ${token}`};
        get_json(`presence/cluster/get/${key}`,headers,resp=>{
            setDebug(JSON.stringify(resp));        
        });
    };
    return(
        <div className="w-full max-w-xs">
            <p>{debug}</p>
            <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                <div className="mb-4">
                    <Input label="Key :" changed={e=>setKey(e.target.value)} type="text" value={key} />
                </div>
                <div className="flex items-center justify-between">
                    <Button name='Get' action={cgt}/>
                </div>
            </form>
        </div>
    )
}

export default ClusterGet