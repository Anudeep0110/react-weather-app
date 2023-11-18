import React from 'react'
import axios from 'axios'

const Signup = () => {

    const [data,setData] = React.useState({
        username:'',
        password:''
    })

    const signup = (e) => {
        e.preventDefault();
        axios.post('http://localhost:5000/auth/signup',data)
        .then(res => {
            if(res.data.flag){
                window.location.href='/login'
            }
            else alert('Invalid Credentials')
        })
    }

  return (
    <div>
        <div class="w-full h-screen flex flex-col items-center justify-center bg-slate-700">
          <form class="w-full md:w-1/3 rounded-lg p-20 bg-indigo-400" onSubmit={signup}>
            <div class="flex font-bold justify-center mt-6">
            </div>
            <h2 class="text-4xl text-center text-black mb-8">Signup</h2>
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
                Signup
              </button>
            </div>
          </form>
        <h1 className='text-xl mt-3'>Already Have an account? <a href='/login' className=' text-white'>Login</a></h1>
        </div>
    </div>
  )
}

export default Signup