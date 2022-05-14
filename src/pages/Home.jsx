import React from 'react'
import { Outlet } from 'react-router-dom'
import Dashboard from '../components/Dashboard'
import Layout from '../components/Layout'
import User from '../components/User'

const Home = () => {
  return (
    <div>
      < Dashboard />
      < User />
      < Layout />
      < Outlet />
    </div>
  )
}

export default Home