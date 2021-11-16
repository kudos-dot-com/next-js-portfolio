import React,{useState} from 'react'
import FooterStyle from '../styles/footer.module.scss'
import Image from 'next/image'
import Icon from '../assets/icon' 
import Support from '../assets/support'
import { Collapse, Media ,Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import Link from 'next/link'
import { AiOutlineInstagram , AiOutlineTwitter, AiFillLinkedin } from 'react-icons/ai'
import { FaFacebook,FaYoutube } from 'react-icons/fa'
import { social } from '../assets/info'
import { collection, addDoc } from "firebase/firestore";

const Footer = () => {
    const [links,setlinks]=useState(["home","project","about"])
    const [Email,setemail]=useState("");
    const [status,setstatus]=useState(false)
    async function SendEmail()
    {
        console.log(Email);
        const e={
            email:Email
        }
        try {
            const docRef = await addDoc(collection(db, "emails"), e);
            console.log("Document written with ID: ", docRef.id);
            setstatus(true);
            localStorage.clear()
          } catch (err) {
            setstatus(false);
            console.error("Error adding document: ", err);
          }
    }
    return ( 
        <div className={`container-fluid container-md  ${FooterStyle.body}`}>
            <div className={FooterStyle.section1}>
            <h1 className={FooterStyle.logo} ><b >TiVRA Ai</b></h1>
            <div className={FooterStyle.IconTile}>
                
            <div className={FooterStyle.icon}>
            <a href={social.facebook}><FaFacebook /></a>
            </div>

            <div className={FooterStyle.icon}>
               <a href={social.linkedin} >
               <AiFillLinkedin />
               </a>
            </div>

            <div className={FooterStyle.icon}>
            <a href={social.twitter}><AiOutlineTwitter /></a>
                        
            </div>

            <div className={FooterStyle.icon}>
            <a href={social.instagram}><AiOutlineInstagram /></a>
                
            </div>
                
                {/* {
                    Icon.icon.map(items=>{
                        return (
                            <div  key={items.data} className={FooterStyle.icon}>
                                <Image 
                                height="30"
                                width="30"
                                src={items.data} 
                                alt="" ></Image>
                            </div>
                        )
                    })
                } */}
            </div>
            </div>

            {/* support */}
            <div className={FooterStyle.section2}>
            <div className={FooterStyle.subpart}>
            <h2 className={FooterStyle.Support}><b>Support</b></h2>
                <h3 className={FooterStyle.SupportData}>Contact</h3>
                <h3 className={FooterStyle.SupportData}>FAQs</h3>
                <h3 className={FooterStyle.SupportData}>Products</h3>
                <h3 className={FooterStyle.SupportData}>Downloads</h3>
            {/* {
                Support.item.map(item=>{
                        return (
                            <div  key={item.data} >
                                <h3 className={FooterStyle.SupportData}>{item.data}</h3>
                            </div>
                        )
                })
            }    */}
            </div>    

             {/* tivra */}
             <div>
            <h2 className={FooterStyle.Support}><b>TiVRA Ai</b></h2>
                <Link href={`/home`} passHref>
                    <NavLink className={FooterStyle.SupportData} >home</NavLink>
                </Link>

                <Link href={`/project`} passHref>
                    <NavLink className={FooterStyle.SupportData} >project</NavLink>
                </Link>

                <Link href={`/about`} passHref>
                    <NavLink className={FooterStyle.SupportData} >about</NavLink>
                </Link>

            {/* {
                links.map((items,index)=>{
                    return (
                        <div key={items}>
                            <Link href={`/${items}`} key={items} passHref>
                                <NavLink className={FooterStyle.SupportData} key={items}>{items}</NavLink>
                            </Link>
                        </div>   
                    )
                })
            }    */}
            </div>
            </div>
        {/* feedback */}
        <div className={FooterStyle.section3}>
        <h2 className={FooterStyle.Support}><b>Stay In Touch</b></h2>
        <form>
            <input type="text"
            onChange={(e)=>{setemail(e.target.value)}} 
            placeholder="Enter Your Email"
            className={FooterStyle.form}></input>
            <br />
            {
          status?
          <p>Thank You!</p>:""}
            <button type="submit" onClick={SendEmail} className={FooterStyle.button}>send</button>
        </form>
        </div>    
        </div>
     );
}
 
export default Footer;