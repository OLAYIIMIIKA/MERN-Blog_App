import { useEffect, useState } from 'react'
import Header from '../../components/Header/Header'
import Posts from '../../components/posts/Posts'
import Sidebar from '../../components/sidebar/Sidebar'
import './Home.css'
import axios from "axios"
import { useLocation } from 'react-router-dom'


export default function Home() {
  const [posts,setPosts] = useState([]);
  const {search} = useLocation();

  useEffect(()=>{
    const fetchPosts = async ()=>{
      const res = await axios.get(process.env.BACKEND_URL+"/api/posts" + search);
      setPosts(res.data)
    }
    fetchPosts()
  },[search] )
  return (
      <>
        <Header/>
        <div className='home'>
          <Posts posts ={posts} />
          <Sidebar/>
        </div>
    </>
  )
}
