import { useContext, useState } from "react";
import {MdHandyman}  from 'react-icons/md';

import Login from "./Login.jsx";
import AppCxt from "./AppCtx.js";
import AdminItem from "./AdminItem.jsx";
import ToolBar from "./ToolBar.jsx";
import CategoryBar from "./CategoryBar.jsx";
import InstanceBar from "./InstanceBar.jsx";
import ConfigurationEditor from "./ConfigurationEditor.jsx";
import ErrorBar from "./ErrorBar.jsx";

function Body(){
    const {authenticated,unit,category,error,categoryAndInstanceBar} = useContext(AppCxt);
    
    return (
        <div className="flex flex-row h-screen">
            <div className="basis-1/4 shrink-0 bg-sky-200">
                {authenticated && <div className="flex flex-col scroll-auto">
                        <AdminItem name="Asset" listing="true"/>
                        <AdminItem name="Component" listing="true"/>
                        <AdminItem name="Commodity" listing="true"/>
                        <AdminItem name="Item" listing="true"/>
                        <AdminItem name="Store" listing="true"/>
                        <AdminItem name="Tournament" listing="true"/>
                        <AdminItem name="Resource" listing="true"/>
                        <AdminItem name="Achievement" listing="true"/>
                        <AdminItem name="DailyLogin" listing="true"/>
                        <AdminItem name="Cloud" listing="false"/>
                        <AdminItem name="AdminTool" listing="false"/>
                        <AdminItem name="CSTool" listing="false"/>
                        <AdminItem name="APITool" listing="false"/>
                    </div>
                }
            </div>
            
            <div className="basis-3/4 bg-white">
                <div className="relative h-16 border-b-2 bg-sky-400">
                    <span className="absolute bottom-4 left-4 text-[24px] text-red-500"><MdHandyman/></span>
                    <span className="absolute bottom-4 text-[24px] right-4">{unit}</span>
                </div>
                <div className="m-4 justify-items-center">{error && <ErrorBar info={error}/>}</div> 
                <div className="bg-white m-8 justify-items-center">
                    {!authenticated && <Login/>}     
                </div>
                <div className="m-2 justify-items-left">
                    {authenticated && <ToolBar/>}
                </div>
                <div className="m-2 justify-items-left">
                    {authenticated && category && <ConfigurationEditor/>}
                </div>
                <div className="m-2 justify-items-left">
                    {authenticated && categoryAndInstanceBar && <CategoryBar/>}
                </div>
                <div className="m-2 justify-items-left">
                    {authenticated && categoryAndInstanceBar && <InstanceBar/>}
                </div> 
                
            </div>
        </div>
    );
}

export default Body