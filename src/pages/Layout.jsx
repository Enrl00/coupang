import React from 'react'
import {Header} from '../components/Header'
import { Navbar } from '../components/Navbar'
import { useLoadingContext } from '../provider/IsActicve'

function Layout({children}) {
    const {isLoading} =useLoadingContext()
  return (
    <div className='mx-auto'>
          {isLoading ? 
            <Loader/>
            : 
            <div>
                <Header />
                {children}
                <Navbar/>
            </div>
        }
    </div>
  )
        
}
const Loader =()=>{
    return(
        <div className="fixed top-0 left-0 right-0 bottom-0 w-full h-screen z-50 overflow-hidden bg-gradient-to-b from-white via-indigo-300 to-white  opacity-75 flex flex-col items-center justify-center">
        <div className="loader ease-linear rounded-full border-4 border-t-4 border-gray-200 h-12 w-12 mb-4"></div>
        <h2 className="text-center text-indigo-800 text-xl font-semibold">Уншиж байна</h2>
    </div>
    )
}

export default Layout