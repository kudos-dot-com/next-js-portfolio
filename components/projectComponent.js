import React,{useState,useEffect} from "react";
import Description from './description'
import Cards from './BarCards'
import project from '../assets/project'
import CarouselStyle from '../styles/carousel.module.scss'
import Aos from 'aos'
import "aos/dist/aos.css"
export default function ProjectComponent(props) {
  const [toggle,settoggle] = useState(false)
  const [details, setdetails] = useState({})

  const showOrder=(item)=>{
    console.log(item)
    setdetails({ item })
    settoggle( !toggle )
  }    
  
  useEffect(()=>{
    Aos.init({
        duration:1000
    })
  },[])
    return (
      <div >
        <>
      <h1 className={CarouselStyle.title}>{props.title}</h1>
      <div className="App">
        <div >
           {
               props.dets.map((items,idx)=>{
                   return (
                    <div 
                    data-aos='fade-down'        
                    key={idx}>
                      <Cards data={ items }/>                        
                    </div>
                   )
               })
           }
            
        </div>
     
      </div>
    </>            
        </div>
    )
}
