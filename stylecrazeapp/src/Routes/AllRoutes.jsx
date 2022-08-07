import React from 'react'
import {Route,Routes} from 'react-router-dom'
import Home from '../Components/Home'

import News from '../Pages/News'
import NewsPage from '../Pages/NewsPage'
import Celebrity from '../Pages/Celebrity'
import Celeb_NewsPage from '../Pages/Celeb_NewsPage'

import About from '../Pages/About'
import Makeup from '../Pages/Makeup'
import Health_Page from '../Pages/Health_Page'
import Health from '../Pages/Health'
const AllRoutes = () => {
  return (
    <div>
<Routes>
    <Route path='/' element={<Home/>}></Route>
    <Route path='/news' element={<News/>}></Route>
    <Route path='/news/:news_id' element={<NewsPage/>}></Route>
    <Route path='/celeb' element={<Celebrity/>}></Route>
    <Route path='/celeb/:celeb_id' element={<Celeb_NewsPage/>}></Route>
    <Route path='/about' element={<About></About>}></Route>
    <Route path='/makeup' element={<Makeup/>}></Route>
    <Route path='/health' element={<Health/>}></Route>
    <Route path='/health/:health_id' element={<Health_Page/>}></Route>
</Routes>

    </div>
  )
}

export default AllRoutes