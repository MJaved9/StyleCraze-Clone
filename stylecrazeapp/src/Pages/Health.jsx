import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { Link, searchParams, useNavigate, useSearchParams } from 'react-router-dom'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Navbar from '../Components/Navbar';
import style from './newsStyle.module.css'
import { axios } from 'axios'
const Health = () => {
  const [newsdata, setnewsData] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const [page, setPage] = useState(Number(searchParams.get("page")) || 1);

  // const getnews=async()=>{
  //   fetch(`http://localhost:8080/news`)
  //   .then((newsdata) => newsdata.json())
  //   .then((newsdata) => {
  //     setnewsData(newsdata);

  //   });
  // }
  useEffect(() => {
    fetch(`http://localhost:8080/health?_page=${page}&_limit=6`)
      .then((newsdata) => newsdata.json())
      .then((newsdata) => {
        setnewsData(newsdata);
      });
  }, [page]);

  useEffect(() => {
    setSearchParams({
      page,
    });
  }, [page]);

  // console.log(newsdata)
  const navigate=useNavigate();

  return (
    <>
      <div>
        <Navbar />
      </div>
      <p></p>
      <br></br>
      <div><br></br><p></p><p></p><br></br></div>

      <div className='container'>
        <div className={style.news1}>
          <button>Braned News</button>
          <button onClick={()=>navigate('/news')}>old_News</button>
          <button onClick={()=>navigate('/celeb')}>Trends</button>
          <button>Rangoli</button>
          <button>Flowers</button>
        </div>
        <br></br>
        <div className={style.news1}>
          <button>Tatto</button>
          <button onClick={()=>navigate('/health')}>Top 10`</button>
          <button onClick={()=>navigate('/news')}>Fashion</button>
        </div>
      </div>
      <br></br>
      <p></p>

      <div className='container'>
        <div className={style.news2}>
          {newsdata.map((ele) => {
            return <>
              <div>
              <Link to={`/health/${ele.id}`}>
                <img src={ele.img} className='img-fluid' />
                <h4>{ele.title}</h4></Link>
              </div>
            </>
          })
          }
        </div>
        <div>
          <button className='btn btn-primary' disabled={page === 1} onClick={() => setPage(1)}>
            1
          </button> &nbsp;&nbsp;
          <button className='btn btn-dark' disabled={page === 2} onClick={() => setPage(2)}>
            2
          </button>
        </div>


      </div>
<br></br>
<p></p>
    </>
  )
}

export default Health;