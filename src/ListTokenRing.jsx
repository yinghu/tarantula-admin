import { useState,useEffect,useContext } from "react";
import RingNode from "./RingNode";
import {token_ring} from "./Admin.mjs";
import AppCxt from "./AppCtx";

function loadTokenRing(callback){
    
}

function ListTokenRing(){
    const {token} = useContext(AppCxt);
    const [tokenRing,setTokenRing] = useState(null);
    useEffect(()=>{ 
        const iid = setInterval(()=>{ token_ring(token,data=>{
            setTokenRing(data);})},5000);
            return ()=>clearInterval(iid);
        },[]);
    return (
        <div>
            <div className="flex flex-row p-2 border-b-2 border-red-500">
                <span className="basis-1/5">NAME (virtual node)</span>
                <span className="basis-1/5">RING TOKEN (hash)</span>
                <span className="basis-1/5">ADDRESS</span>
                <span className="basis-1/5">META</span>
                <span className="basis-1/5">RPC</span>
            </div>
            {tokenRing && tokenRing.map((r,i)=>{
                    return  <RingNode node={r} key={i}/>
                })
            }
        </div>
    )
}
export default ListTokenRing