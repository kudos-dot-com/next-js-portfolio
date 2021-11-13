import Navbar from '../components/navbar'
import AboutStyle from '../styles/about.module.scss'
import Mission from '../components/mission'
import Footer from '../components/footer'
import Job from '../components/job'
import Teams from '../components/teams'
import { content } from '../assets/info'
const About = () => {
    return ( 
        <div className={AboutStyle.main}>
            <div className={AboutStyle.body}>
                <div className={AboutStyle.background}>
                    <Navbar />
                </div>
                <div className={`container-fluid d-flex flex-column justify-content-center justify-content-lg-center  ${AboutStyle.HeaderBody}`}>
                    <div className="d-flex  flex-column justify-content-center align-self-center align-self-lg-end pr-5">
                        <h1 className="text-light text-capitalize align-self-center">About Us</h1>
                        <p className="text-light text-center">{content.about.header.about.body} </p>
                    </div>
                </div>
        </div>
        <div className={AboutStyle.section2} style={{display:content.about.header.mission.visible?'block':'none'}}>
            <Mission />
        </div>

        {/* Job */}

        <div style={{display:content.about.header.career.visible?'block':'none'}}>
            <Job />
        </div>

        {/* teamss */}

        <Teams style={{display:content.about.header.teams.visible?'block':'none'}}/>
        
            {/* <Footer /> */}
        </div>
     );
}
 
export default About;