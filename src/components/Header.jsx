import {HiMenu,HiSearch, HiShoppingCart} from "react-icons/hi"
import { Link } from "react-router-dom"
import logo from '../assets/logo.png'
import { useActiveContext } from "../provider/IsActicve"
export const Header = ()=>{
    const headerContext=['Өнөөдрийн санал болгох', "Пуужингийн хүргэлт", "Тогтомол хүргэлт", "Купон"]
    const {setIsActive}=useActiveContext()
    return(
        <div>
            <div id="upperHeader" className="flex-col">
                <div className="h-9 w-full px-2 my-2 flex justify-between">
                    <div className="flex gap-2 w-1/2 items-center">
                        <Link to='category'>
                            <div className="w-10 h-10 flex justify-center items-center rounded-full border border-gray-300">
                                <HiMenu className="text-lg"/>
                            </div>
                        </Link>
                        <Link to='/'><img className="w-24 h-fit mt-2 ml-1" src={logo} alt=""/></Link>
                    </div>
                    <div className="flex flex-row h-full w-1/4 gap-2">
                        <div onClick={()=>setIsActive(false)} className="w-9 h-9 text-xl border border-gray-300 rounded-md px-1 py-1 flex justify-center items-center"><HiSearch/></div>
                        <div className="w-9 h-9 text-xl border border-gray-300 rounded-md px-1 py-1 flex justify-center items-center"><HiShoppingCart/></div>
                    </div>
                </div>
                <div className="w-full h-2 border-b border-gray-300"></div>
            </div>
            <div id="lowerHeader" className="flex overflow-x-scroll pr-3 scrollbar-hidden">
                {headerContext.map((text,id) =>{
                    return (<span key={id} className="text-xs text-center w-fit">{text}</span>)
                })}
            </div>
        </div>
    )
}