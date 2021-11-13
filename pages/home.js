import Navbar from "../components/navbar";
import Logo from "../public/logo.png";
import HomeStyle from "../styles/home.module.scss";
import HomeLanding from "../components/HomeLanding";
import Button from "../components/button";
import Footer from "../components/footer";
import Slider from "../components/slider";
import Link from "next/link";
import { content } from "../assets/info";
import { NavLink } from 'reactstrap';
import Load from '../components/loading'
const Header = () => {
  return (
    <div className={HomeStyle.main}>
      <div className={HomeStyle.body}>
        <div>
          <HomeLanding />
        </div>
      </div>
      <div>
        <div className="mt-4" style={{display:content.home.project.visible?'block':'none'}}>
          <Slider />
        </div>
      </div>
      {/* content about us */}
      <div className={`container ${HomeStyle.content}`} style={{display:content.home.about.visible?'block':'none'}}>
        <h1>about us</h1>
        <p>{content.home.about.body}</p>
        <Link href='/about' passHref>
          <NavLink>
          <Button className={HomeStyle.button} title="Know More" />
          </NavLink>
        </Link>
      </div>
      {/* <Footer /> */}
    </div>
  );
};

export default Header;
