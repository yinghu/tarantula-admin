import { useState,useContext } from "react";
import Button from "./Button";
import Input from "./Input";
import {key_ring} from "./Admin.mjs";
import AppCxt from "./AppCtx";

function KeyTokenRing(){
    const {token} = useContext(AppCxt);
    const [key,setKey] = useState("");
    const [debug,setDebug] = useState("");
    const get = ()=>{
        key_ring(token,key,(data)=>{
            setDebug(JSON.stringify(data));
        })    
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