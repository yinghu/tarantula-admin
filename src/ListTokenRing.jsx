import { useState,useEffect,useContext } from "react";
import {token_ring} from "./Admin.mjs";
import AppCxt from "./AppCtx";

function RingNode({node}){
    return (
        <div className="flex flex-row p-2 border-b border-red-500">
            <span className="basis-1/4">{node.name}</span>
            <span className="basis-1/4">{node.ringToken}</span>
            <span className="basis-1/4">{node.address}</span>
            <span className="basis-1/4">{node.rpc}</span>
        </div>
    )
}

function ListTokenRing(){
    const {token} = useContext(AppCxt);
    const [tokenRing,setTokenRing] = useState(null);
    useEffect(()=>{ 
        const iid = setInterval(()=>{ token_ring(token,data=>{
            console.log(data)
            setTokenRing(data);
        })},5000);
            return ()=>clearInterval(iid);
        },[]);
    return (
        <div>
            <div className="flex flex-row p-2 border-b-2 border-red-500">
                <span className="basis-1/4">NAME (virtual node)</span>
                <span className="basis-1/4">RING TOKEN (hash)</span>
                <span className="basis-1/4">ADDRESS</span>
                <span className="basis-1/4">RPC</span>
            </div>
            {tokenRing && tokenRing.map((r,i)=>{
                    return  <RingNode node={r} key={i}/>
                })
            }
        </div>
    )
}
export default ListTokenRing