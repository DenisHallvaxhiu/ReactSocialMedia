import React from 'react'
import './Home.css'
import ProfileSide from '../../Components/ProfileSide/ProfileSide'
import PostSide from '../../Components/PostSide/PostSide'

const Home = () => {
  return (
    <div className="home">
        <ProfileSide/>
        <PostSide/>
        <div className="rightSide">Rightside</div>
    </div>
  )
}

export default Home