import React from 'react'
import style from './compstyle.module.css'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
const Navbar = () => {
    return (
        <>
            <div className="container" style={{position:"fixed",backgroundColor:"white"}}> {/* Navbar Div  */}
           
             <div className={style.logo} >
                <button className={style.test}>X</button>
                    <div>
                      <Link to='/'><img src='https://cdn2.stylecraze.com/wp-content/themes/buddyboss-child/images/sc-logo.png' className="img-fluid"></img>
                      </Link>
                    </div>
                    
                    <div className="col-auto">
                       <input type="text" className="form-control" id="search"  placeholder="search" style={{borderRadius:"10px"}} />
                    </div>

                </div>
               <div className={style.navLink}>
                <div>

                    <Link to='/celeb'>MAKEUP <span>|</span></Link>

                    <Link to='/makeup'>MAKEUP</Link>
                </div>
                <div>
                    <Link to='/news'>HAIR CARE <span>|</span></Link>
                </div>
                <div>
                    <Link to='/health'>SKIN CARE <span>|</span></Link>
                </div>
                <div>
                    <Link to='/celeb'>HAIRSTYLES <span>|</span></Link>
                </div>
                <div>
                    <Link to='/health'>HEALTH & WELLNESS <span>|</span></Link>
                </div>
                <div>
                    <Link to='/news'>NEWS <span>|</span></Link>
                </div>
                <div>
                    <Link to='/'>TOOLS <span>|</span></Link>
                </div>
                <div>
                    <Link to='/celeb'>PRODUCTS <span>|</span></Link>
                </div>
                <div>
                    <Link to='/about'>ABOUT US</Link>
                </div>
               </div>
            </div> {/* Main Div End */}

        </>
    )
}

export default Navbar