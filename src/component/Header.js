import React, { useEffect, useState } from 'react'
import '../component/headerStyle.css'

function Header() {
    const[isDarkMode,setIsDarkMode] = useState(false);
    const[move,setMove] = useState('left');

    const checkMode = ()=>{
        setIsDarkMode(!isDarkMode);
    }
    

    
    const themeChange = {
        width : '20px',
        height : '20px',
        borderRadius :'50%',
        backgroundColor :'black',
        border:'1px solid silver',
        cursior:'pointer',
        transitionDuration: "5s",
        float : move
       }

    const toggleTheme = ()=>{
    setIsDarkMode(!isDarkMode);
        
       if(isDarkMode){
        setMove('right');
         return{
            
         }
       }
       else{
        setMove("left")
        return{
            
         }
       }
       
    }
    
        
useEffect(()=>{
    if(isDarkMode){
        document.body.style.background = ' linear-gradient(360deg, black 100%, cyan,#06b6d4)'
        document.body.style.color = 'white'
    }
    else{
        document.body.style.background = 'linear-gradient(45deg, white 40%, cyan,#06b6d4)'; 
        document.body.style.color = 'black'
    }
},[isDarkMode])

  return (
    
    <>
    <div>
   <div className={isDarkMode ? "dark" : "outter-div"}>
    <div className='inner-div'>
        <h3 style={{margin:'5px 5px'}}>TextUtils</h3>
        <div style={{display:'flex'}}>
            <ul className='list-item'>
                <li style={{color:'#06b6d4'}}>Home</li>
                <li style={{color:'grey'}}>About Us</li>
                <li style={{color:'grey'}}>Contact</li>
            </ul>
        </div>
    </div>
    <div className='toggle-div'>
        <button style={themeChange} id='darkmode' onClick={toggleTheme}></button>
    </div>
   </div>
   </div>
    </>
  )
}

export default Header
