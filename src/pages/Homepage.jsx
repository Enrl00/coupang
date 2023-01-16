import { CatergoryBox } from "../components/homepage/Category"
import { ProdPromotion } from "../components/homepage/ProdPromotion"
import { Slider } from "../components/homepage/Slider"
import { useActiveContext } from "../provider/IsActicve"
import { Search } from "../components/Search"

export const Homepage =()=>{
    const {isActive}=useActiveContext()
    if(isActive){
        return(
            <div className="mb-14" >
                <Slider/>
                <CatergoryBox/>
                <ProdPromotion/>
            </div>
        )
    }else{
        return <Search/>
    }
} 