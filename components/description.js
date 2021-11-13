import React from "react";
import Image from "next/image";
import Fade from "react-reveal/Fade";
import DescriptionStyle from "../styles/description.module.scss";
import Button from "../components/button";
import Icons from "../assets/icon";
import FooterStyle from "../styles/footer.module.scss";
import Img from "../public//Photopoulos-artificial-intelligence-1310293181-iStock_imaginima.png";
import {
  AiOutlineInstagram,
  AiOutlineTwitter,
  AiFillLinkedin,
} from "react-icons/ai";
import { FaFacebook, FaYoutube, FaGithub } from "react-icons/fa";
// import FooterStyle from "../styles/footer.module.scss";
const Description = ({ isVisible, item }) => {
  console.log(isVisible);
  return (
    <div>
      <>
        <div className={DescriptionStyle.main}>
          {/* details div */}
          <div className={DescriptionStyle.body}>
            <h1>{item.item.name}</h1>
            <div className={DescriptionStyle.IconTile}>
              {/* fb link */}
              <div
                className={FooterStyle.icon}
                style={{ display: item.item.FbLink ? "block" : "none" }}
              >
                <a
                  href={item.item.FbLink ? item.item.FbLink : ""}
                  target="_blank"
                  rel='noopener noreferrer'
                >
                  <FaFacebook />
                </a>
              </div>

              {/* linkedin  link */}
              <div
                className={FooterStyle.icon}
                style={{ display: item.item.lnLink ? "block" : "none" }}
              >
                <a
                  href={item.item.lnLink ? item.item.lnLink : ""}
                  target="_blank"
                  rel='noopener noreferrer'
                >
                  <AiFillLinkedin />
                </a>
              </div>

              {/* youtube link */}
              <div
                className={FooterStyle.icon}
                style={{ display: item.item.YLink ? "block" : "none" }}
              >
                <a
                  href={item.item.YLink ? item.item.YLink : ""}
                  target="_blank"
                  rel='noopener noreferrer'
                >
                  <FaYoutube />
                </a>
              </div>

              {/* github link */}
              <div
                className={FooterStyle.icon}
                style={{ display: item.item.GLink ? "block" : "none" }}
              >
                <a
                  href={item.item.GLink ? item.item.GLink : ""}
                  target="_blank"
                  rel='noopener noreferrer'
                >
                  <FaGithub />
                </a>
              </div>
            </div>
            <p>{item.item.description}</p>
            <br></br>
            <button>Read More</button>
          </div>

          {/* image div */}
          <div className={DescriptionStyle.imagecontainer}>
            <Image
              src={item.item.images[0] ? `${item.item.images[0].url}` : Img}
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
};

export default Description;
