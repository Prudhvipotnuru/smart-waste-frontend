function Home(){
  return (
    <>
      <div className="bg-white">
        <div className="bg-blue-950 h-25 flex items-center justify-between px-10" >
          <h1 className="text-white text-2xl font-extrabold">Smart Waste Management</h1>
          <button className="bg-sky-400 px-4 py-1 border-2 border-black rounded-lg
           text-white font-mono hover:bg-sky-700 hover:cursor-pointer"
           >Login</button>
        </div>
        <div className="mt-30 flex flex-col items-center space-y-5">
          <h1 className="text-black text-4xl font-bold">Transforming Waste Management with Technology</h1>
          <h3 className="text-black">Track waste collection, improve segregation, and ensure accountability 
            using a QR-based smart system.</h3>
        </div>
      </div>
    </>
  )
}

export default Home;