import { useState } from "react";
import Input from "./Input"
import {MdAdd,MdRemove}  from 'react-icons/md';
import Button from "./Button";

function CreateEnum(){
    const [name,setName] = useState();
    const [entry,setEntry] = useState();
    const [value,setValue] = useState();
    const [entries,setEntries] = useState([]);
    const nameChanged = (e)=>{
        setName(e.target.value);
    };
    const entryChanged = (e)=>{
        setEntry(e.target.value);
    };
    const valueChanged = (e)=>{
        setValue(e.target.value);
    };
    const add =()=>{
        console.log(`${name}:${entry}:${value}`);
        var updating = entries.slice();
        updating.push({entry:entry,value:value});
        setEntries(updating);
    };
    const remove =(ix)=>{
        var updating = entries.toSpliced(ix,1);
        setEntries(updating);
    };
    const save =()=>{
        console.log("save");
    };
    return (
        
        <div>
            <fieldset className="border-2 border-gray-200">
                <legend className="m-2">Enum</legend>
                    <div className="m-4">
                        <Input label="Name" type="text" value={name} changed={nameChanged}/>
                        <Input label="Entry" type="text" value={entry} changed={entryChanged}/>
                        <Input label="Value" type="number" value={value} changed={valueChanged}/>
                        <div className="relative h-6 bg-sky-200"><MdAdd className="absolute bottom-0 right-2 text-[24px] text-orange-400" onClick={add}/></div>
                        <ul className="m-2 drop-shadow-lg bg-red-100">
                            {entries.map((e,ix)=><li className="relative h-8 border-b-2" key={ix}><span className="absolute left-2 bottom-0">{e.entry} : {e.value}</span><MdRemove onClick={()=>remove(ix)} className="absolute bottom-0 right-2 text-[24px] text-red-500"/></li>)}
                        </ul>
                        <hr className="border-2"/>
                        <div className="relative h-12"><span className="absolute top-2 right-2"><Button name="Save" action={save}/></span></div>
                    </div>
            </fieldset>
        </div>
    )
}
export default CreateEnum