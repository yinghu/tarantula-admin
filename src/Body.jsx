import { useContext, useState } from "react";
import {MdHandyman}  from 'react-icons/md';
import {MdClose}  from 'react-icons/md';

import Login from "./Login.jsx";
import AppCxt from "./AppCtx.js";
import AdminItem from "./AdminItem.jsx";
import ToolBar from "./ToolBar.jsx";
import CategoryBar from "./CategoryBar.jsx";
import InstanceBar from "./InstanceBar.jsx";
import ConfigurationEditor from "./ConfigurationEditor.jsx";
import ErrorBar from "./ErrorBar.jsx";

function Body(){
    const {authenticated,unit,category,error} = useContext(AppCxt);
    
    return (
        <div className="flex flex-row h-screen">
            <div className="basis-1/3 shrink-0 bg-sky-200">
                {authenticated && <div className="flex flex-col scroll-auto">
                        <AdminItem name="Asset"/>
                        <AdminItem name="Component"/>
                        <AdminItem name="Commodity"/>
                        <AdminItem name="Item"/>
                        <AdminItem name="Store"/>
                        <AdminItem name="Tournament"/>
                        <AdminItem name="Resource"/>
                        <AdminItem name="Acheivement"/>
                        <AdminItem name="DailyLogin"/>
                        <AdminItem name="Cloud"/>
                        <AdminItem name="AdminTool"/>
                        <AdminItem name="CSTool"/>
                        <AdminItem name="APITool"/>
                    </div>
                }
            </div>
            
            <div className="basis-2/3 bg-white">
                <div className="relative h-16 border-b-2 bg-sky-400">
                    <span className="absolute bottom-4 left-2">{unit}</span>
                    <span className="absolute bottom-4 right-2 text-[24px] text-blue-500"><MdHandyman/></span>
                </div>
                <div className="m-2 justify-items-left">
                    {error && <ErrorBar info={error}/>}
                </div> 
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
                    {authenticated && <CategoryBar/>}
                </div>
                <div className="m-2 justify-items-left">
                    {authenticated && <InstanceBar/>}
                </div> 
                
            </div>
        </div>
    );
}

export default Body