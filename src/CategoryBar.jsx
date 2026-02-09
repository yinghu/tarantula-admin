import { useContext } from "react";
import AppCxt from "./AppCtx";
import CategoryItem from "./CategoryItem";

function CategoryBar(){
    const {unit,categoryList} = useContext(AppCxt);
    return (
        <fieldset className="border-2 border-gray-200">
            <legend className="m-2">Categories</legend>
            {categoryList && categoryList.map((c)=>{
                if (c.Scope == unit){
                    return <CategoryItem key={c.Id} name={c.Name}/>
                }          
            })}
        </fieldset>
    )

}

export default CategoryBar