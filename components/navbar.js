import React,{useState} from 'react'
import HeaderStyle from '../styles/header.module.scss'
import { Collapse, Media ,Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import Link from 'next/link'
import { useRouter } from "next/router";
import { IoIosMenu } from "react-icons/io";
import { ImCross } from 'react-icons/im'
import Fade from 'react-reveal/Fade'
// IoIosMenuOutline
function MainNavbar() {
    const [links,setlinks]=useState(["home","project","about"])
    const router = useRouter();
    const [toggle,settoggle] = useState(false)    
    // console.log(toggle);
    return (
        <div>
            <Navbar color="faded" className={`container-fluid  w-100 bg-transparent ${HeaderStyle.navbar}`}  light>
                <NavbarBrand className=""  ><div className={HeaderStyle.logo}>TiVRA Ai</div></NavbarBrand>
        
            <Nav className={`d-none d-md-flex ${HeaderStyle.navfull}`}>
                {
                    links.map((items,index)=>{
                        return (
                            <NavItem key={items}>
                                <Link  href={`/${items}`} passHref>
                                    <NavLink className={router.pathname == `/${items}`?HeaderStyle.links : HeaderStyle.navlinks}>
                                        {items}</NavLink>
                                </Link>
                            </NavItem>   
                        )
                    })
                }
            </Nav>
        <div
        // onClick={()=>{ settoggle(true)}}
        className={`d-md-none border-0 d-block  ${toggle?HeaderStyle.icondivnotactive:HeaderStyle.icondiv}`}>
            <IoIosMenu 
            onClick={()=>{ settoggle(true)}}
            className={HeaderStyle.icon}/>
        </div>
        

        {/*  */}        
        <br></br>
       </Navbar>

       <div className={toggle?HeaderStyle.visible:HeaderStyle.invisible}>
       <Fade right Collapse when={toggle===true}>
       <div className={` ${HeaderStyle.sidebar} `}>
        <div className={HeaderStyle.header}>
            <div className={HeaderStyle.cross} onClick={()=>{settoggle(false)}}>
                <ImCross onClick={()=>{settoggle(false)}} />
            </div>
            <div>TiVRA Ai</div>
        </div>

        <Nav className={`d-block d-md-none ${HeaderStyle.sidefull}`}>
                {
                    links.map((items,index)=>{
                        return (
                            
                            <NavItem key={items}  className={HeaderStyle.back}>
                                <Link  href={`/${items}`} passHref>
                                    <NavLink className={router.pathname == `/${items}`?HeaderStyle.links2 : HeaderStyle.navlinks2 }>{items}</NavLink>
                                </Link>
                            </NavItem>
                            
                        )
                    })
                }
            </Nav>
        </div>
        </Fade>
        </div>
       
        {/* } */}
        </div>
    )
}
export default MainNavbar
