import { useState } from "react";
import Button from "../style-components/Button";
import api from "../services/api";
import { useNavigate } from "react-router-dom";

function LoginModal({ onClose }) {
  const [error,setError] = useState('');
  const [loading,setLoading] = useState(false);
  const [username,setUsername] = useState('');
  const [password,setPassword] = useState('');
  const navigate = useNavigate();

  async function handleSubmit(e) {
  e.preventDefault();
  setError('');
  setLoading(true);
  console.log("login button clicked");
  try {
    const { data } = await api.post('/login', { username, password })
    localStorage.setItem('token', data.token)

    const payload = JSON.parse(atob(data.token.split('.')[1]))   // decode JWT
    const roles = payload.roles.map(r => r.authority)            // e.g. ["ROLE_ADMIN"]

    if (data.mustChangePassword) {
      navigate('/change-password')
    } else if (roles.includes('ROLE_ADMIN')) {
      navigate('/admin/houses')
    } else {
      navigate('/collector/scan')
    }
  } catch (err) {
    setError(err.response?.data?.message || 'Invalid credentials')
  } finally {
    setLoading(false)
  }
}

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60"
      onClick={onClose}
    >
      <div
        className="relative w-80 rounded-xl bg-white p-6 shadow-xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute right-3 top-2 text-xl text-gray-500 hover:text-black"
        >
          ×
        </button>
        <h2 className="mb-4 text-center text-xl font-bold">Login</h2>
        <input className="w-full border p-2 mb-3 rounded" value={username} onChange={(e)=>setUsername(e.target.value)} 
        type="text" placeholder="Email or Username" />
        <input className="w-full border p-2 mb-3 rounded" value={password} onChange={(e)=>setPassword(e.target.value)}
        type="password" placeholder="Password" />
        <div className="pl-23">
            <Button onClick={handleSubmit}>Login</Button>
        </div>
      </div>
    </div>
  )
}



export default LoginModal;