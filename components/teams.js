import react,{useState} from 'react'
import style from '../styles/teams.module.scss'
import Image from 'next/image'
import Carousel from 'react-multi-carousel'
import "react-multi-carousel/lib/styles.css";
import project from '../assets/project'
import { IoIosArrowBack } from 'react-icons/io'
import Img from '../public/photo-1506863530036-1efeddceb993.png'
import Dots from '../components/dots'
import { AiOutlineInstagram , AiOutlineTwitter, AiFillLinkedin } from 'react-icons/ai'
import { FaFacebook } from 'react-icons/fa'
function Teams(){
    
  const [count,setcount]=useState(0);
  const [direction,setDirection]=useState(0);

  const responsive = {
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3,
          slidesToSlide: 1 // optional, default to 1.
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2,
          slidesToSlide: 1 // optional, default to 1.
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1,
          slidesToSlide: 1 // optional, default to 1.
        }
      };
    
    
      const ButtonGroup = ({ next, previous, goToSlide, ...rest }) => {
        const { carouselState: { currentSlide } } = rest;
        return (
          <div className={style['carousel-button-group']}> 
            <button className={currentSlide === 0 ? 'disable' : ''} onClick={() => previous()} >
              <IoIosArrowBack />
            </button>
            <button onClick={() => next()} >
              <IoIosArrowBack />
            </button>
          </div>
        );
      };
    return (
       <div className='container'>
        <div className={style.main}>
        <h1 className={style.title}>Our Leader's</h1>
        <Carousel
        swipeable={true}
        showDots={false}
        // centerMode={true}
        responsive={responsive}
        ssr={true} 
        infinite={true}
        additionalTransfrom={0}
        arrows={false} customButtonGroup={<ButtonGroup />}
        autoPlaySpeed={3000}
        className=""
        containerClass="container-with-dots"
        dotListClass=""
        draggable
        focusOnSelect={false}
        itemClass=""
        keyBoardControl
        minimumTouchDrag={80}
        renderButtonGroupOutside={false}
        renderDotsOutside={false} 
        beforeChange={(nextSlide, { currentSlide, onMove }) => {
            (nextSlide-currentSlide)>0?count!==4?setcount(count+1):setcount(0):count!==-0?setcount(count-1):setcount(4)
            setDirection(nextSlide-currentSlide)
            // console.log(nextSlide + "" + currentSlide + "" + (nextSlide-currentSlide))
          }}     
      >        
           
            {
                project.project.map((items,idx)=>{
                    return (
                        <div className={style.card}>
                            <Image src={Img} 
                            width="275"
                            height="275"
                            alt=""
                            ></Image>

                            <div className={style.details}>
                                <div>
                                    <h1>john doe</h1>
                                    <h1>Team Lead</h1>
                                </div>

                                <div>
                                    <div><AiOutlineTwitter/></div>
                                    <div><AiFillLinkedin/></div>
                                    <div><AiOutlineInstagram/></div>
                                    <div><FaFacebook/></div>

                             </div>
                            </div>
                        </div>
                    )
                })
            }
    </Carousel>   
    </div>                     
    {/* custom dots */}
        <div className={style.dots}>
            <Dots count={count} direction={direction}/>
        </div>        
    </div>
     );
}
 
export default Teams