import Navbar from '../components/navbar'
import Logo from '../public/logo.png'
import HomeStyle from '../styles/home.module.scss'
import HomeLanding from '../components/HomeLanding'
import Button from '../components/button'
import Footer from '../components/footer'
import Slider from '../components/slider' 
import Link from 'next/link'

const Header = () => {
    
    
    return(
        <div className={HomeStyle.main}>
            <div className={HomeStyle.body}>
                <div>
                    <HomeLanding />
                </div>
            </div>
            <div>
            <div className="mt-4">
                <Slider />
            </div>    
           

            </div>
            {/* content about us */}
            <div className={`container ${HomeStyle.content}`}>
                <h1 >about us</h1>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                
                
            <Link href="/about">
                <Button className={HomeStyle.button} title="Know More"/>
            </Link>
            </div>
            {/* <Footer /> */}
        </div>
     );
}
 
export default Header;
