import { Link } from 'react-router-dom'
import Rating from '../Rating'
export const ProdPromotion = ()=>{
    const products = [
        {
          name: "Stevia Sweet Mild Stevia Coffee Mix, 950g, 1 pc",
          freeshipping: true,
          rating: 4976,
          isDiscounted: true,
          discountRate: 16,
          price:15500,
          image:
            "https://thumbnail9.coupangcdn.com/thumbnails/remote/292x292ex/image/vendor_inventory/9c53/49f4250828752dc6dd376b69539ce84cc6412624a8d548cce8be2a06c8f3.jpg",
        },
        {
          name: "G7 Black Coffee 100pcs",
          freeshipping: false,
          rating: 350,
          isDiscounted: false,
          discountRate: 0,
          image:
            "https://thumbnail6.coupangcdn.com/thumbnails/remote/292x292ex/image/vendor_inventory/e661/68384bc1d358463aef3d00719762b5a7c361683ee60971a74269e39839e9.jpg",
        },
        {
          name: "Stevia Sweet Mild Stevia Coffee Mix, 950g, 1 pc",
          freeshipping: true,
          rating: 4976,
          isDiscounted: true,
          discountRate: 16,
          price:15500,
          image:
            "https://thumbnail9.coupangcdn.com/thumbnails/remote/292x292ex/image/vendor_inventory/9c53/49f4250828752dc6dd376b69539ce84cc6412624a8d548cce8be2a06c8f3.jpg",
        },
        {
          name: "G7 Black Coffee 100pcs",
          freeshipping: false,
          rating: 350,
          isDiscounted: false,
          discountRate: 0,
          image:
            "https://thumbnail6.coupangcdn.com/thumbnails/remote/292x292ex/image/vendor_inventory/e661/68384bc1d358463aef3d00719762b5a7c361683ee60971a74269e39839e9.jpg",
        },
        {
          name: "Stevia Sweet Mild Stevia Coffee Mix, 950g, 1 pc",
          freeshipping: true,
          rating: 4976,
          isDiscounted: true,
          discountRate: 16,
          price:15500,
          image:
            "https://thumbnail9.coupangcdn.com/thumbnails/remote/292x292ex/image/vendor_inventory/9c53/49f4250828752dc6dd376b69539ce84cc6412624a8d548cce8be2a06c8f3.jpg",
        },
        {
          name: "G7 Black Coffee 100pcs",
          freeshipping: false,
          rating: 350,
          isDiscounted: false,
          discountRate: 0,
          image:
            "https://thumbnail6.coupangcdn.com/thumbnails/remote/292x292ex/image/vendor_inventory/e661/68384bc1d358463aef3d00719762b5a7c361683ee60971a74269e39839e9.jpg",
        },
      ]
    return (
        <div>
            <div>
                <div className='w-full h-12 bg-red-300 flex justify-center items-center text-white font-bold text-xl'>Today's Hot</div>
                {products.map((product,ind)=>{
                return <ProdBox product={product} id={ind}/>
                })}
            </div>
            <div>
            <div className='w-full h-12 bg-blue-300 flex justify-center items-center text-white font-bold text-xl'>Best of Today</div>
                {products.map((product,ind)=>{
                return <Link key={ind} to={`/product/${ind}`}><ProdBox product={product}/></Link>
                })}
            </div>
        </div>
    )
}
const ProdBox = ({product,id})=>{
    return (
        <div key={id} className="w-full h-1/3 border-y-4 border-gray-300 flex-col items-center">
            <img src={product.image} alt=""/>
            <div className='ml-2'>
                <div>{product.name}</div>
                <div>{product.price}вон</div>
                <Rating rating={product.rating}/>
            </div>
            <div className='border-t border-gray-300 py-1 mt-1'>{product.freeshipping ? <span className='text-green-500 pl-2 text-xs'>ҮНЭГҮЙ ХҮРГЭЛТЭЙ</span>:<span className='pl-2 text-xs'>ХҮРГЭЛТГҮЙ</span>}</div>
        </div>
    )
}