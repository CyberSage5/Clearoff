/* eslint-disable no-unused-vars */
import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from './footer'

export default function Container() {
  return (
    <>
    <Outlet/>
    <Footer/>
    </>
  )
}
