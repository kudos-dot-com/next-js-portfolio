import React,{useEffect} from 'react'
import Head from 'next/head'
import Image from 'next/image'
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from '../styles/Home.module.css'
import HomeStyle from '../styles/home.module.scss'
import Footer from '../components/footer'
import HomeLanding from '../components/HomeLanding'
import Router from 'next/router'
import Loader from '../components/loading';
export default function Home() {
  
useEffect(() => {
    const {pathname} = Router
   var a=setTimeout(()=>{
    if(pathname == '/' ){
      Router.push('/home')
  }
   },2000)
});
  return (
    <div>
        
          <Loader />
        
    </div>
  )
}
