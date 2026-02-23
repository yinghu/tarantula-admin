import { useContext } from "react";
import Button from "./Button"
import AppCxt from "./AppCtx";


function ToolBarItem(prop){
    const {setCategory} = useContext(AppCxt);

    const act =()=>{
        console.log(`click it [${prop.name}:${prop.action}]`);
        var type = 3;
        if (prop.action == 'create_new_category'){
            type = 4;
        }else if (prop.action == 'create_new_enum'){
            type = 5;
        }else if (prop.action =='list_token_ring'){
            type = 6;
        }else if (prop.action =='get_value'){
            type = 7;
        }else if (prop.action =='set_value'){
            type = 8;
        }
        else if(prop.action =='list_product'){
            type = 9;
        }
        else if(prop.action =='save_product'){
            type = 10;
        }
        else if(prop.action =='key_token_ring'){
            type = 11;
        }
        setCategory({type:type,target:{}});
    }
    return (
        <Button name={prop.name} action={act}/>
    )
}
export default ToolBarItem  