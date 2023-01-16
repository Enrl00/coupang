import { useState,useEffect } from "react"

export const Slider =()=>{
    const images = ["https://source.unsplash.com/random/1280x500/?animals",
    "https://source.unsplash.com/random/1280x500/?nature", 
    "https://source.unsplash.com/random/1280x500/?forest",
    "https://source.unsplash.com/random/1280x500/?food" ]


    const [isCurrent, setIsCurrent]=useState(0)
    useEffect(() => {
        let interval = setInterval(() => {
            isCurrent > images.length - 2 ? setIsCurrent(0) : setIsCurrent(isCurrent + 1);
        }, 2000);
        return () => clearInterval(interval);
      });
    
    return (
        <div id="slider" className="relative">
            <ul className="relative m-0 p-0 h-1/2">
              {images.map((img,i)=>{
                return (
                    <li key={i} className={`relative ${i === isCurrent ? 'block' : 'hidden'} m-0 p-0 text-center`}><img src={img} className='h-52' alt=""/></li>
                )
              })}
            </ul>  
            <div className='flex gap-2 justify-center bg-gray-500 relative bottom-6'>
                {images.map((img,ind)=>{
                    return (
                        <div key={ind}>
                            <input checked={isCurrent === ind && 'checked'} type="radio" name="slide" id="Slide1" />
                            <label className="bg-black opacity-50 hover:bg-green-500 hover:opacity-1 absolute cursor-pointer" id="s1"></label>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}