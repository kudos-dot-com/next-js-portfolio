import React,{useState,useEffect} from "react";
import Description from './description'
import Card from '../styles/barcard.module.scss'
import Image from 'next/image'
import { AiFillYoutube , AiOutlineTwitter, AiFillLinkedin } from 'react-icons/ai'
import { FaFacebook, FaYoutube, FaGithub } from "react-icons/fa";
import Slide from 'react-reveal/Slide';
import Jump from 'react-reveal/Jump';
import Img from "../public//Photopoulos-artificial-intelligence-1310293181-iStock_imaginima.png";

const BarCards = ({ data }) => {
    
    const [toggle,settoggle] = useState(false)
    const [details, setdetails] = useState({})    
    
    const showOrder=(item)=>{
        console.log(item)
        setdetails({ item })
        settoggle( !toggle )
    }    
   
    console.log(data);    
    
    const StoreData=(Currdata)=>{
        localStorage.setItem("item",JSON.stringify(Currdata));
    }
    
    return ( 
        <div>
        <div className={Card.body}>
            <div className={Card.main}>
                {/* image */}
                <div className={Card.image}>
                    <Image src={data.images[0]?`${data.images[0].url}`:Img}
                    style={{border:'1px solid #fff',borderRaduis:'50%'}}
                    alt=""
                    height="95px" width="95px"></Image>
                </div>

                {/* content */}

                <div className={Card.section2}>
                    {/* title */}
                    <div className={Card.title}>{data.name}</div>
                    <div className={Card.icons}>
                        
                        {/* fb link */}
              <div
                className={Card.icon}
                style={{ display: data.FbLink ? "block" : "none" }}
              >
                <a
                  href={data.FbLink ? data.FbLink : ""}
                  target="_blank"
                >
                  <FaFacebook />
                </a>
              </div>

              {/* linkedin  link */}
              <div
                className={Card.icon}
                style={{ display: data.lnLink ? "block" : "none" }}
              >
                <a
                  href={data.lnLink ? data.lnLink : ""}
                  target="_blank"
                >
                  <AiFillLinkedin />
                </a>
              </div>

              {/* youtube link */}
              <div
                className={Card.icon}
                style={{ display: data.YLink ? "block" : "none" }}
              >
                <a
                  href={data.YLink ? data.YLink : ""}
                  target="_blank"
                >
                  <FaYoutube />
                </a>
              </div>

              {/* github link */}
              <div
                className={Card.icon}
                style={{ display: data.GLink ? "block" : "none" }}
              >
                <a
                  href={data.GLink ? data.GLink : ""}
                  target="_blank"
                >
                  <FaGithub />
                </a>
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