import { useState } from "react";
import Button from "./Button";
import Input from "./Input";

function SaveProduct(){
    
    const [name,setName] = useState("");
    const [price,setPrice] = useState("");
    const [expirationDate,setExpirationDate] = useState("");
    const [description,setDescription] = useState("");
    const [debug,setDebug] = useState("");
    const save = ()=>{
        let payload = {name:name,price:price,expirationDate:expirationDate,description:description};
        fetch("http://192.168.1.6:8080/product/save",
            {method:"POST",mode:"cors",headers:{Accept:"application/json",'Content-Type':"application/json"},body:JSON.stringify(payload)})
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
                    <Input label="Name :" changed={e=>{ setName(e.target.value)}} type="text" value={name} prompt="name"/>
                </div>
                <div className="mb-6">
                    <Input label="Price :" changed={e=>{ setPrice(e.target.value)}} type="number" value={price} prompt="price"/>
                </div>
                <div className="mb-6">
                    <Input label="Expiration Date :" changed={e=>{ setExpirationDate(e.target.value)}} type="date" value={expirationDate} prompt="expiration date"/>
                </div>
                <div className="mb-4">
                    <Input label="Description :" changed={e=>{ setDescription(e.target.value)}} type="text" value={description} prompt="description"/>
                </div>
                <div className="flex items-center justify-between">
                    <Button name='Save' action={save}/>
                </div>
            </form>
        </div>
    );
}

export default SaveProduct