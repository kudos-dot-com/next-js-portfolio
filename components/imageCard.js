import imageCardStyle from '../styles/imagecard.module.scss'
import Image from 'next/image'
const imagecards = ({image}) => {
    // console.log(props);
    return ( 

        <div className={imageCardStyle.body}>
            <Image src={image}
             className={imageCardStyle.img}
                width="346"
                height="416"
            // layout="fill"
            // placeholder="blur"
            alt="" />
                
            {/* </Image> */}
        </div>
     );
}
 
export default imagecards;