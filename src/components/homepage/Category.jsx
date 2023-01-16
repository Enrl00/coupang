import { Link } from "react-router-dom";
import { useCategoryContext } from "../../provider/ProdData";

export const CatergoryBox=()=>{
    const {category} = useCategoryContext() 
    return (
        <div className="h-1/5 w-full flex flex-wrap">
            {category.map((categor,i)=>{
                return(
                    <Link key={i} to={`${categor.id}`} className="w-1/4 h-[9vh] border-2 border-gray-300 flex justify-center items-center text-center">
                        <div  >
                            {/* <img src={categor.link} alt=""/> */}
                            <div className="text-xs">{categor.name}</div>
                        </div>
                    </Link>
                )
            })}
        </div>
    )
}