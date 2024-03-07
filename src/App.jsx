import './App.css'
import { Routes, Route, useNavigate } from 'react-router-dom'
import Login from './pages/login/login'
import Register from './pages/register/register'
import Home from './pages/home/home'
import { useEffect, useState } from 'react'

function ProtectedRoute({children, redirectTo = '/Login', isAuthenticated}) {
  const navigate = useNavigate();
  if (!isAuthenticated) {
    navigate('/login')
  }

  return children
}
function App() {
  const navigate = useNavigate()

  const [token, setToken] = useState(localStorage.getItem('users'));
    if(!localStorage.getItem('users')) {
      navigate('/login')
    }
      console.log(token);

  return (
    <>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />


        <Route path='/' element={
        <ProtectedRoute isAuthenticated={token ? true : false}>
          <Home />
        </ProtectedRoute>
      }></Route>
      </Routes>
    </>
  )
}

export default App