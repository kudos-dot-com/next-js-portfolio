import Footer from './footer'
import { useRouter } from 'next/dist/client/router';
const Layout = ({ children }) => {
    const router=useRouter()
    const currentUrlPath=router.pathname.split('/')[1]
    console.log(currentUrlPath);
    return ( 
        <div >
            {children}
            {currentUrlPath==='auth'?'':<Footer />}
        </div>
     );
}
 
export default Layout;