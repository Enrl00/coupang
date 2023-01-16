import { HiUserCircle } from "react-icons/hi"

export const UserProfile = ()=>{
    return(
        <div>
            <div>
                <div>
                    <HiUserCircle className='w-14 h-14'/>
                </div>
                <div>
                    <div className="flex justify-between px-3">
                        <div>Нэвтрэх</div>
                        <div className="flex gap-2">
                            <div>
                                <div>Coupan Money</div>
                                <div>- won</div>
                            </div>
                            <div>
                                <div>Coupang Cash</div>
                                <div>- won</div>
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-evenly">
                        <div>Review</div>
                        <div>Favorite Products</div>
                        <div>Recently Viewed</div>
                    </div>
                </div>
            </div>
            <div></div>
        </div>
    )
}