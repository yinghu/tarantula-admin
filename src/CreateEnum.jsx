import { useState,useContext } from "react";
import Input from "./Input"
import {MdAdd,MdRemove}  from 'react-icons/md';
import Button from "./Button";
import { post_json } from "./Admin.mjs";
import AppCxt from "./AppCtx";

function save_enum(token,payload,callback){
    const headers = {'Authorization' : `Bearer ${token}`};
    const path = 'admin/enum/save';
    post_json(path,headers,JSON.stringify(payload),callback);    
}

function CreateEnum(){
    const {token} = useContext(AppCxt)
    const [name,setName] = useState("");
    const [entry,setEntry] = useState("");
    const [value,setValue] = useState(0);
    const [entries,setEntries] = useState([]);
    
    const add =()=>{
        var updating = entries.slice();
        updating.push({Name:entry,Value:value/1});
        setEntries(updating);
    };
    const remove =(ix)=>{
        var updating = entries.toSpliced(ix,1);
        setEntries(updating);
    };
    const save =()=>{
        let obj ={Name:name,Values:entries};
        save_enum(token,obj,resp=>{
            console.log(resp);
        })
    };
    return (
        
        <div>
            <fieldset className="border-2 border-gray-200">
                <legend className="m-2">Enum</legend>
                    <div className="m-4">
                        <Input label="Name" type="text" value={name} changed={e=>setName(e.target.value)}/>
                        <Input label="Entry" type="text" value={entry} changed={e=>setEntry(e.target.value)}/>
                        <Input label="Value" type="number" value={value} changed={e=>setValue(e.target.value)}/>
                        <div className="relative h-6 bg-sky-200"><MdAdd className="absolute bottom-0 right-2 text-[24px] text-orange-400" onClick={add}/></div>
                        <ul className="m-2 drop-shadow-lg bg-red-100">
                            {entries.map((e,ix)=><li className="relative h-8 border-b-2" key={ix}><span className="absolute left-2 bottom-0">{e.Name} : {e.Value}</span><MdRemove onClick={()=>remove(ix)} className="absolute bottom-0 right-2 text-[24px] text-red-500"/></li>)}
                        </ul>
                        <hr className="border-2"/>
                        <div className="relative h-12"><span className="absolute top-2 right-2"><Button name="Save" action={save}/></span></div>
                    </div>
            </fieldset>
        </div>
    )
}
export default CreateEnum