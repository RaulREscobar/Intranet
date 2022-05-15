import React from 'react'
import { Outlet } from 'react-router-dom'
import BarNav from '../components/BarNav'
import Birthday from '../components/Birthday'
import Dashboard from '../components/Dashboard'
import Extra from '../components/Extra'
import Layout from '../components/Layout'
import User from '../components/User'

const Home = () => {
  return (
    <div>
      < Dashboard />
      < User />
      < Extra />
      < Layout />
      < Birthday />
      < BarNav />
      < Outlet />
    </div>
  )
}

export default Home