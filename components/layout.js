import Footer from './footer'
import { useRouter } from 'next/dist/client/router';
const Layout = ({ children }) => {
    const router=useRouter()
    const currentUrlPath=router.pathname.split('/')
    console.log(currentUrlPath);
    return ( 
        <div >
            {children}
            {currentUrlPath[1]==='auth' || currentUrlPath.length === 1?'':<Footer />}
        </div>
     );
}
 
export default Layout;
