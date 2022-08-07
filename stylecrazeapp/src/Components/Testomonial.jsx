import React from 'react'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import style from './Homestyle.module.css'
const Testomonial = () => {
  return (
    <>
    <div className='container' style={{backgroundColor:"hsl(351,99%,68%)"}}>
        <p></p><br></br>
                <div>
                    <h2 style={{ textDecoration: "underline 2px solid white", fontWeight: "lighter",color:"white" }} >TESTIMONIALS</h2>
                </div>
                <br></br>
                <p></p>
                <div className={style.inpress}>
                    <div>
                    <p></p>
                    “As an introvert, I have always found it hard to break the ice or to continue conversations. The witty yet well-researched content of this website has helped me express myself better in various situations.”
                        <p></p>
                        <h5 style={{ color:"#fe5c74", fontWeight: "bold" }}>-Gayatri Gogoi</h5>
                        <p></p>
                        <p></p>
                    </div>
                    <div>
                    <p></p>
                    “As an introvert, I have always found it hard to break the ice or to continue conversations. The witty yet well-researched content of this website has helped me express myself better in various situations.”
                        <p></p>
                        <h5 style={{ color:"#fe5c74", fontWeight: "bold" }}>-Priya Thawani</h5>
                        <p></p>
                        <p></p>
                    </div>
                    <div>
                    <p></p>
                    “As an introvert, I have always found it hard to break the ice or to continue conversations. The witty yet well-researched content of this website has helped me express myself better in various situations.”
                        <p></p>
                        <h5 style={{ color:"#fe5c74", fontWeight: "bold" }}>-Priya Dikshit</h5>
                        <p></p>
                        <p></p>
                    </div>
                </div>
                <br></br>
                <p></p>

            </div>
    
    
    </>
  )
}

export default Testomonial