import { useParams } from "react-router-dom"
import React,{useEffect, useState} from 'react'
import { MoreProduct } from "../components/MoreProduct"
// import Rating from "../components/Rating"
import { useProdContext } from "../provider/ProdData"
import { Slider } from "../components/homepage/Slider"

export const ProductDetail =()=>{
    const {prodInfo}=useProdContext()
    let {prodId} = useParams();
    const [count, setCount]= useState(1)
    const [currentView,setCurrentView]=useState({})
    useEffect(()=>{
      prodInfo?.items?.map(product=>{
        if(product.id === prodId) setCurrentView(product) 
        return product;
      })
    },[])
return(
    <div className="flex-col w-screen-sm px-4 gap-3">
        <div id="mainProd">
          <div id="pictures"><Slider images={currentView?.img_links}/></div>
          <div id="prodDetails" className="flex flex-col gap-2 py-3">
            <div className="text-lg font-medium">{currentView?.name}</div>
            <div className="flex gap-3 text-md text-gray-400">Тоо ширхэг: 
              <div className="flex border border-gray-500 gap-2 rounded-sm w-1/5 justify-between px-2 text-black">
                <button onClick={()=>setCount(count - 1)}>-</button>
                <span>{count}</span>
                <button onClick={()=>setCount(count + 1)}>+</button>
              </div>
            </div>
          </div>
          <div id="priceInfo" className="border-t border-gray-300 py-3">
            <div className="flex flex-col text-xl font-bold px-1.5">
              <span>Үнэ: {currentView?.actual_price} ₮</span>
              <span className="text-red-700">{currentView?.price} ₮<span className="font-normal text-lg">sale</span></span>
            </div>
          </div>
        </div>
        <MoreProduct products={prodInfo}/>
    </div>
)
}