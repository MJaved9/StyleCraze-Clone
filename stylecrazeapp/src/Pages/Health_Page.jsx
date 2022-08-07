import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Navbar from "../Components/Navbar";
function Health_Page() {
  const [data, setData] = useState({});
  const params = useParams();

  useEffect(() => {
    fetch(`http://localhost:8080/health/${params.health_id}`)
      .then((data) => data.json())
      .then((data) => {
        setData(data);
      });
  }, []);
  console.log(data);
  return (

<>
<div>
    <Navbar/>
</div>
<br></br>
<p></p>
<div><br></br><p></p><p></p><br></br></div>
<div style={{display:"grid",textAlign:"justify",padding:"10px 20px 10px 20px"}}>
  <div>
  <h2>{data.title}</h2>
  </div>
    <div>
        <img src={data.img} className='img-fluid1' height='30%'/>
        <h5>{data.discription}</h5>
    </div>
    <div>
        
    </div>
</div>
<button style={{border:"2px solid #fe5c74"}}><Link to="/health"  style={{backgroundColor:"white",color:"black",textDecoration:"none"}}>Go back & Read News</Link></button>
</>

  );
}

export default Health_Page;
