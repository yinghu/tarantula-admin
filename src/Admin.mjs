const url ="http://192.168.1.11"

export function get_json(path,headers,callback){
    fetch(`${url}/${path}`,{
                method:'GET',
                headers:headers
            })
            .then((resp) => {
                if(!resp.ok) throw new Error(`http error : ${resp.statusText}`);
                return resp.json();
            })
            .then((data) => {
                callback(data);
            })
            .catch(err=>{
                console.log(err);
            });
}

export function post_json(path,headers,payload,callback){
    fetch(`${url}/${path}`,{
                method:'POST',
                headers:headers,
                body:payload
            })
            .then((resp) => {
                if(!resp.ok) throw new Error(`http error : ${resp.statusText}`);
                return resp.json();
            })
            .then((data) => {
                callback(data);
            })
            .catch(err=>{
                console.log(err);    
            });
}

export function login(u,p,callback){
    const payload = JSON.stringify({login:u,password:p}); 
    post_json("admin/login",{},payload,callback);
}

export function task_list(token,callback){
    const headers = {'Authorization' : `Bearer ${token}`};
    const path = "admin/webprotected/task.list.json"; 
    get_json(path,headers,(tlist)=>{
        callback(tlist)
    });
}

export function type_list(token,callback){
    const headers = {'Authorization' : `Bearer ${token}`};
    const path = "admin/webprotected/type.list.json"; 
    get_json(path,headers,(tlist)=>{
        callback(tlist)
    });
}

export function env(token,callback){
    const headers = {'Authorization' : `Bearer ${token}`};
    const path = "admin/env"; 
    get_json(path,headers,(tlist)=>{
        callback(tlist)
    });
}

export function category_list(token,category,scope,callback){
    const headers = {'Authorization' : `Bearer ${token}`};
    const path = `admin/category/load/0/scope/${scope}/${category}`;
    get_json(path,headers,(clist)=>{
        callback(clist)
    });   
}

export function instance_list(token,category,callback){
    const headers = {'Authorization' : `Bearer ${token}`};
    const path = `admin/config/load/0/${category}/10`;
    get_json(path,headers,(clist)=>{
        callback(clist)
    });   
}