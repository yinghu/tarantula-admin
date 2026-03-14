import { useContext } from "react";
import { useState } from "react"
import AppCxt from "./AppCtx";
import { post_json,get_json } from "./Admin.mjs";
import Input from "./Input"
import Button from "./Button";


function ClusterReset(){
    const {token} = useContext(AppCxt);

    const [key,setKey] = useState("");
    const [type,setType] = useState("");
    const [balance,setBalance] = useState(0);
    const [systemId,setSystemId] = useState("");
    const [revision,setRevision] = useState("");
    const [debug,setDebug] = useState("");
    const lod = ()=>{
        const headers = {'Authorization' : `Bearer ${token}`};
        get_json(`presence/cluster/get/${key}`,headers,resp=>{
            setDebug(JSON.stringify(resp));        
            setType(resp.type);
            setBalance(resp.balance);
            setSystemId(resp.systemId);
            setRevision(resp.rev);
        });
    };
    const upt = ()=>{
        let co ={key:key,type:type,balance:balance,systemId:systemId,rev:revision};
        const headers = {'Authorization' : `Bearer ${token}`};
        post_json("admin/cluster/reset",headers,JSON.stringify(co),resp=>{
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
                    <Input label="Revision :" changed={e=>setRevision(e.target.value)} type="text" value={revision}/>
                </div>
                <div className="flex items-left justify-between">
                    <Button name='Load' action={lod}/>
                    <Button name='Reset' action={upt}/>
                </div>
            </form>
        </div>
    )
}

export default ClusterReset