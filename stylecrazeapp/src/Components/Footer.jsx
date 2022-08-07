import React from 'react'
import { Link } from 'react-router-dom';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import style from './footerStyle.module.css'
import {RiFacebookBoxFill} from "react-icons/ri"
import {FaPinterestP , FaTwitter,FaInstagramSquare,FaYoutube} from "react-icons/fa"

const Footer = () => {
  return (
    <>

    <div className='container' style={{backgroundColor:"hsl(220,5%,88%)"}}>
        <div className={style.footer1}>
            <div>
                <h6><Link to='/about'>About Us</Link></h6>
                <h6><Link to='/about'>Image Usage Policy</Link></h6>
                <h6><Link to='/about'>Contact Us</Link></h6>
                <h6><Link to='/about'>Editorial Guidliness</Link></h6>
                <h6><Link to='/about'>Join Our Medical Board</Link></h6>
                <h6><Link to='/about'>Press Room</Link></h6>
            </div>
            <div>
            <h6><Link to='/about'>Advertise With us</Link></h6>
                <h6><Link to='/about'>Privacy Policy</Link></h6>
                <h6><Link to='/about'>Terms Of Use</Link></h6>
                <h6><Link to='/about'>Affilate Discloser</Link></h6>
                <h6><Link to='/about'>Cookie Policy</Link></h6>
            </div>
            <div>
            <h6><Link to='/about'>About Us</Link></h6>
                <h4><Link to='/about'>Folllow Us</Link></h4>
                <h2><RiFacebookBoxFill/> 
                       <FaPinterestP></FaPinterestP>
                     <FaTwitter/>
                        <FaInstagramSquare/>
                </h2>
                <h2> <FaYoutube/></h2>
            </div>
            <div>
                <h6><Link to='/about'>Our Sister Site</Link></h6>
                <h6><Link to='/about'>MomJuction</Link></h6>
                <h6><Link to='/about'>The Bridal Box</Link></h6>
                <h6><Link to='/about'>Skinkraft</Link></h6>
                <h6><Link to='/about'>Vedix</Link></h6>
            </div>
        </div>
    </div>
<div style={{backgroundColor:"#e6e6e6"}}>
    <h5>Copyright © 2011 - 2022 <b style={{color:"#fe5c74"}}>IncNut Stylecraze Private Limited.</b> All rights reserved.</h5>
    <h6>StyleCraze provides content of general nature that is designed for informational purposes only. The content is not intended to be a substitute</h6>
    <span>for professional medical advice, diagnosis, or treatment. <b style={{color:"#fe5c74"}}>Click here for additional information.</b></span>
</div>
    </>
  )
}

export default Footer