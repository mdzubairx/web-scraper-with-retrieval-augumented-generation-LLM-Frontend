import React from 'react'
import './Answer.css'
import AssistantRoundedIcon from '@mui/icons-material/AssistantRounded';
// import { TypeAnimation } from "react-type-animation";
import Markdown from 'react-markdown'

function Answer({msgA}){

  return(
    <div className='Answer'> <AssistantRoundedIcon fontSize='small' className='AiIcon'/> 
    <div className='text'>
    <Markdown>{msgA}</Markdown>
    </div>
    
  </div> 
    
  )
}

export default Answer;



/* <TypeAnimation
    sequence={[msgA, 1]}
    speed={100} // Controls typing speed
    wrapper="span"
    repeat={0}
    cursor={false} />*/