import React,{useState,useEffect} from "react";
import Description from './description'
import Card from '../styles/barcard.module.scss'
import Image from 'next/image'
import { AiFillYoutube , AiOutlineTwitter, AiFillLinkedin } from 'react-icons/ai'
import Slide from 'react-reveal/Slide';
import Jump from 'react-reveal/Jump';
const BarCards = ({ data }) => {
    
    const [toggle,settoggle] = useState(false)
    const [details, setdetails] = useState({})    
    
    const showOrder=(item)=>{
        console.log(item)
        setdetails({ item })
        settoggle( !toggle )
    }    
   
    
    
    const StoreData=(Currdata)=>{
        localStorage.setItem("item",JSON.stringify(Currdata));
    }
    
    return ( 
        <div>
        <div className={Card.body}>
            <div className={Card.main}>
                {/* image */}
                <div className={Card.image}>
                    <Image src={data.image}
                    alt=""
                    height="95px" width="95px"></Image>
                </div>

                {/* content */}

                <div className={Card.section2}>
                    {/* title */}
                    <div className={Card.title}>{data.title}</div>
                    <div className={Card.icons}>
                        <div className={Card.icon}>
                            <AiFillYoutube />
                        </div>
                        <div className={Card.icon}>
                            <AiOutlineTwitter />
                        </div>
                        <div className={Card.icon}>
                            <AiFillLinkedin />
                        </div>
                    </div>
                    <div className={Card.button}>
                        <button onClick={()=>showOrder(data)} >Show More</button>
                    </div>
                </div>
            </div>
        </div>

        {/* description cards */}
        <div>
            {
                toggle?
                    <div>
                        <Slide left>                        
                            <Description isVisible={toggle} item={details} />
                        </Slide>
                    </div>
                :""
            }
        </div>
        </div>
     );
}
 
export default BarCards
;