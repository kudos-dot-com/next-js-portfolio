import react,{useState} from 'react'
import style from '../styles/slider.module.scss'
import Image from 'next/image'
import Carousel from 'react-multi-carousel'
import "react-multi-carousel/lib/styles.css";
import project from '../assets/project'
import { IoIosArrowBack } from 'react-icons/io'
import Img from '../public/Screenshot 2021-09-01 193848.png'
import Dots from '../components/dots'

function Slider(){
    
  const [count,setcount]=useState(0);
  const [direction,setDirection]=useState(0);

  const responsive = {
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 1,
          slidesToSlide: 1 // optional, default to 1.
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 1,
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
            {/* <button onClick={() => goToSlide(currentSlide + 1)}> Go to any slide </button> */}
          </div>
        );
      };
      console.log(count);
    return (
       <div className={style.body}>
         <div className={style.section1}>
           {/* <Image src="/Untitled-1.png" layout="fill"/> */}
         </div>
        <div className={style.main}>
        <h1 className={style.title}>Projects</h1>
        <Carousel
        swipeable={true}
        // showDots={true}
        centerMode={true}
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
                        <div className={`${style.div} ${(count===idx || count===-idx)?style.curr:style.nocurr}`} key={idx}>
                            <div className={`${style.innerdiv}`}>
                              <div className={style.Image}>
                                <Image src={Img} height="200" alt="" width="200"/>
                              </div>
                              <div>
                                <h1>Lorem Ipsium</h1>
                                <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.
                                </p>
                              </div>
                            </div>
                        </div>
                    )
                })
            }
    </Carousel>
    {/* custom dots */}
    
    <div className={style.dots}>
            <Dots count={count} direction={direction}/>
    </div>     
    </div> 
        <div className={style.section2}></div>   
                     
            
        </div>
     );
}
 
export default Slider;