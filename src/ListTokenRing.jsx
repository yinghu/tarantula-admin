import { useState,useEffect } from "react";
import RingNode from "./RingNode";

function loadTokenRing(callback){
    fetch("http://192.168.1.11:8090/tarantula/presence/hashring",{
                method:'GET',
                headers:{}
            })
            .then((resp) => {
                if(!resp.ok) throw new Error(`http error : ${resp.statusText}`);
                return resp.json();
            })
            .then((data) => {
                callback(data);
            })
            .catch(err=>{
                console.log(err);
            });
}

function ListTokenRing(){
    const [tokenRing,setTokenRing] = useState(null);
    useEffect(()=>{ 
        const iid = setInterval(()=>{ loadTokenRing(data=>{
            setTokenRing(data);})},5000);
            return ()=>clearInterval(iid);
        },[]);
    return (
        <div>
            <div className="flex flex-row p-2 border-b-2 border-red-500">
                <span className="basis-1/3">NAME (virtual node)</span>
                <span className="basis-1/3">RING TOKEN (hash)</span>
                <span className="basis-1/3">ADDRESS</span>
            </div>
            {tokenRing && tokenRing.map((r,i)=>{
                    return  <RingNode name={r.name} address={r.address} ringToken={r.ringToken} key={i}/>
                })
            }
        </div>
    )
}
export default ListTokenRing