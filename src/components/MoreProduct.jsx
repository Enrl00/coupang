import Rating from './Rating'
export const MoreProduct = ({products})=>{
  console.log(products);
    return (
        <div>
            <div className='text-lg font-bold px-2 py-2'>Ижил бараа</div>
            <div className='flex overflow-x-scroll scrollbar-hide'>
              {products?.itmes?.map(prod=>{
                return (<div
                    className={"relative border-none text-sm min-w-[75px] h-fit"}>
                    <img
                      alt=""
                      className="w-[80px] h-[80px]"
                      src={prod.img_links[0]}
                    />
                    <h2
                      className={"truncate underline decoration-[1.5px] max-sm:text-footer decoration-blue-500"}>
                      {prod.name}
                    </h2>
                    <h2 className="font-bold max-sm:text-footer text-red-500">{prod.actual_price} won</h2>
                    {/* {prod.freeshipping && <p className='max-sm:text-footer'>FREE Shipping</p>} */}
                    {/* <Rating rating={prod.rating}/> */}
                  </div>)
            })}</div>
        </div>
    )
}