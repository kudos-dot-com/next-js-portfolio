import React, { useState } from "react";
import Carousel from "react-elastic-carousel";
import Card from "../components/imageCard";
import project from "../assets/project";
import CarouselStyle from "../styles/carousel.module.scss";
import Description from "./description";
export default function CarouselDiv(props) {
  const [toggle, settoggle] = useState(false);
  const [details, setdetails] = useState({});
  console.log(props);
  const showOrder = (item) => {
    console.log(item);
    setdetails({ item });
    settoggle(!toggle);
  };
  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 1 },
    { width: 768, itemsToShow: 2 },
    { width: 1010, itemsToShow: 3 },
    { width: 1410, itemsToShow: 4 },
  ];
  return (
    <div>
      <>
        <h1 className={CarouselStyle.title}>{props.title}</h1>
        <div className="App">
          <Carousel breakPoints={breakPoints}>
            {
              //  <div  >
              //  <Card image={(project.project[0].image)} />
              //  </div>
              props.dets.map((items, idx) => {
                return (
                  <div onClick={() => showOrder(items)} key={idx}>
                    <Card image={items.images[0]?`${items.images[0].url}`:project.project[0].image} />
                  </div>
                );
              })
            }
          </Carousel>
          {toggle ? (
            <div>
              <Description isVisible={toggle} item={details} />
            </div>
          ) : (
            ""
          )}
        </div>
      </>
    </div>
  );
}
