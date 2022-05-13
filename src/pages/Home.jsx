import React from 'react'
import { Outlet } from 'react-router-dom'
import Dashboard from '../components/Dashboard'
import User from '../components/User'

const Home = () => {
  return (
    <div>
      < Dashboard />
      < User />
      < Outlet />
    </div>
  )
}

export default Home