import react, { useState,useEffect } from "react";
import axios from "axios";
import { api } from "../assets/info";
import style from "../styles/slider.module.scss";
import Image from "next/image";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import project from "../assets/project";
import { IoIosArrowBack } from "react-icons/io";
import Img from "../public/Screenshot 2021-09-01 193848.png";
import Dots from "../components/dots";

function Slider() {
  const [count, setcount] = useState(0);
  const [direction, setDirection] = useState(0);
  const [data, setdata] = useState([]);
  let size=0;
  useEffect(() => {
    console.log(api);
    axios
      .get(`${api}/projects`)
      .then((response) => {
        setdata(response.data);
        size=response.data.length;
        console.log(response);
      })
      .catch((err) => {
        // setdata([]);
        console.log(err);
      });
  }, []);

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };

  const ButtonGroup = ({ next, previous, goToSlide, ...rest }) => {
    const {
      carouselState: { currentSlide },
    } = rest;
    return (
      <div className={style["carousel-button-group"]}>
        <button
          className={currentSlide === 0 ? "disable" : ""}
          onClick={() => previous()}
        >
          <IoIosArrowBack />
        </button>
        <button onClick={() => next()}>
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
          arrows={false}
          customButtonGroup={<ButtonGroup />}
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
            nextSlide - currentSlide > 0
              ? count !== data.length-1
                ? setcount(count + 1)
                : setcount(0)
              : count !== -0
              ? setcount(count - 1)
              : setcount(data.length-1);
            setDirection(nextSlide - currentSlide);
            // console.log(nextSlide + "" + currentSlide + "" + (nextSlide-currentSlide))
          }}
        >
          {data.map((items, idx) => {
            return (
              <div
                className={`${style.div} ${
                  count === idx || count === -idx ? style.curr : style.nocurr
                }`}
                key={idx}
              >
                <div className={`${style.innerdiv}`}>
                {/* <div className="mt-2">{" "}</div> */}
                  <div className={style.Image}>
                    <Image src={items.images[0]?`${items.images[0].url}`:Img} height="200" alt="" width="200" style={{paddingTop:'3px'}}/>
                  </div>
                  <div>
                    <h1>{items.name}</h1>
                    <p>
                      {items.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </Carousel>
        {/* custom dots */}

        <div className={style.dots}>
          <Dots count={count} direction={direction} />
        </div>
      </div>
      <div className={style.section2}></div>
    </div>
  );
}

export default Slider;
