import { HiSearch, HiX } from "react-icons/hi"
import { useActiveContext } from "../provider/IsActicve"

export const Search = ()=>{
    const {setIsActive}=useActiveContext()
    return (
        <div className="h-screen w-screen z-50 bg-gray-300 border-t border-gray-300 mt-2 ">
            <div className="w-full h-fit bg-white flex pb-3  pl-2 pt-3">
                <div className="rounded-lg flex gap-1 border border-gray-500 w-10/12 items-center pl-2">
                    <HiSearch/>
                    <input className="outline-none placeholder:text-xs" placeholder="Хайх бараагаа бичнэ үү?"/>
                </div>
                <button className="w-2/12 flex justify-center items-center" onClick={(e)=>setIsActive(true)}><HiX/></button>
            </div>
        </div>
    )
}