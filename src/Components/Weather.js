import React,{ useState } from 'react';
import axios from 'axios';

function App() {

  const [city, setCity] = useState('');
  const [msg,setMsg] = useState('');

  const getWeather = async (e) => {
    e.preventDefault();
    await axios.post('http://localhost:5000/getweather', {city: city})
    .then(res => {
      setMsg(res.data)
    })
  }
  return (
    <div className="h-screen background text-center flex flex-col gap-8 justify-center items-center">
      <div className='h-full w-full backdrop-blur-sm backdrop-brightness-100 rounded-lg flex flex-col justify-center items-center'>
        <div className='w-full pt-12 md:pt-12 text-center'>
          <label className='text-4xl font-sans md:text-7xl font-black text-white font stroke-black drop-shadow-[0_1.9px_1.9px_rgba(0,0,0,0.9)] antialiased'>FIND YOUR WEATHER</label>
        </div>
        <div className='h-full w-full flex justify-center items-center'>
          <div className='mx-4 text-black md:mx-0 h-[350px] w-[600px] bg-white/50 backdrop-brightness-150 backdrop-blur-2xl rounded-lg'>
            <form className='h-full' onSubmit={getWeather}>
              <div className='h-full border rounded-lg gap-20 w-full flex flex-col justify-center items-center'>
                  <input className='w-[90%] md:w[70%] py-4 bg-white rounded-lg focus:outline-none px-5 font-semibold text-xl text-center' onChange={(e) => setCity(e.target.value)} placeholder='Enter Your City'></input>
                  <button className='w-[90%] md:w[70%] py-4 rounded-lg bg-orange-400 hover:bg-orange-500 font-semibold text-white text-xl'>GET WEATHER</button>
              </div>
            </form>
            <p className='text-white text-3xl font-semibold py-5 drop-shadow-[0_1.9px_1.9px_rgba(0,0,0,0.9)]'>{msg}</p>
          </div>
        </div>
      </div>
    </div>

  );
}

export default App;
