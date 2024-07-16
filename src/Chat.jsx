import Login from "./Login";
import Signup from "./Signup";
import { useState } from "react";

export const Chat = () => {

    const [haveAccount, setHaveAccount] = useState(true);

    const switchToLogin = () => {
        setHaveAccount(true);
    }
    const switchToSignup = () => {
        setHaveAccount(false);
    }


    return (
        <>
            <div className='grid  border-2 h-max justify-self-center w-96 mt-20'>
                <div className='grid grid-cols-2 justify-self-center  h-8 w-full'>
                    <div className={` ${!haveAccount ? "bg-white text-black" : "bg-blue-600 text-white"} grid rounded-r-lg`} onClick={switchToLogin}><span className='justify-self-center font-semibold mt-1'>Login</span></div>
                    <div className={` ${haveAccount ? "bg-white text-black" : "bg-blue-600 text-white"} grid rounded-l-lg`} onClick={switchToSignup}><span className='justify-self-center font-semibold mt-1'>Signup</span></div>
                </div>

            {
                haveAccount ? <Login /> : <Signup />
            }

            </div>
        </>
    )
}