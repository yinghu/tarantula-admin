import Button from "./Button";
import Input from "./Input";
import Checkbox from "./Checkbox";
import {MdAdd,MdRemove}  from 'react-icons/md';
import { useContext, useState } from "react";
import AppCxt from "./AppCtx";
import Select from "./Select";
import { post_json,get_json } from "./Admin.mjs";

function save_category(token,payload,callback){
    const headers = {'Authorization' : `Bearer ${token}`};
    const path = 'admin/category/save';
    post_json(path,headers,JSON.stringify(payload),callback);    
}
function load_categories(token,callback){
    const headers = {'Authorization' : `Bearer ${token}`};
    const path = 'admin/category/load/0/scope/2/commodity';
    get_json(path,headers,callback);
}


function CreateCategory(){
    const {typeList,token,unit} = useContext(AppCxt);
    //header
    const [name,setName] = useState("");
    const [description,setDescription] = useState("");
    const [rechargeable,setRechargeable] = useState(false);
    
    //property
    const [property,setProperty] = useState("");
    const [type,setType] = useState("");
    const [nullable,setNullable] = useState(false);
    
    const [properties,setProperties] = useState([]);
    const [references,setReferences] = useState("");

    const typeChanged =(e)=>{
        setReferences(null);
        console.log(e.target.value); 
        if(e.target.value === 'list:undefined' || e.target.value === 'set:undefined' ){
                load_categories(token,resp=>{
                console.log(resp);
                var ref = [];
                resp.map(c=>{
                    ref.push({Type:c.Name,Name:c.Name});
                });
                setReferences(ref);
            });
        }
        setType(e.target.value);
        let ex = -1;
        properties.map((e,i)=>{
            if (e.Name === property){
                ex = i;
            }
        });
        if (ex !== -1){
            let props = properties.toSpliced(ex,1);
            let ref = type.split(":");
            props.push({Name:property,Type:ref[0],Nullable:nullable,Reference:ref[1]});
            setProperties(props);
        }
    };
    const referenceChanged =(e)=>{
        console.log(e.target.value);
    };
    const save =()=>{
        let cat ={Scope:unit,Name:name,Description:description,Rechargeable:rechargeable};
        cat.Properties =properties;
        save_category(token,cat,resp=>{
            console.log(resp);
        });
    };
    const add =()=>{
        let updating = properties.slice();
        let ref = type.split(":");
        updating.push({Name:property,Type:ref[0],Nullable:nullable,Reference:ref[1]});
        setProperties(updating);
    };
    const remove =(ix)=>{
        var updating = properties.toSpliced(ix,1);
        setProperties(updating);
    };
    return (
        <div>
            <fieldset className="border-2 border-gray-200 m-2">
                <legend className="m-2">Category:Header</legend>
                    <div className="m-4">
                        <Input label="Name" type="text"  changed={e=>setName(e.target.value)}/>
                        <Input label="Description" type="text"  changed={e=>setDescription(e.target.value)}/>
                        <Checkbox label="Rechargeable" changed={e=>setRechargeable(e.target.checked)}/>
                    </div>
            </fieldset>
            <fieldset className="border-2 border-gray-200 m-2">
                <legend className="m-2">Category:Properties</legend>
                <div className="m-4">
                    <Input label="Name" type="text"  changed={e=>setProperty(e.target.value)}/>
                    <Select changed={typeChanged} name="Type" title="Choose A Type" data={typeList.Commons}/>
                    <Checkbox label="Nullable" changed={e=>setNullable(e.target.checked)}/>
                    {references && <Select changed={referenceChanged} name="Reference" title="Choose A Reference" data={references}/>}
                </div>
                <div className="relative h-6 bg-sky-200"><MdAdd className="absolute bottom-0 right-2 text-[24px] text-orange-400" onClick={add}/></div>
                <ul className="m-2 drop-shadow-lg bg-red-100">
                    {properties.map((e,ix)=><li className="relative h-8 border-b-2" key={ix}><span className="absolute left-2 bottom-0">{e.Name} : {e.Type}</span><MdRemove onClick={()=>remove(ix)} className="absolute bottom-0 right-2 text-[24px] text-red-500"/></li>)}
                </ul>
            </fieldset>
            <hr className="border-2"/>
            <div className="relative h-12"><span className="absolute top-2 right-2"><Button name="Save" action={save}/></span></div>     
        </div>
    )
}
export default CreateCategory