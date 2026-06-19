import  { useState } from 'react'


function App() {
 const [incre, setIncre] = useState(0);
  function increment(){
     if(incre<20){
      setIncre(prev=>prev+1)
      
     }
  }
  function decrement(){
    if(incre>0){
      setIncre(prev=>prev-1)
       
  }
}
  return (
    <>
    <div className="flex flex-col items-center justify-center min-h-screen gap-4 ">
       <div className="flex flex-col items-center justify-center bg-white p-8 rounded-lg shadow-lg  ">
  <h1 className="text-3xl font-bold">Counter App</h1>

  <p className="text-xl font-semibold">
    Count:{incre} 
  </p>

  <div className="flex gap-3">
    <button onClick={increment} className="bg-green-500 text-white px-4 py-2 rounded">
      Inc
    </button>

    <button onClick={decrement} className="bg-red-500 text-white px-4 py-2 rounded">
      Dec
    </button>
  </div>
  </div>
</div>

    </>
  )
}

export default App