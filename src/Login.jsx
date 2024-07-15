import { useState } from "react";

function Login() {

    const [data, setData] = useState([{
        username:"",
        password:""
    }])

    

    const updateDetails = (event) => {
        setData({
            ...data,
            [event.target.name] : event.target.value
        })
    }



    return (
        <>
            <div className="grid grid-cols-1 place-items-center gap-4 p-10">
                <div>
                    <div><label>Username:</label></div>
                    <div><input type="text" name="username" value={data.username} onChange={updateDetails} className="rounded-xl border border-slate-400 h-10 w-64 p-2"></input></div>
                </div>
                <div>
                    <div><label>Password:</label></div>
                    <div><input type="password" name="password" value={data.password} onChange={updateDetails} className="rounded-xl border border-slate-400 h-10 w-64 p-2"></input></div>
                </div>
                <div>
                    <button className="bg-blue-500 rounded-xl text-white w-16 text-sm h-10 mt-4 hover:bg-blue-600">Login</button>
                </div>
                <div className="flex gap-2 text-sm mt-4">
                    <p>Do not have an Account?</p>
                    <a className="text-blue-500">signup</a>
                </div>
            </div>
        </>
    )
}

export default Login;