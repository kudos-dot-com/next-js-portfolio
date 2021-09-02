import Navbar from './navbar'
import Logo from '../public/logo.png'
import HeaderStyle from '../styles/header.module.scss'
import Image from 'next/image'
import Button from './button'

const Header = () => {
    return ( 
        <div >
        <Navbar />
        <div className={HeaderStyle.headerbody}>
        {/* image */}
        <div className={HeaderStyle.imagelogo}>
            <Image  src={Logo} alt="" />
        </div>
        {/* text */}
       <div className={HeaderStyle.body}>
            <h1 className={`${HeaderStyle.glitch}`} data-text="Drive To The Future">Drive To The Future</h1>
        </div>
        {/* button */}
        <Button title="dive in"/>
        </div>
        </div>
     );
}
 
export default Header;
