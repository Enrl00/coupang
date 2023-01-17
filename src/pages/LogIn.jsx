import { HiLockClosed, HiOutlineMail, HiPhone, HiUser } from "react-icons/hi"
import { Link } from "react-router-dom"

export const LogIn = ()=>{
return (
    <div className="w-full h-[70vh]  justify-center flex flex-col items-center">
        <div className="flex items-center border w-2/3 border-gray-300 my-3">
       <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
       </svg>
        <input className="w-full h-11  border-none mx-2" placeholder="Мэйл хаяг" type="text" />
       </div>
        <div className="flex items-center border w-2/3 border-gray-300 my-3" >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
        </svg>
        <input className="w-full h-11 border-none mx-2" placeholder="Нууц үг" type="password" />
        </div>
        <div className="flex justify-between w-2/3 text-placeholder text-xs">
           <div> <input type='checkbox'/>
            <label>Нэвтэрсэн хэвээр байх</label></div>
            <p style={{color:'blue'}}>Нууц үгээ мартсан</p>
        </div>
        <button className="w-2/3 h-11 my-4 flex text-center items-center justify-center border border-blue-500 text-white bg-blue-500 hover:bg-white hover:text-blue-500">Нэвтрэх</button>
        <Link to='/signup' className="w-2/3 h-11"><button className="w-full h-11 my-4 flex text-center items-center justify-center border border-gray-300 color-blue-500 hover:bg-blue-500 hover:text-white">Бүртгүүлэх</button></Link>
    </div>
)
}
export const SignUp = ()=>{
 return <div className="w-full h-[70vh] flex justify-center flex-col items-center">
       <div className="flex items-center border w-2/3 border-gray-300 my-3 px-2">
       <HiOutlineMail className="h-4 w-4"/>
        <input className="w-full h-11  border-none mx-2" placeholder="Мэйл хаяг" type="text" />
       </div>
       <div className="flex items-center border w-2/3 border-gray-300 my-3 px-2" >
        <HiLockClosed className="h-4 w-4"/>
        <input className="w-full h-11 border-none mx-2" placeholder="Нууц үг" type="password" />
        </div>
        <div className="flex items-center border w-2/3 border-gray-300 my-3 px-2">
       <HiUser className="h-4 w-4"/>
        <input className="w-full h-11  border-none mx-2" placeholder="Нэр" type="text" />
       </div>
       <div className="flex items-center border w-2/3 border-gray-300 my-3 px-2">
       <HiPhone className="h-4 w-4"/>
        <input className="w-full h-11  border-none mx-2" placeholder="Утасны дугаар" type="text" />
       </div>
        <div className="flex justify-between w-2/3 text-xs">
           <div> <input type='checkbox'/>
            <label>Нэвтэрсэн хэвээр байх</label></div>
            <p style={{color:'blue'}}>Нууц үгээ мартсан</p>
        </div>
        <button className="w-2/3 h-11 my-4 flex text-center items-center justify-center border border-blue-500 text-white bg-blue-500  hover:bg-white hover:text-blue-500">Бүртгүүлэх</button>
        <Link className="w-2/3 h-11"><button className="w-full h-11 my-4 flex text-center items-center justify-center border border-gray-300  hover:bg-blue-500 hover:text-white">Нэвтрэх</button></Link>
    </div>
}