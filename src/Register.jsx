import { useState } from "react";
import Button from "./Button";
import Input from "./Input";
import { post_json } from "./Admin.mjs";
function Register(){
    const [user,setUser] = useState("");
    const [password,setPassword] = useState("");
    const reg = ()=>{
        let login ={name:user,password:password};
        console.log(login);
        post_json("presence/register",{},JSON.stringify(login),resp=>{
            console.log(resp);
        });
    };
    return(
         <div className="w-full max-w-xs">
            <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                <div className="mb-4">
                    <Input label="User Name :" changed={e=>{setUser(e.target.value)}} type="text" value={user} prompt="user name"/>
                </div>
                <div className="mb-6">
                    <Input label="Password :" changed={e=>{setPassword(e.target.value)}} type="password" value={password} prompt="********"/>
                </div>
                <div className="flex items-center justify-between">
                    <Button name='Register' action={reg}/>
                </div>
            </form>
        </div>
    )
}

export default Register