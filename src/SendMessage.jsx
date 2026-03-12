import { useState,useContext } from "react"
import Input from "./Input"
import Button from "./Button";
import AppCxt from "./AppCtx";
import { post_json } from "./Admin.mjs";

function send_message(token,payload,callback){
    const headers = {'Authorization' : `Bearer ${token}`};
    const path = 'admin/cs/message/send';
    post_json(path,headers,JSON.stringify(payload),callback);    
}

function SendMessage(){
    const {token} = useContext(AppCxt);
    const [tag,setTag] = useState("");
    const [title,setTitle] = useState("");
    const [message,setMessage] = useState("");
    const [debug,setDebug] = useState("");

    const send =()=>{
        let payload ={tag:tag,title:title,message:message}; 
        send_message(token,payload,(resp)=>{
            setDebug(JSON.stringify(resp));
        });
    };
    return(
        <div>
            <p>{debug}</p>
            <fieldset className="border-2 border-gray-200">
                <legend className="m-2">Message</legend>
                    <div className="m-4">
                        <Input label="Tag" type="text" value={tag} changed={(e)=>{ setTag(e.target.value)}}/>
                        <Input label="Title" type="text" value={title} changed={(e)=>{ setTitle(e.target.value)}}/>
                        <Input label="Message" type="text" value={message} changed={(e)=>{ setMessage(e.target.value)}}/>
                        <hr className="border-2"/>
                        <div className="relative h-12"><span className="absolute top-2 right-2"><Button name="Send" action={send}/></span></div>
                    </div>
            </fieldset>
        </div>
    )
}

export default SendMessage