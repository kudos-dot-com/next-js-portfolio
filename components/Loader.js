import React from 'react'
import Img from '../assets/Pulse-1s-200px.svg';
import Image from 'next/image'

function loading() {
    return (
        <div>
            <Image src={Img}
             height="50"
             width="50"
            >
                </Image>            
        </div>
    )
}

export default loading
