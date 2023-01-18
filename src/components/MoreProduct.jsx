import { Link } from 'react-router-dom'
import Rating from './Rating'
export const MoreProduct = ({products})=>{
    return (
        <div className='border-y-4 border-gray-300'>
            <div className='text-lg font-bold px-2 py-2'>Ижил бараа</div>
            <div className='flex overflow-x-scroll scrollbar-hide gap-2 px-4'>
              {products?.items?.map(prod=>{
                return (
                  <Link to={`/products/${prod.id}`}>
                    <div
                    className={"relative border-none text-sm min-w-[110px] h-fit"}>
                    <img
                      alt=""
                      className="w-[110px] h-[110px]"
                      src={prod.img_links[0]}
                    />
                    <h2
                      className={" text-xs max-sm:text-footer"}>
                      {prod.name}
                    </h2>
                    <h2 className="font-bold max-sm:text-footer text-red-500">{prod.actual_price} ₮</h2>
                    {/* {prod.freeshipping && <p className='max-sm:text-footer'>FREE Shipping</p>} */}
                    {/* <Rating rating={prod.rating}/> */}
                  </div>
                  </Link>
                )
            })}</div>
        </div>
    )
}