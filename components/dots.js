import style from '../styles/dots.module.scss'
const Dots = ({count , direction}) => {
    console.log(count + "" + direction);
    return ( 
        <div className={style.dots}>
            {/* left dot */}
            <div className={count!==0 && direction<0?`${style.isactive}`:`${style.notActive}`}></div>
            
            {/* center dot */}
            <div className={count===0?`${style.isactive}`:`${style.notActive}`}></div>
            
            {/* right dot */}
            <div className={count!==0 && direction>0 ?`${style.isactive}`:`${style.notActive}`}></div>


        </div>
     );
}
 
export default Dots;