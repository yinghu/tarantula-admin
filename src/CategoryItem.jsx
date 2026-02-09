import Button from "./Button"
import { useContext } from "react";
import AppCxt from "./AppCtx";

function CategoryItem(prop){
    const {unit,categoryList,setCategory} = useContext(AppCxt);
    const act =()=>{
        categoryList.map(c=>{
            if (c.Scope==unit &&c.Name==prop.name){
                setCategory({type:1,target:c});
            }    
        });
    }
    return (
        <Button name={prop.name} action={act}/>
    )
}
export default CategoryItem