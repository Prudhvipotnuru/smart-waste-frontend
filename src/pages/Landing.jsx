import { useState } from "react";
import Button from "../style-components/Button";

function Landing(){
  const [showLogin,setShowLogin] = useState(false);
  return (
    <>
      <div className="bg-white">
        <div className="bg-blue-950 h-25 flex items-center justify-between px-10 rounded-b-lg" >
          <h1 className="text-white text-2xl font-extrabold">Smart Waste Management</h1>
          <Button onClick={()=>setShowLogin(true)}>Login</Button>
        </div>
        <div>
          {showLogin && <LoginModal onClose={()=>setShowLogin(false)}></LoginModal>}
        </div>
        <div className="mt-30 flex flex-col items-center space-y-5">
          <h1 className="text-black text-4xl font-bold">Transforming Waste Management with Technology</h1>
          <h3 className="text-black">Track waste collection, improve segregation, and ensure accountability 
            using a QR-based smart system.</h3>
          <Button>Get Started</Button>
        </div>
      </div>
    </>
  )
}

export default Landing;