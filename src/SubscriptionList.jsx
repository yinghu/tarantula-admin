import { useState,useEffect,useContext } from "react";
import {get_json} from "./Admin.mjs";
import AppCxt from "./AppCtx";


function sub_list(token,key,callback){
    const headers = {'Authorization' : `Bearer ${token}`};
    const path = `admin/presence/subscription/${key}`;
    get_json(path,headers,(clist)=>{
        callback(clist)
    });    
}


function Subscription({sub}){
    return (
        <div className="flex flex-row p-2 border-b border-red-500">
            <span className="basis-1/4">{sub.nodeId}</span>
            <span className="basis-1/4">{sub.tag}</span>
            <span className="basis-1/4">{sub.name}</span>
            <span className="basis-1/4">{sub.endpoint}</span>
        </div>
    )
}

function SubscriptionList({name}){
    const {token} = useContext(AppCxt);
    const [subs,setSubs] = useState(null);
    useEffect(()=>{ 
        const iid = setInterval(()=>{ sub_list(token,name,data=>{
            setSubs(data);
        })},5000);
            return ()=>clearInterval(iid);
        },[]);
    return (
        <div>
            <div className="flex flex-row p-2 border-b border-red-500">
                <span className="basis-1/4">NODE ID</span>
                <span className="basis-1/4">TAG</span>
                <span className="basis-1/4">NAME</span>
                <span className="basis-1/4">ENDPOINT</span>
            </div>
            {subs && subs.map((r,i)=>{
                    return  <Subscription sub={r} key={i}/>
                })
            }
        </div>
    )
}
export default SubscriptionList