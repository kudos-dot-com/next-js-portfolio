import { useState, useEffect } from "react";
import { api } from "../assets/info";
import project from "../assets/project";
import style from "../styles/Job.module.scss";
import Aos from "aos";
import "aos/dist/aos.css";
import Multistep from 'react-multistep';
import Modal from 'react-bootstrap/Modal';
import Button from "react-bootstrap/Button";
import ModalNew from '../components/modal'
import axios from "axios";

const Job = () => {
  const [toggle, settoggle] = useState(false);
  const [data, setdata] = useState([]);
  const [des,setdes]=useState({});
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = (items) => {
    setShow(true);
    setdes(items);
  }

  useEffect(() => {
    Aos.init({
      duration: 1000,
    });
  }, []);
  useEffect(() => {
    console.log(api);
    axios
      .get(`${api}/careers`)
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
    <div className={style.body}>
      <h1 className={style.header}> We’re Hiring! </h1>
      <p className={style.para}>
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
        dolore eu fugiat nulla pariatur.
      </p>
      {data.map((items, idx) => {
        return (
          <div
            className={toggle ? "d-none" : `${style.container}`}
            data-aos="fade-down"
            key={idx}
          >
            <div>
              <div>
                <h1>{items.role}</h1>
              </div>
              {/* <br /> */}
              <div>
                <p>
                 {items.descriptions  }
                </p>
              </div>
            </div>
            {/* Apply Button */}
            <div>
              <button onClick={() => handleShow(items)}>Apply</button>
            </div>
          </div>
        );
      })}

      <div className={`${toggle ? style.notcollapse : style.collapse}`}>
        <button onClick={() => settoggle(!toggle)}>
          {toggle ? "Become A Part of Our Mission" : "collapse"}
        </button>
      </div>
      {/* <Modal /> */}
      <Modal  show={show} onHide={handleClose}>
        <Modal.Header style={{backgroundColor:"#222222",color:'#fff'}} closeButton>
          <Modal.Title><small>Post open for {des.role}</small></Modal.Title>
        </Modal.Header>
        <Modal.Body style={{backgroundColor:"#222222",color:"#fff"}}>
          <ModalNew des={des} />
        </Modal.Body>
        {/* <Modal.Footer style={{backgroundColor:"#222222",color:'#fff'}}>
          
        </Modal.Footer> */}
      </Modal>
      {/* <Multistep showNavigation={true} steps={steps}/> */}
    </div>
  );
};

export default Job;
