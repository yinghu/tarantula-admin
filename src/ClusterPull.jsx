import { useState,useContext } from "react";
import Input from "./Input";
import Button from "./Button";
import { get_json } from "./Admin.mjs";
import AppCxt from "./AppCtx";

function ClusterPull(){
    const {token} = useContext(AppCxt);
    const [ringToken,setRingToken] = useState("");
    const [limit,setLimit] = useState(10);
    const [debug,setDebug] = useState("");

    const cgt = ()=>{
        const headers = {'Authorization' : `Bearer ${token}`};
        get_json(`admin/cluster/pull/${ringToken}/${limit}`,headers,resp=>{
            setDebug(JSON.stringify(resp));        
        });
    };
    return(
        <div className="w-full max-w-xs">
            <p>{debug}</p>
            <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                <div className="mb-4">
                    <Input label="RingToken :" changed={e=>setRingToken(e.target.value)} type="text" value={ringToken} />
                </div>
                <div className="mb-4">
                    <Input label="Limit :" changed={e=>setLimit(e.target.value)} type="number" value={limit} />
                </div>
                <div className="flex items-center justify-between">
                    <Button name='Pull' action={cgt}/>
                </div>
            </form>
        </div>
    )
}

export default ClusterPull