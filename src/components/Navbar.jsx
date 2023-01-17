import { HiHome, HiMenu, HiSearch, HiUser } from "react-icons/hi"
import { Link } from "react-router-dom"
import { useActiveContext } from "../provider/IsActicve"

export const Navbar = ()=>{
    const {setIsActive} =useActiveContext()
    return (
        <div className="h-14 w-full flex justify-center fixed bottom-0 py-2 px-1 border-t border-gray-300 bg-white">
            <Link className="text-center text-xs w-1/4" to='/'><div className="flex flex-col items-center" onClick={()=>setIsActive(true)}><HiHome   className="w-7 h-7"/>Нүүр Хуудас</div></Link>
            <Link className="text-center text-xs w-1/4" to='/category'><div className="flex flex-col items-center"><HiMenu   className="w-7 h-7" />Ангилал</div></Link>
            <Link className="text-center text-xs w-1/4" to='/'><div className="flex flex-col items-center" onClick={(e)=>setIsActive(false)}><HiSearch className="w-7 h-7"/>Хайх</div></Link>
            <Link className="text-center text-xs w-1/4" to='/user'><div className="flex flex-col items-center"><HiUser   className="w-7 h-7"/>Миний Coupang</div></Link>
        </div>
    )
}