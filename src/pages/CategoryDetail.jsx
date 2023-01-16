import { useParams } from "react-router-dom"
import {HiHome,HiChevronRight,HiChevronDoubleRight} from "react-icons/hi"
import Rating from "../components/Rating"
import { useCategoryContext } from "../provider/ProdData"
import React,{ useEffect, useState } from "react"
import {useProdContext} from '../provider/ProdData'

export const CategoryDetail =()=>{
    let {category_id} = useParams()
    const {category}= useCategoryContext()
    const {prodInfo} =useProdContext()
    const [currentCategory,setCurrentCategory] = useState({})
    const [currentProd,setCurrentProd]=useState([])
    useEffect(()=>{
        category.map(el=>{
            el.id === category_id && setCurrentCategory(el)
            return el
        })
        prodInfo.map(async prod=>{
            await prod.category === category_id && setCurrentProd(prod.data)
        })
    },[])

 useEffect(()=>{
    console.log(currentProd)
 },[])
    return(
        <div className="overflow-y-scroll">
            <div className="flex my-1 mx-2 bg-gray-400 border border-gray-300 gap-2 items-center pl-2">
                <HiHome className="text-white"/>
                <HiChevronDoubleRight className="text-white"/>
                <div className="text-white">Дэлгүүр</div>
                <HiChevronDoubleRight className="text-white"/>
                <div className="text-white">{currentCategory.name}</div>
            </div>
            {/* <div className="flex w-full  border-gray-300">
                {currentCategory?.sub_categories.map((subC,ind)=>{
                    return(
                        <div className="flex justify-between w-1/3 border-r border-gray-300 py-2 pl-2 items-center border mb-5" key={ind}>{subC.name} <HiChevronRight/></div>
                    )
                })}
            </div> */}
            {/* <div>{currentProd.items.map((product,ind)=>{
                return <ProductDetail product={product} id={ind}/>
            })}</div> */}
        </div>
    )
    
}
const ProductDetail = ({product,id})=>{
    return(
        <div className="flex border-b border-gray-300 mb-3" key={id}>
            <div className="w-28 h-24"><img className="contain"  src={product.image} alt=""/></div>
            <div>
                <div>{product.name}</div>
                <div></div>
                <div>{product.freeshipping ? <span>Хүргэлттэй</span> : <span>Хүргэлтгүй</span>}</div>
                <Rating rating={product.rating}/>
            </div>
        </div>
    )
}