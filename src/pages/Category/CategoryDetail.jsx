// import { useParams } from "react-router-dom"
import {HiHome,HiChevronRight,HiChevronDoubleRight} from "react-icons/hi"
import { Link } from "react-router-dom"
// import Rating from "../components/Rating"
import { useCurrentCategoryContext } from "../../provider/ProdData"
import {useProdContext} from '../../provider/ProdData'

export const CategoryDetail =()=>{
    // let {category_id} = useParams()
    // const {category}= useCategoryContext()
    const {prodInfo} =useProdContext()
    const {currentCategory}=useCurrentCategoryContext()
    // const [currentProd,setCurrentProd]=useState({})
    // useEffect(()=>{
    //     prodInfo.map((prod)=>{
    //         console.log('fff');
    //         prod.category === currentCategory && setCurrentProd(prod.data)
    //         // return prod
    //     })
    // },[])
    return(
        <div className="overflow-y-scroll">
            <div className="flex my-1 mx-2 bg-gray-400 border border-gray-300 gap-2 items-center pl-2">
                <HiHome className="text-white"/>
                <HiChevronDoubleRight className="text-white"/>
                <div className="text-white">Дэлгүүр</div>
                <HiChevronDoubleRight className="text-white"/>
                {/* {category.map((cat,ind)=>{
                    cat.id === category_id ? <div className="text-white">{cat.name}</div> :<div>error</div>
                })} */}
                <div className="text-white">{currentCategory.name}</div>
            </div>
            <div className="flex w-full  border-gray-300 flex-wrap mb-2">
                {currentCategory?.sub_categories?.map((subC,ind)=>{
                    return(
                        <Link to={`/${subC.id}`} className='w-1/3'><div className="flex justify-between w-full border-r border-gray-300 py-2 pl-2 items-center border text-xs" key={ind}>{subC.name} <HiChevronRight/></div></Link>
                    )
                })}
            </div>
            {
                prodInfo.items?.map((prod,ind)=>{
                    return <Link key={ind} to={`/products/${prod.id}`}><ProductInfo product={prod} id={ind}/></Link>
                })
            }
        </div>
    )
    
}
const ProductInfo = ({product,id})=>{
    return(
        <div className="flex border-b border-gray-300 mt-2 pb-2 gap-2 px-2" key={id}>
            <div className=" w-[30%] justify-center items-center">
                <img className="cover w-auto h-full "   src={product.img_links[0]} alt=""/>
            </div>
            <div className="w-3/5 flex flex-col gap-2 justify-center">
                <div>{product.name}</div>
                <Price price={product.price} actualPrice={product.actual_price} />
            </div>
        </div>
    )
}
const Price = ({price,actualPrice})=>{
    return(
        <div>
            {price !== actualPrice && <div className="w-full flex gap-1 text-xs"><span className="border-r bprder-gray-300 pr-1 text-red-500">Хямдрал</span><span className="line-through">{actualPrice} ₮</span></div>}
            <div className="text-red-500 font-semibold">{price} ₮</div>
        </div>
    )
}
