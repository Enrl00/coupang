import { HiAdjustments, HiArrowRight, HiMinus, HiOutlineChevronRight, HiUserCircle } from "react-icons/hi"
import { Link } from "react-router-dom"

export const UserProfile = ()=>{
    return(
        <div>
            <div className="border-b-8 pb-3 border-gray-300">
                <div className="w-full flex justify-center h-32 from-indigo-300 to-white bg-gradient-to-b">
                    <HiUserCircle className='w-16 h-16 relative top-12'/>
                </div>
                <div>
                    <div className="flex gap-12 justify-center py-2">
                        <Link to='/login'><button className="w-fit border border-indigo-700 px-2 py-1 text-indigo-700 font-medium rounded-md flex items-center gap-2 hover:bg-indigo-700 hover:text-white">Нэвтрэх <HiArrowRight/></button></Link>
                        <div className="flex gap-2 w-1/2">
                            <div className="text-xs text-center">
                                <div>Coupan Money</div>
                                <div>- won</div>
                            </div>
                            <div className="text-xs text-center">
                                <div>Coupang Cash</div>
                                <div>- won</div>
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-evenly">
                        <div className="flex flex-col text-sm w-1/3 items-center"><HiMinus/>Үнэлгээ өгөх</div>
                        <div className="flex flex-col text-sm w-1/3 items-center"><HiMinus/>Таалагдсан</div>
                        <div className="flex flex-col text-sm w-1/3 items-center"><HiMinus/>Өмнө үзсэн</div>
                    </div>
                </div>
            </div>
            <div>
                <MoreInfo/>
                <MoreInfo/>
            </div>
        </div>
    )
}

const MoreInfo =()=>{
    return (
        <div className="flex justify-between p-3 border-y border-gray-300">
            <div className="w-3/4 flex items-center gap-2">
            <HiAdjustments className="h-5 w-5"/>
            (text)
            </div>
            <HiOutlineChevronRight/>
        </div>
    )
}