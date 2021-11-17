import React from 'react'
import Img from '../assets/Dual Ball-1s-200px.svg';
import Image from 'next/image'

function loading() {
    return (
        <div style={{background:'#22222',height:'100vh',width:'100%',position:'absolute',top:'50%',left:'50%',transform:'translate(-50,-50)'}}>
            <Image src={Img}
            alt="" 
            height="70"
            width="70">
                </Image>            
        </div>
    )
}

export default loading
