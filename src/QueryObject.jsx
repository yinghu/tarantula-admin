import { useState,useContext } from "react"
import Input from "./Input"
import Button from "./Button";
import AppCxt from "./AppCtx";
import { post_json } from "./Admin.mjs";

function query_object(topic,payload,token,callback){
    const headers = {'Authorization' : `Bearer ${token}`};
    const path = `admin/cs/query/object/${topic}`;
    post_json(path,headers,JSON.stringify(payload),callback);    
}

function QueryObject(){
    const {token} = useContext(AppCxt);
    const [topic,setTopic] = useState("");
    const [tag,setTag] = useState("msg");
    const [startTime,setStartTime] = useState("");
    const [endTime,setEndTime] = useState("");
    const [debug,setDebug] = useState("");
    const [limit,setLimit] = useState(10);
    const [offset,setOffset] = useState(0);
    
    const query =()=>{
        let exp={Tag:tag,StartTime: new Date(startTime).toISOString(),EndTime:new Date(endTime).toISOString(),Limit:limit/1,Offset:offset/1};
        query_object(topic,exp,token,(resp)=>{
            setDebug(JSON.stringify(resp));
        });
    };
    return(
        <div>
            <p>{debug}</p>
            <fieldset className="border-2 border-gray-200">
                <legend className="m-2">Object</legend>
                    <div className="m-4">
                        <Input label="Topic" type="text" value={topic} changed={(e)=>{ setTopic(e.target.value)}}/>
                        <Input label="Tag" type="text" value={tag} changed={(e)=>{ setTag(e.target.value)}}/>
                        <Input label="StartTime" type="datetime-local" value={startTime} changed={(e)=>{ setStartTime(e.target.value)}}/>
                        <Input label="EndTime" type="datetime-local" value={endTime} changed={(e)=>{ setEndTime(e.target.value)}}/>
                        <Input label="Limit" type="number" value={limit} changed={(e)=>{ setLimit(e.target.value)}}/>
                        <Input label="Offset" type="number" value={offset} changed={(e)=>{ setOffset(e.target.value)}}/>
                        <hr className="border-2"/>
                        <div className="relative h-12"><span className="absolute top-2 right-2"><Button name="Query" action={query}/></span></div>
                    </div>
            </fieldset>
        </div>
    )
}

export default QueryObject