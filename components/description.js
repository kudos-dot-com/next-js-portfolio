import React from 'react'
import Image from 'next/image'
import Fade from 'react-reveal/Fade'
import DescriptionStyle from '../styles/description.module.scss'
import Button from '../components/button'
import Icons from '../assets/icon'
import FooterStyle from '../styles/footer.module.scss'

const Description = ({ isVisible , item}) => {
    console.log(isVisible)
    return ( 
        <div>
       
            <>
                <div className={DescriptionStyle.main}>
                    {/* details div */}
                    <div className={DescriptionStyle.body}>
                        <h1>{item.item.title}</h1>
                        <div className={DescriptionStyle.IconTile}>
                        {
                        Icons.icon.map(items=>{
                        return (
                            <div  key={items.data} className={DescriptionStyle.icon}>
                                <Image 
                                height="35"
                                width="35"
                                src={items.data} 
                                alt="" ></Image>
                            </div>
                        )
                    })
                }
            </div>
                        <p>{item.item.body}</p>
                        <br></br>
                        <button>Read More</button>
                    </div>

                    {/* image div */}
                    <div className={DescriptionStyle.imagecontainer}>
                        <Image src={item.item.image}
                        height="600"
                        width="500"
                        alt=""
                        // layout="fill"
                        className={DescriptionStyle.image} 
                        ></Image>
                    </div>
                </div>
            </>
        </div>
     );
}
 
export default Description;