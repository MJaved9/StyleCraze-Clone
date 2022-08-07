import React from 'react'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Navbar from '../Components/Navbar';
import style from './aboutStyle.module.css'
import Footer from '../Components/Footer'
const About = () => {
  return (
    <>
    <div>
      <Navbar/>
    </div>
    <div>jj<p>J</p></div>
    <br></br>
    <p></p>
    <div className='container'>
<div className={style.about1}>
  <div style={{backgroundColor:"#e6e6e6"}}>
    <table>
      <th style={{float:"left"}}>
        Table Of Contents
      </th>
      <br></br>
      <tr>About us</tr>
      <tr>Our Review Board</tr>
      <tr>Editorial Policies</tr>
      <tr>Our Team</tr>
      <tr>Our Policies</tr>
      <tr>Contact Us</tr>
    </table>
  </div>
<div style={{textAlign:"justify"}}>
<h2>Empower and inspire women of today to lead healthier and happier lives</h2>
<br></br>
<h6>StyleCraze is a global women's platform that aims to answer one question: what do women want? From health and wellness to lifestyle and beauty – we provide answers to women in all spheres to celebrate their unique needs and individuality. Our goal is to empower women from all walks of life and various intersections of identity to lead healthier and happier lives.
<p></p>
We have a highly engaged audience of 25 million (and counting!) across all platforms. We focus on Health & Wellness, Skin Care, Hair Care, Makeup, Hairstyles, Fashion, Relationships, and more. Whether it is advice from a trusted expert or a DIY tutorial, we have it all covered.</h6>
<br>
</br>
<h2>Our Review Board</h2>
<br></br>
<h6>StyleCraze’s review board consists of a team of board-certified doctors, registered dietitians and nutritionists, dermatologists, and beauty and wellness experts who ensure that our articles are medically and factually accurate, evidence-based, current, relevant, and reader-centric. These highly experienced professionals not only verify the content but also add their unique perspectives based on their diverse experience and backgrounds in research and applied clinical practice.</h6>
<p></p>Know more about our medical review board and expert panel.
<br></br>

<h2>Our Team</h2>
<br></br>
<h6>The editorial team is responsible for managing all of the content on our website. Our experienced and certified editors and writers are specialists in their areas of coverage and break down complex information in a clear, easy-to-understand format.</h6>
<p>Know more about our editorial and management teams</p>

<br></br>

<h2>Advertising Policy</h2>
<br></br>
<h6>StyleCraze aims to provide access to quality content to its readers. To help us maintain the resources needed to achieve this goal, we accept and display advertisements on the site. However, there is a clear demarcation between editorial and advertising content.</h6>
<p>For more details, read our Advertising Policy.</p>

<br></br>

<h2>Terms of Use</h2>
<br></br>
<h6>Access to and use of StyleCraze is subjected to certain terms and conditions. Using our web platforms indicates that you agree to the Terms Of Use.</h6>
<br></br>


<h2>Our Mailing Address:</h2>
<br></br>
<h6>IncNut Stylecraze Private Limited,
G-3 (Ground Floor),</h6>
<p>Modern Profound Tech Park</p>
<p>Whitefields, Kondapur,</p>
<p>Hyderabad - 500081, Telangana</p>
<br></br>


</div>
</div>
<br></br>
    <Footer/>
</div>
    
    
    </>
  )
}

export default About