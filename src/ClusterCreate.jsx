import { useContext } from "react";
import { useState } from "react"
import AppCxt from "./AppCtx";
import { post_json } from "./Admin.mjs";
import Input from "./Input"
import Button from "./Button";
import Checkbox from "./Checkbox";

function ClusterCreate(){
    const {token} = useContext(AppCxt);

    const [key,setKey] = useState("");
    const [type,setType] = useState("");
    const [balance,setBalance] = useState(0);
    const [systemId,setSystemId] = useState("");
    const [mutable,setMutable] = useState(true);
    const [debug,setDebug] = useState("");
    const crt = ()=>{
        let co ={key:key,type:type,balance:balance,systemId:systemId,mutable:mutable};
        const headers = {'Authorization' : `Bearer ${token}`};
        post_json("asset/cluster/create",headers,JSON.stringify(co),resp=>{
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
                <div className="mb-6">
                    <Input label="Type :" changed={e=>setType(e.target.value)} type="text" value={type}/>
                </div>
                <div className="mb-6">
                    <Input label="Balance :" changed={e=>setBalance(e.target.value/1)} type="number" value={balance}/>
                </div>
                <div className="mb-6">
                    <Input label="SystemId :" changed={e=>setSystemId(e.target.value)} type="text" value={systemId}/>
                </div>
                <div className="mb-6">
                    <Checkbox label="Mutable" changed={e=>setMutable(e.target.checked)} value={mutable}/>
                </div>
                <div className="flex items-center justify-between">
                    <Button name='Create' action={crt}/>
                </div>
            </form>
        </div>
    )
}

export default ClusterCreate