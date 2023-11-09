import React from 'react';
import "./Header.css";
import LiveTvIcon from '@mui/icons-material/LiveTv';



const Header = () => {
  return (
    <div className='header'>
       <span className='tv'><LiveTvIcon  style={{ color:'white', fontSize:'45px'}}/></span> 
        <span className='title'>TVshow</span>
        
       
    </div>
  )
}

export default Header