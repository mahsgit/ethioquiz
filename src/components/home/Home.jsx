import React from 'react'
import Header from '../header/Header'
import Posts from '../posts/Posts'
import Sidebar from '../sidebar/Sidebar'

const Home = () => {
  return (
    <div>
      <Header/>
      <div className="belowheader">
        <Posts/>
        <Sidebar/>
      </div>
    </div>
  )
}

export default Home
