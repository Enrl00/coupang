import { CatergoryBox } from "../components/homepage/Category"
import { ProdPromotion } from "../components/homepage/ProdPromotion"
import { Slider } from "../components/homepage/Slider"
import { useActiveContext } from "../provider/IsActicve"
import { Search } from "../components/Search"

export const Homepage =()=>{
    const images = ["https://source.unsplash.com/random/1280x500/?animals",
    "https://source.unsplash.com/random/1280x500/?nature", 
    "https://source.unsplash.com/random/1280x500/?forest",
    "https://source.unsplash.com/random/1280x500/?food" ]
    const {isActive}=useActiveContext()
    if(isActive){
        return(
            <div className="mb-14" >
                <Slider images={images}/>
                <CatergoryBox/>
                <ProdPromotion/>
            </div>
        )
    }else{
        return <Search/>
    }
} 