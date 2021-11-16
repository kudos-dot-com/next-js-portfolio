import { useEffect, useState } from "react";
import axios from "axios";
import { api } from "../assets/info";
import Button from "../components/button";
import Navbar from "../components/navbar";
import ProjectStyle from "../styles/project.module.scss";
import Carousel from "../components/carousel";
import BarCard from "../components/projectComponent";
import { content } from '../assets/info';
export default function ProjectPage() {
  const [data, setdata] = useState([]);
  useEffect(() => {
    console.log(api);
    axios
      .get(`${api}/projects`)
      .then((response) => {
        setdata(response.data);
        console.log(response);
      })
      .catch((err) => {
        // setdata([]);
        console.log(err);
      });
  }, []);
  return (
    <div className={ProjectStyle.main}>
      <div className={ProjectStyle.body}>
        <div className={ProjectStyle.background}>
          <Navbar />
        </div>
        <div className={ProjectStyle.floatingText}>
          <h1>look what tivra Ai</h1>
          <h3>has to offer</h3>
          <button className={ProjectStyle.Button1}>Dive In</button>
        </div>
      </div>
      <div>
        {/* on going */}
        {
          content.project.ongoing.visible?
          <div>
            <div className={ProjectStyle.slider}>
          <Carousel title="On Going" dets={data} />
        </div>
        {/* 2nd layout */}
        <div className={ProjectStyle.barcards}>
          <BarCard title="On Going" dets={data} />
        </div>
          </div>:''
        }
        

        {/* completed */}
        {
          content.project.completed.visible?
          <div>
            <div className={ProjectStyle.slider} >
          <Carousel title="Completed" dets={data} />
        </div>
        {/* 2nd layout  */}
        <div className={ProjectStyle.barcards}>
          <BarCard title="Completed" dets={data} />
        </div>
          </div>:''
        }
      </div>
    </div>
  );
}
