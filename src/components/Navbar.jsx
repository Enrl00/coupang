import { Link } from "react-router-dom"
import { useActiveContext } from "../provider/IsActicve"

export const Navbar = ()=>{
    const {setIsActive} =useActiveContext()
    return (
        <div className="h-14 w-full flex justify-evenly fixed bottom-0 py-2 border-t border-gray-300 bg-white">
            <Link to='/'><div>Нүүр Хуудас</div></Link>
            <Link to='/category'><div>Ангилал</div></Link>
            <div onClick={(e)=>setIsActive(false)}>Хайх</div>
            <div>Миний Coupang</div>
        </div>
    )
}