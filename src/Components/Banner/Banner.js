import React,{useEffect,useState} from 'react'
import './Banner.css'
import axios from '../../axios'
import {API_KEY,imageUrl} from '../constants/constants'

function Banner() {
  const [movie, setMovie] = useState()
  useEffect(() => {
    axios.get(`trending/all/week?api_key=${API_KEY}`).then((response)=>{
      console.log(response.data.results[0])
      setMovie(response.data.results[0])
    })
    
  }, [])
  
  return (
    <div 
    style={{backgroundImage:`url(${movie? imageUrl+ movie.backdrop_path:""})`}}
    className='banner'>
        <div className='content'>
            <h1 className='title'>{movie? movie.title: ""}</h1>
            <div className='banner-btn'>
                <button className='button'>Play</button>
                <button className='button'>My list</button>
            </div>
            <h1 className='discription'>{movie? movie.overview:""}</h1>
        </div>
        <div className="fade"></div>
        
    </div>
  )
}

export default Banner