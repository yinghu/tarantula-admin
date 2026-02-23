import { useEffect, useState } from "react";
import Button from "./Button";

function list_product(offset,callback){
    fetch(`http://192.168.1.6:8080/product/list/${offset}/10`,{
        method:'GET', mode:'cors',headers:{'Accept':'application/json'}
    }).then(resp=>{
        if (!resp.ok){
            throw new Error(resp.statusText);
        }
        return resp.json();  //have to return to next call  
    }).then(data=>{
        callback(data);
    }).catch(err=>{
        console.log(err);
    });

}

function Product({node}){//deconstruct
    return(
        <div className="flex flex-row p-2 border-b border-red-500">
            <span className="basis-1/5">{node.id}</span>
            <span className="basis-1/5">{node.name}</span>
            <span className="basis-1/5">{node.price}</span>
            <span className="basis-1/5">{node.expirationDate}</span>
            <span className="basis-1/5">{node.description}</span>
        </div>
    );
}

function to_sort(data){
    return data.toSorted((a,b)=>{
        //return new Date(a.expirationDate)-new Date(b.expirationDate);
        //return b.price-a.price; //asc  b-a desc
        return a.name.localeCompare(b.name); //asc (a,b ...)
    });
}

function ListProduct(){
    const [data,setData] = useState([]);
    const [offset,setOffset] = useState(0);
    const [load,setLoad] = useState(true);
    const [disabled,setDisabled] = useState(false);
    useEffect(()=>{
        if(!load){
            return;
        }
        setLoad(false);
        list_product(offset,data=>{
            if(data.length==0){
                setDisabled(true);
                setOffset(offset-10);
                return;
            }
            if(data.length<10){
                setDisabled(true);
                setData(to_sort(data));
                return;
            }
            setDisabled(false);
            setData(to_sort(data));
        });
        
    },[load]);
    const next = ()=>{
        setOffset(offset+10);
        setLoad(true);
    };
    const pre =()=>{
        setOffset(offset-10<=0?0:offset-10);
        setLoad(true);
    };
    return (
        <div>
            <div className="relative h-12">
                <span className="absolute top-2 left-2">
                    <button disabled={offset===0} onClick={pre} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 m-1 rounded focus:outline-none focus:shadow-outline" type="button">Previous</button> 
                </span>
                <span className="absolute top-2 right-2">
                    <button disabled={disabled} onClick={next} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 m-1 rounded focus:outline-none focus:shadow-outline" type="button">Next</button> 
                </span>
            </div>
            {
                data.map((p,i)=>
                    <Product node={p} key={i}></Product>
                )
            }
        </div>
    );
}

export default ListProduct