import { useContext, useState} from "react"
import Input from "./Input"
import Button from "./Button";
import { post_json } from "./Admin.mjs";
import AppCxt from "./AppCtx";

function create_key(token,payload,callback){
    const headers = {'Authorization' : `Bearer ${token}`};
    const path = 'admin/accesskey';
    post_json(path,headers,JSON.stringify(payload),callback);    
}

function CreateAccessKey(){
    const {token} = useContext(AppCxt);
    const [expirationDate,setExpirationDate] = useState("");
    
    const create =()=>{
        let exp={ExpiryTime: new Date(expirationDate).toISOString(),Key:""};
        create_key(token,exp,k=>{
            console.log(k);
        });
    }
    return (
        
        <div>
            <fieldset className="border-2 border-gray-200">
                <legend className="m-2">AccessKey</legend>
                    <div className="m-4">
                        <Input label="ExpirationDate" type="dateTime-local" value={expirationDate} changed={(e)=>{ setExpirationDate(e.target.value)}}/>
                        <hr className="border-2"/>
                        <div className="relative h-12"><span className="absolute top-2 right-2"><Button name="Create" action={create}/></span></div>
                    </div>
            </fieldset>
        </div>
    )
}
export default CreateAccessKey