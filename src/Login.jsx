import { useContext, useState } from "react";
import {login,task_list} from "./Admin.mjs";
import AppCxt from "./AppCtx";
import Button from "./Button";
import Input from "./Input";

function Login(){
    const [name,setName] = useState("");
    const [password,setPassword] = useState("");
    const {setToken,setAuthenticated,setUnit,setTaskList,setError} = useContext(AppCxt);
    const handleName = (e)=>{
        setName(e.target.value);
    };
        const handlePassword = (e)=>{
        setPassword(e.target.value);
    };
    const auth = ()=>{
        login(name,password,data=>{
            if (!data.successful){
                setAuthenticated(false);
                setError(data.message)
                return;
            }
            setError(null);
            setToken(data.token);
            setUnit("Cloud");
            setAuthenticated(true);
            task_list(data.token,(tlist)=>{
                let tps = {};
                tlist.Tasks.forEach(t=>{
                    tps[t.Name]=t;
                });
                setTaskList(tps);                
            });
        });
    };
    return (
        <div className="w-full max-w-xs">
            <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                <div className="mb-4">
                    <Input label="User Name :" changed={handleName} type="text" value={name} prompt="user name"/>
                </div>
                <div className="mb-6">
                    <Input label="Password :" changed={handlePassword} type="password" value={password} prompt="********"/>
                </div>
                <div className="flex items-center justify-between">
                    <Button name='Sign In' action={auth}/>
                    <a className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" href="#">
                        Forgot Password?
                    </a>
                   
                </div>
            </form>
        </div>
    )
}

export default Login