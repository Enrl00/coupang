import {HiOutlineChevronDown} from "react-icons/hi"
import { useCategoryContext } from "../provider/ProdData"
export const Category=()=>{
    const {category}=useCategoryContext()
    return(
        <div>
            <div className="pl-4 mt-4 text-gray-500">Ангилал</div>
            <div>
                {category.map((categor,ind)=>{
                    return<div key={ind} className="px-3 py-3 border-y border-gray-300 flex w-full justify-between">{categor.name} <HiOutlineChevronDown/></div>
                })}
            </div>
        </div>
    )
}
