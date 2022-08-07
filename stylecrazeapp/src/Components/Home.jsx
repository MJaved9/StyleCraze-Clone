import React from 'react'
import Navbar from './Navbar'
import { Link } from 'react-router-dom'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import style from './Homestyle.module.css'
import Makeup from '../Pages/Makeup';
import Testomonial from './Testomonial';
import Footer from './Footer';
const Home = () => {

    return (
        <>
            <div className='container'>
                <Navbar />
            </div>
            <br></br>
            <div className='container' style={{display: "flex" }}>
                <div>
                    <Link to="/news"><img src='https://cdn2.stylecraze.com/wp-content/uploads/2019/03/How-To-Style-Converse-Shoes-With-Dresses--17-Outfit-Ideas-1.jpg.webp' className="img-fluid" /></Link>
                    <h2>How To Style Converse Shoes With Dresses – 17 Outfit Ideas</h2>
                </div>
                <div>
                    <Link to="/celeb"><img src='https://cdn2.stylecraze.com/wp-content/uploads/2019/03/27-Cute-Summer-Date-Ideas-To-Explore-With-Your-Loved-One.jpg.webp' className='img-fluid' /></Link>
                    <h2>27 Cute Summer Date Ideas To Explore With Your Loved One</h2>
                </div>
                <div>
                    <Link to="/health"><img src='https://cdn2.stylecraze.com/wp-content/uploads/2019/03/A-Complete-History-Of-Lipsticks.jpg.webp' className="img-fluid" /></Link>
                    <h2>A Complete History Of Lipsticks centuries and ages read more</h2>
                </div>
            </div>
            <br></br>
            <div className='container'>
                <div className={style.social1}>
                    <div className={style.social2} >
                        <div>FACEBOOK</div>
                        <div>2M Followers</div>
                        <div>INSTAGRAM</div>
                        <div>789K Followers</div>
                        <div>PINTEREST</div>
                        <div>1M Followers</div>
                    </div>
                </div>
            </div>
            <br></br>

            <div className='container'>
                <div>
                    <h2 style={{ textDecoration: "underline 2px solid red", fontWeight: "lighter" }}>
                        MAKEUP
                    </h2>
                </div>

                <div className={style.makeup}>
                    <div>
                        <img src="https://cdn2.stylecraze.com/wp-content/uploads/2019/02/How-To-Do-French-Makeup-2.jpg.webp" className='img-fluid' />
                    </div>
                    <div>
                        <h4>How To Do French Makeup</h4>
                        French makeup is a rage among beauty <p></p> enthusiasts as it offers an effortlessly flawless <p></p>and elegant look. The reason is Parisian <p></p> women do not really seek a perfect <p></p>transformative look. Their makeup is all about <p></p>highlighting and enhancing their natural […]
                        <p></p>
                        <Link to="/blog"><h6 style={{ textDecoration: "none", color: "red" }}>Esha Saxena ● 4.3 shares</h6>
                        </Link>
                    </div>
                </div>
                <br></br>
                <p></p>
                <div className={style.makeup2}>
                    <div>
                        <img src='https://cdn2.stylecraze.com/wp-content/uploads/2019/02/7-Different-Nail-Shapes-And-How-To-Achieve-Them.jpg.webp' className='img-fluid' />
                        <h4>7 Different Nail Shapes And How To Achieve Them</h4>
                        <p></p><Link to="/blog"><h6 style={{ textDecoration: "none", color: "red" }}>Esha Saxena ● 4.3 shares</h6>
                        </Link>
                    </div>
                    <div>
                        <img src='https://cdn2.stylecraze.com/wp-content/uploads/2019/02/How-To-Choose-The-Right-Concealer--Tips-On-Shades-And-Formulas.jpg.webp' className='img-fluid' />
                        <h4>7 Different Nail Shapes And How To Achieve Them</h4>
                        <p></p><Link to="/blog"><h6 style={{ textDecoration: "none", color: "red" }}>Esha Saxena ● 4.3 shares</h6>
                        </Link>
                    </div>
                    <div>
                        <img src='https://cdn2.stylecraze.com/wp-content/uploads/2019/02/Simple-Gold-Eye-Makeup-Tutorial.jpg.webp' className='img-fluid' />
                        <h4>7 Different Nail Shapes And How To Achieve Them</h4>
                        <p></p><Link to="/blog"><h6 style={{ textDecoration: "none", color: "red" }}>Esha Saxena ● 4.3 shares</h6>
                        </Link>
                    </div>
                </div>

            </div>
            <br></br>
            <p></p>
            {/* Health & WellNes Section */}

            <div className='container'>
                <div>
                    <h2 style={{ textDecoration: "underline 2px solid red", fontWeight: "lighter" }}>
                        HEALTH & WELLNESS
                    </h2>
                </div>
                <br></br>
                <div className={style.makeup}>
                    <div>
                        <img src="https://cdn2.stylecraze.com/wp-content/uploads/2013/12/21-Best-Weight-Loss-Smoothie-Recipes-To-Help-You-Lose-Fat.jpg.webp" className='img-fluid' />
                    </div>
                    <div>
                        <h4>21 Best Weight Loss Smoothie Recipes To Help</h4>
                        If you want to lose your belly fat, get rid of <p></p> excess weight, and stay healthy, then you can <p></p>try the smoothie recipes for weight loss. <p></p>Smoothies are delicious and easy to prepare. <p></p>You don’t need to worry as they […]
                        <p></p>
                        <Link to="/blog"><h6 style={{ textDecoration: "none", color: "red" }}>Reviewed by Merlin Annie Raj, Registered Dietitian Nutritionist, <p></p>RD (Registered Dietitian)
                            ● 16.6 shares</h6>
                        </Link>
                    </div>
                </div>
                <br></br>
                <p></p>
                <div className={style.makeup2}>
                    <div>
                        <img src='https://cdn2.stylecraze.com/wp-content/uploads/2013/12/11-Best-Foods-To-Help-Children-Grow-Taller.jpg.webp' className='img-fluid' />
                        <h4>11 Best Foods To Help Children Grow Taller</h4>
                        <p></p><Link to="/blog"><h6 style={{ textDecoration: "none", color: "red" }}>Medically Reviewed by Reda Elmardi, RDN, RDN
                            ● 1.1 shares</h6>
                        </Link>
                    </div>
                    <div>
                        <img src='https://cdn2.stylecraze.com/wp-content/uploads/2013/12/15-Arm-Workouts-Without-Weights-To-Lose-Arm-Fat-Fast-At-Home.jpg.webp' className='img-fluid' />
                        <h4>15 Arm Workouts Without Weights To Lose Arm Fat</h4>
                        <p></p><Link to="/blog"><h6 style={{ textDecoration: "none", color: "red" }}>Medically Reviewed by Dr. Sudhansu Singh, BPT, BPT
                            ● 4.7 shares</h6>
                        </Link>
                    </div>
                    <div>
                        <img src='https://cdn2.stylecraze.com/wp-content/uploads/2019/02/Simple-Gold-Eye-Makeup-Tutorial.jpg.webp' className='img-fluid' />
                        <h4>Do Home Remedies For Carpal Tunnel Really Have</h4>
                        <p></p><Link to="/blog"><h6 style={{ textDecoration: "none", color: "red" }}>Sanchari Bhattacharya</h6>
                        </Link>
                    </div>
                </div>
                <button style={{ float: 'right', padding: "2px 10px 2px 10px", border: "none", color: "red", borderLeft: "2px" }}>Read More</button>
            </div> {/* Health & Wellness end */}
            <br></br>
            <p></p>
            <br></br>

            <div className='container' style={{backgroundColor:"hsl(351,99%,68%)"}}>
                <div>
                    <h2 style={{ textDecoration: "underline 2px solid white", fontWeight: "lighter",color:"white" }} >IN PRESS</h2>
                </div>
                <br></br>
                <p></p>
                <div className={style.inpress}>
                    <div>
                    <p></p>
                        <img src='https://cdn2.stylecraze.com/wp-content/uploads/2021/06/itv-logo-1-300x41.png.webp' className='img-fluid' />
                        <p></p>
                        <h5>#WearYourColor & reclaim the<br></br> beauty narrative:</h5>
                        <p></p>
                        <p></p>
                    </div>
                    <div>
                    <p></p>
                        <img src='https://cdn2.stylecraze.com/wp-content/uploads/2021/09/Hindu-300x71.png.webp' className='img-fluid' />
                        <p></p>
                        <h5>#WearYourColor & reclaim the<br></br> beauty narrative:</h5>
                        <p></p>
                        <p></p>
                    </div>
                    <div>
                        <p></p>
                        <img src='https://cdn2.stylecraze.com/wp-content/uploads/2021/06/BW-logo-300x38.png.webp' className='img-fluid' />
                        <p></p>
                        <h5>#WearYourColor & reclaim the<br></br> beauty narrative:</h5>
                        <p></p>
                        <p></p>
                    </div>
                </div>
                <br></br>
                <p></p>

            </div>
  <p></p>
  <br></br>          
{/* Doc Team */}
<div className='container'>
    <h2 style={{ textDecoration: "underline 2px solid red", fontWeight: "lighter" }}>
    MEDICAL REVIEWERS
    </h2>
    <p></p>
    <br></br>
    <div className={style.doc}>
        <div className={style.inside_doc}>
            <div>
                <img src="https://www.stylecraze.com/static-content/aboutus/Vindhya.jpg"  className='img-fluid img-thumbnail'/>
            </div>
            <div>
            <h5 style={{ color:"#fe5c74", fontWeight: "bold" }}>Dr Vidya L Veerulla</h5>
                <br></br>
                <h5> MD,FAAD</h5>
            </div>
            <div>
                <img src="https://cdn2.stylecraze.com/wp-content/uploads/2018/11/Dr-Perpetua-Neo-DClinPsy-UCL-MPhil-1.jpg.webp"  className='img-fluid img-thumbnail'/>
            </div>
            <div>
            <h5 style={{ color:"#fe5c74", fontWeight: "bold" }}>Dr Perpetua Neo</h5>
            <br></br>
                <h5>DClinPSY, UCL , MPHIL</h5>
            </div>
            <div>
                <img src="https://cdn2.stylecraze.com/wp-content/uploads/2019/01/Dr-Jill-Carnahan.jpg.webp"  className='img-fluid img-thumbnail'/>
            </div>
            <div>
            <h5 style={{ color:"#fe5c74", fontWeight: "bold" }}>Dr. Jill Carnahan</h5>
                <br></br>
                <h5>MD, ABFM , ABIHM, IFMCP
            </h5>
            </div>
        </div>

    </div>

    <div className={style.inside_doc}>
            <div>
                <img src="https://cdn2.stylecraze.com/wp-content/uploads/2018/11/Alexandra-Dusenberry-MS-RDN.jpg.webp"  className='img-fluid img-thumbnail'/>
            </div>
            <div>
            <h5 style={{ color:"#fe5c74", fontWeight: "bold" }}>
            Alexandra Dusenderry</h5>
            <br></br>
                <h5>MS , RDN</h5>
            </div>
            <div>
                <img src="https://cdn2.stylecraze.com/wp-content/uploads/2019/01/Mollie-Meldahl.jpg.webp"  className='img-fluid img-thumbnail'/>
            </div>
            <div>
            <h5 style={{ color:"#fe5c74", fontWeight: "bold" }}>Dr Mollie Meldahl </h5>
               <br></br> 
               <h5>RD, LD,CPT
            </h5>
            </div>
            <div>
                <img src="https://cdn2.stylecraze.com/wp-content/uploads/2019/03/Dr.-Kendall-R.-Roehl.jpg.webp"  className='img-fluid img-thumbnail'/>
            </div>
            <div>
            <h5 style={{ color:"#fe5c74", fontWeight: "bold" }}>Dr Kendall R.Roehl </h5>
                <br></br>
                <h5>MD, FACS</h5>
            </div>
        </div>
        <h5>Our team of 80+ doctors, nutritionists, dermatologists, and wellness professionals reviews all our articles for medical and factual accuracy.</h5>
<button style={{padding:"12px 40px 12px 40px",backgroundColor:"#fe5c74 ",color:"white",borderRadius:"10px"}}>MEET THE TEAM</button>
</div>
{/* Doc team end */}
<p></p>
<br></br>

<div className='container'>
<Testomonial/>
</div>

<div className='container'>
<Footer/>
</div>


            {/* For Exrtra Space At end */}
            <br></br>
            <p></p>
        </>
    )
}

export default Home