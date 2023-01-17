import {HiOutlineChevronDown} from "react-icons/hi"
import { Link } from "react-router-dom"
import { useCategoryContext, useCurrentCategoryContext } from "../../provider/ProdData"
export const Category=()=>{
    const {category}=useCategoryContext()
    const {setCurrentCategory}=useCurrentCategoryContext()
    return(
        <div>
            <div className="pl-4 mt-4 text-gray-500">Ангилал</div>
            <div>
                {category.map((categor,ind)=>{
                    return<Link to={`/${categor.id}`} onClick={()=>setCurrentCategory(categor)}><div key={ind} className="px-3 py-3 border-y border-gray-300 flex w-full justify-between">{categor.name} <HiOutlineChevronDown/></div></Link>
                })}
            </div>
        </div>
    )
}
