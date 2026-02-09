import Button from "./Button";
import Input from "./Input";
import Checkbox from "./Checkbox";
import {MdAdd,MdRemove}  from 'react-icons/md';
import { useContext, useState } from "react";
import AppCxt from "./AppCtx";
import Select from "./Select";
function CreateCategory(){
    const {typeList} = useContext(AppCxt);
    const [name,setName] = useState();
    const [description,setDescription] = useState();
    const [rechargeable,setRechargeable] = useState();
    const [property,setProperty] = useState();
    const [type,setType] = useState();
    const [nullable,setNullable] = useState();
    const [properties,setProperties] = useState([]);
    const [references,setReferences] = useState();

    const nameChanged =(e)=>{
        setName(e.target.value);
    };
    const descriptionChanged =(e)=>{
        setDescription(e.target.value);
    };
    const rechargeableChanged =(e)=>{
        setRechargeable(e.target.checked);
    };
    const propertyChanged =(e)=>{
        setProperty(e.target.value);
    };
    const typeChanged =(e)=>{
        console.log(e.target.value);
        setReferences(null); 
        if(e.target.value == 'list' || e.target.value == 'set' ){
            var ref = [];
            ref.push({Type:"Icon",Name:"Icon"});
            ref.push({Type:"Chip",Name:"Chip"});
            setReferences(ref);
        }
        setType(e.target.value);
    };
    const nullableChanged =(e)=>{
        setNullable(e.target.checked);
    };
    const referenceChanged =(e)=>{
        console.log(e.target.value);
    };
    const save =()=>{
        console.log(`${name}:${description}:${rechargeable}`);
    };
    const add =()=>{
        console.log(`${property}:${type}:${nullable}`);
        var updating = properties.slice();
        updating.push({name:property,type:type,nullable:nullable});
        setProperties(updating);
    };
    const remove =(ix)=>{
        console.log(ix);
        var updating = properties.toSpliced(ix,1);
        setProperties(updating);
    };
    return (
        <div>
            <fieldset className="border-2 border-gray-200 m-2">
                <legend className="m-2">Category:Header</legend>
                    <div className="m-4">
                        <Input label="Name" type="text"  changed={nameChanged}/>
                        <Input label="Description" type="text"  changed={descriptionChanged}/>
                        <Checkbox label="Rechargeable" changed={rechargeableChanged}/>
                </div>
            </fieldset>
            <fieldset className="border-2 border-gray-200 m-2">
                <legend className="m-2">Category:Properties</legend>
                <div className="m-4">
                    <Input label="Name" type="text"  changed={propertyChanged}/>
                    <Select changed={typeChanged} name="Type" title="Choose A Type" data={typeList.Commons}/>
                    <Checkbox label="Nullable" changed={nullableChanged}/>
                    {references && <Select changed={referenceChanged} name="Reference" title="Choose A Reference" data={references}/>}
                </div>
                <div className="relative h-6 bg-sky-200"><MdAdd className="absolute bottom-0 right-2 text-[24px] text-orange-400" onClick={add}/></div>
                <ul className="m-2 drop-shadow-lg bg-red-100">
                    {properties.map((e,ix)=><li className="relative h-8 border-b-2" key={ix}><span className="absolute left-2 bottom-0">{e.name} : {e.type}</span><MdRemove onClick={()=>remove(ix)} className="absolute bottom-0 right-2 text-[24px] text-red-500"/></li>)}
                </ul>
            </fieldset>
            <hr className="border-2"/>
            <div className="relative h-12"><span className="absolute top-2 right-2"><Button name="Save" action={save}/></span></div>     
        </div>
    )
}
export default CreateCategory