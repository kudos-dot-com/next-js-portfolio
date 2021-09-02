import {useState,useEffect} from 'react'
import project from '../assets/project'
import style from '../styles/Job.module.scss'
import Aos from 'aos'
import "aos/dist/aos.css"
const Job = () => {
    const [toggle,settoggle]=useState(false);
    useEffect(()=>{
        Aos.init({
            duration:1000
        })
    },[])

    return (
        <div className={style.body}>
            <h1 className={style.header}> We’re Hiring! </h1>
            <p className={style.para}>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
            {
                project.project.map((items,idx)=>{
                    return(
                        <div className={toggle?'d-none':`${style.container}`} 
                        data-aos='fade-down'
                        key={idx}>
                           <div> 
                                <div>
                                    <h1>Product Designer</h1>
                                </div>  
                                    {/* <br /> */}
                                <div> 
                                    <p>Locations: New York, Dallas, Los Angeles, Denver, Chicago, Sao Paulo, San Francisco</p>
                                </div>
                            </div>
                                {/* Apply Button */}
                            <div>
                                <button >
                                    Apply
                                </button>
                            </div>
                        </div>
                    )
                })
            }

            <div className={`${toggle?style.notcollapse:style.collapse}`}>
                <button onClick={()=>settoggle(!toggle)}>
                    {toggle?'Become A Part of Our Mission':'collapse'}
                </button>
            </div>
        </div>
      );
}
 
export default Job;