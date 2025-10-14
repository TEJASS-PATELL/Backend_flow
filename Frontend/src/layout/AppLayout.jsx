import React from 'react'
import { Outlet, useNavigate } from 'react-router'
import Loading from './Loading';
import NavBar from './NavBar';
import Footer from './Footer';

export default function AppLayout() {

  const navigate = useNavigate();
  if(navigate.state === "loading") return <Loading/>

  return (
    <>
    <NavBar/>
    <Outlet/>
    <Footer/>
    </>
  )
}
