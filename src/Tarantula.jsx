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
    const [categoryList,setCategoryList] = useState([]);
    const [category,setCategory] = useState(null);
    const [instance,setInstance] = useState(null);
    const [error,setError] = useState(null);
    const [categoryAndInstanceBar,setCategoryAndInstanceBar] = useState(true);
    const [header,setHeader] = useState(null);
    
        
    const ctx = {authenticated,token,unit,taskList,categoryList,
        category,instance,setToken,setAuthenticated,setUnit,setTaskList,
        setCategoryList,setCategory,setInstance,error,setError,
        categoryAndInstanceBar,setCategoryAndInstanceBar,header,setHeader};
    return (
        <AppCxt value={ctx}>  
            <Header/>
            <Body/>
        </AppCxt>    
    );
}
export default Tarantula