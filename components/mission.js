import Image from 'next/image'
import Img from '../public/chuttersnap-eH_ftJYhaTY-unsplash.png'
import style from '../styles/mission.module.scss'
const Mission = () => {
    return ( 
        <div className={style.main}>
           <div className={style.section1}>
                <h1>our mission</h1>
                <p>Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>  
            </div>

            <div className={style.section2}>
                <div>
                    <div>
                        <Image src={Img} width="150" height="150" alt="" className={style.img}></Image>
                    </div>

                    <div>
                        <Image src={Img} width="150" height="150" alt="" className={style.img}></Image>
                    </div>
                </div>
                <div>
                    <Image src={Img} width="330" height="150" alt=""></Image>
                </div>
            </div> 
        </div>
     );
}
 
export default Mission;