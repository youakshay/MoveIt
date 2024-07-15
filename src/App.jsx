import { useState } from 'react'
import Setting from './Setting'
import {Routes, Route, Link} from 'react-router-dom'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Login from './Login'
import Signup from './Signup'
import NavBar from './NavBar'
import Footer from './Footer'
import { BsBarChart } from "react-icons/bs";
import { AiOutlineDoubleRight } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";
import { CiSettings } from "react-icons/ci";
import { IoIosNotificationsOutline } from "react-icons/io";
import { BsChatDots } from "react-icons/bs";







function App() {
  const [haveAccount, setHaveAccount] = useState(true);

  const switchToLogin = () => {
    setHaveAccount(true);
  }
  const switchToSignup = () => {
    setHaveAccount(false);
  }

  const [sideOpen, setSideOpen] = useState(true);
  const [loggedIn, setLoggedIn] = useState(true);


  return (
    <div className='p-2'>
      
      <aside className={`${sideOpen ? "w-48" : "w-16"} ${loggedIn ? "scale-100" : "hidden"} bg-blue-600  float-left h-screen p-2 gap-4  duration-300 sticky`}>
        <div className='flex gap-4'>
          <BsBarChart className='text-white h-8 w-8 absolute'/>
          <h1 className={`${!sideOpen ? "scale-0" : "scale-100"} ml-12 font-semibold text-lg text-white mt-1`}>MoveIt</h1>
        </div>

        <ul className='py-4 px-1'>

          <li className='flex flex-row text-white'>
            <div className='border p-1 border-white rounded-md h-12 w-full hover:scale-105 duration-150'>
              <BsChatDots className='mt-1 h-8 w-8 absolute'/>
              <p className={`${!sideOpen ? "scale-0" : "scale-100"} ml-10 mt-1`}>
                Chat
              </p>
            </div>
          </li>

          <li className='flex flex-row text-white mt-2'>
            <div className='border p-1 border-white rounded-md h-12 w-full hover:scale-105 duration-150'>
              <AiOutlineUser className='mt-1 h-8 w-8 absolute'/>
              <p className={`${!sideOpen ? "scale-0" : "scale-100"} ml-10 mt-1`}>
                Profile
              </p>
            </div>
          </li>

          <li className='flex flex-row text-white mt-2'>
            <div className='border p-1 border-white rounded-md h-12 w-full hover:scale-105 duration-150'>
              <CiSettings className='mt-1 h-8 w-8 absolute'/>
              <Link className={`${!sideOpen ? "scale-0" : "scale-100"} ml-10 mt-1`} to="/settings">
                Setting
              </Link>
            </div>
          </li>

          <li className='flex flex-row text-white mt-2'>
            <div className='border p-1 border-white rounded-md h-12 w-full hover:scale-105 duration-150'>
              <IoIosNotificationsOutline className='mt-1 h-8 w-8 absolute'/>
              <p className={`${!sideOpen ? "scale-0" : "scale-100"} ml-10 mt-1`}>
                Notifications
              </p>
            </div>
          </li>

        </ul>
        
        <AiOutlineDoubleRight className={` ${sideOpen ? "rotate-180": "rotate:0"} border border-white text-white rounded-full absolute right-0 bottom-4 w-8 h-8 duration-300 p-1`} onClick={()=> setSideOpen(!sideOpen)}/>

      </aside>
      
      <NavBar />
      <div className='grid'>
        <div className='grid  border-2 h-max justify-self-center w-96 mt-20'>
          <div className='grid grid-cols-2 justify-self-center  h-8 w-full'>
              <div className={` ${!haveAccount? "bg-white text-black": "bg-blue-600 text-white"} grid rounded-r-lg`} onClick={switchToLogin}><span className='justify-self-center font-semibold mt-1'>Login</span></div>
              <div className={` ${haveAccount? "bg-white text-black": "bg-blue-600 text-white"} grid rounded-l-lg`} onClick={switchToSignup}><span className='justify-self-center font-semibold mt-1'>Signup</span></div>
          </div>
          <Routes>
            <Route path='/' element={<Login />}/>
            <Route path='/settings' element={<Setting />} />
          </Routes>
        </div>
      </div>
    </div>
  )
}

export default App
