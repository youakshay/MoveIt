import { useState } from "react"

function Signup() {

    const [data, setData] = useState({
        name: "",
        email: "",
        username: "",
        password: ""
    })

    const handleChange = (event) => {
        setData({
            ...data,
            [event.target.name]: event.target.value
        })
    }

    return (
        <>
            <div className="grid grid-cols-1 place-items-center gap-4 p-10">
                <div>
                    <div><label>Name:</label></div>
                    <div><input type="text" name="name" value={data.name} className="h-10 w-64 border border-slate-400 rounded-xl" onChange={handleChange}></input></div>
                </div>
                <div>
                    <div><label>Email</label></div>
                    <div><input type="text" name="email" value={data.value} className="h-10 w-64 border border-slate-400 rounded-xl" onChange={handleChange}></input></div>
                </div>
                <div>
                    <div><label>Username</label></div>
                    <div><input type="text" name="username" value={data.username} className="h-10 w-64 border border-slate-400 rounded-xl" onChange={handleChange}></input></div>
                </div>
                <div>
                    <div><label>Password</label></div>
                    <div><input type="text" name="password" value={data.password} className="h-10 w-64 border border-slate-400 rounded-xl" onChange={handleChange}></input></div>
                </div>
                <div>
                    <button className="bg-blue-500 rounded-xl text-white w-16 text-sm h-10 mt-4 hover:bg-blue-600">Signup</button>
                </div>
                <div className="flex gap-2 text-sm mt-4">
                    <p>Already have an Account?</p>
                    <a className="text-blue-500">Login</a>
                </div>
            </div>
        </>
    )
}

export default Signup;