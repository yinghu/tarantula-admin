import './tarantula.css'
import Header from './Header.jsx'
import Body  from './Body.jsx';
import AppCxt from './AppCtx.js';
import { useState } from 'react';

function Tarantula(){
    
    const [token,setToken] = useState("");
    const [authenticated,setAuthenticated] = useState(false);
    const [unit,setUnit] = useState("Welcome");
    const [taskList,setTaskList] = useState(null);
    const [typeList,setTypeList] = useState(null);
    const [env,setEnv] = useState(null);
    const [categoryList,setCategoryList] = useState([]);
    const [category,setCategory] = useState(null);
    const [instance,setInstance] = useState(null);
    const [error,setError] = useState(null);
    
        
    const ctx = {authenticated,token,unit,taskList,typeList,env,categoryList,
        category,instance,setToken,setAuthenticated,setUnit,setTaskList,
        setTypeList,setEnv,setCategoryList,setCategory,setInstance,error,setError};
    return (
        <AppCxt value={ctx}>  
            <Header/>
            <Body/>
        </AppCxt>    
    );
}
export default Tarantula