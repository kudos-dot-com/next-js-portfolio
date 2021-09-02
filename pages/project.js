import Button from '../components/button'
import Navbar from '../components/navbar'
import ProjectStyle from  '../styles/project.module.scss'
import Carousel from '../components/carousel'
import BarCard from '../components/projectComponent'
export default function ProjectPage() {
  return (
  <div className={ProjectStyle.main}>
    <div className={ProjectStyle.body}>
        <div className={ProjectStyle.background}>
          <Navbar />
        </div>
        <div className={ProjectStyle.floatingText}>
            <h1>look what trivia</h1>
            <h3>has to offer</h3>
            <button className={ProjectStyle.Button1} >Dive In</button>
        </div>
    </div>
    {/* on going */}
    <div className={ProjectStyle.slider}> 
      <Carousel title='On Going'/>
    </div>
    {/* 2nd layout */}
    <div className={ProjectStyle.barcards}> 
      <BarCard title='On Going'/>
    </div>

    {/* completed */}
    <div className={ProjectStyle.slider}> 
      <Carousel title='Completed'/>
    </div>
    {/* 2nd layout  */}
    <div className={ProjectStyle.barcards}> 
      <BarCard title='On Going'/>
    </div>
  </div>
  )
}
