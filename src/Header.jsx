import {MdOutlineDashboard,MdLogout}  from 'react-icons/md';
import { useContext } from "react";
import AppCxt from "./AppCtx.js";
function Header(){
    const {authenticated,setAuthenticated,setToken,setUnit,setCategory,setError} = useContext(AppCxt);
    const logout = ()=>{
        setToken("");
        setAuthenticated(false);
        setUnit("Welcome");
        setError(null);
        setCategory(null);
        
    }
    return (
        <div className="relative w-full h-32 bg-green-500 border-b-2 border-red-500">
            <span className="absolute top-2 left-2 text-[48px] text-red-200"><MdOutlineDashboard/></span>
            <span className="absolute bottom-0 left-2 text-[32px] text-red-200">Tarantula Admin Tool</span>
            {authenticated && <span onClick={logout} className="absolute top-2 right-2 text-[32px] text-red-200"><MdLogout/></span>}
            <span className="absolute bottom-0 right-2 text-[16px] text-red-200">Powered By Icodesoftare LLC</span>
        </div>
    );
}

export default Header