import React from 'react'
import axios from 'axios'

const Login = () => {

    const [data,setData] = React.useState({
        username:'',
        password:''
    })

    const login = (e) => {
        e.preventDefault();
        axios.post('http://localhost:5000/auth/login',data)
        .then(res => {
            if(res.data.flag){
                window.location.href='/weather'
            }
            else alert('Invalid Credentials')
        })
    }

  return (
    <div>
        <div class="w-full h-screen flex flex-col items-center justify-center bg-slate-700">
          <form class="w-full md:w-1/3 rounded-lg p-20 bg-indigo-400" onSubmit={login}>
            <div class="flex font-bold justify-center mt-6">
            </div>
            <h2 class="text-4xl text-center text-black mb-8">Login</h2>
            <div class="px-12 pb-10">
              <div class="w-full mb-2">
                <div class="flex items-center">
                  <input
                    type="text"
                    placeholder="Username"
                    class="
                      w-full
                      border
                      rounded
                      px-3
                      py-2
                      text-gray-700
                      focus:outline-none
                    "
                    onChange={(e) => {setData({...data,username:e.target.value})}}
                  />
                </div>
              </div>
              <div class="w-full mb-2">
                <div class="flex items-center">
                  <input
                    type="password"
                    placeholder="Password"
                    class="
                      w-full
                      border
                      rounded
                      px-3
                      py-2
                      text-gray-700
                      focus:outline-none
                    "
                    onChange={(e) => {setData({...data,password:e.target.value})}}
                  />
                </div>
              </div>
              <button
                type="submit"
                class="
                  w-full
                  py-2
                  mt-8
                  rounded-full
                  bg-blue-800
                  text-gray-100
                  focus:outline-none
                "
              >
                Login
              </button>
              <p className='w-full text-center mt-5 text-lg'><a href='/forgotpassword'>Forgot Password</a></p>
            </div>
          </form>
        <h1 className='text-xl mt-3'>Dont have an acount? <a href='/' className=' text-white'>SignUp</a></h1>
        </div>
    </div>
  )
}

export default Login