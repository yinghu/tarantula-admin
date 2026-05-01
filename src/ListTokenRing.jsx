import { useState,useEffect,useContext } from "react";
import {token_ring} from "./Admin.mjs";
import AppCxt from "./AppCtx";

function RingNode({node}){
    return (
        <div className="flex flex-row p-2 border-b border-red-500">
            <span className="basis-1/5">{node.name}</span>
            <span className="basis-1/5">{node.ringToken}</span>
            <span className="basis-1/5">{node.address}</span>
            <span className="basis-1/5">{node.rpc}</span>
            <span className="basis-1/5">{node.meta}</span>
        </div>
    )
}

function ListTokenRing(){
    const {token} = useContext(AppCxt);
    const [tokenRing,setTokenRing] = useState(null);
    useEffect(()=>{ 
        const iid = setInterval(()=>{ token_ring(token,data=>{
            setTokenRing(data);
        })},5000);
            return ()=>clearInterval(iid);
        },[]);
    return (
        <div>
            <div className="flex flex-row p-2 border-b border-red-500">
                <span className="basis-1/5">NAME (virtual node)</span>
                <span className="basis-1/5">RING TOKEN (hash)</span>
                <span className="basis-1/5">GOSSIP (memberlist)</span>
                <span className="basis-1/5">RPC</span>
                <span className="basis-1/5">META</span>
            </div>
            {tokenRing && tokenRing.map((r,i)=>{
                    return  <RingNode node={r} key={i}/>
                })
            }
        </div>
    )
}
export default ListTokenRing