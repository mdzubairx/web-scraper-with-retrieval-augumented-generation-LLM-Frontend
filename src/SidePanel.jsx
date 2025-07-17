import './SidePanel.css';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import React from 'react';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

// import axios from 'axios';

function SidePanel(){
   const navigate = useNavigate();

    function gotoHome(){
        navigate("/");
        // axios({
        //     method: 'delete',
        //     url: 'http://localhost:3000/delete-vector-data',
        //   }).then((res)=>{
        //     console.log("The vector database is deleted");
        //   }).catch((err)=>{
        //     console.log(err);
        //   })
    }

    function gotoIntro(){
        navigate("/intro");
    }

    
    return (
        <>
        <div className="SidePanel">
            <h3 className='ai-interactive-scraper'>AI-INTERACTIVE-SCRAPER</h3>

        <div className='animation'>
            <DotLottieReact
            src="https://lottie.host/3c440784-8ff9-44d3-9800-49fb4b83490b/KcxChfMD9P.lottie"
            loop
            autoplay
             />
        </div>

            <br /><br /><br /> <br /><br />

             <Button  onClick={gotoHome} variant="outlined" size="medium" className='btn' style={{marginBottom : '20px', color: 'purple', borderColor: 'purple'}}>
                Home Page
           </Button>

           <Button  onClick={gotoIntro} variant="outlined" size="medium" className='btn' style={{marginBottom : '20px', color: 'purple', borderColor: 'purple'}}>
                Introduction Page
           </Button>
        </div>
        
        </>
    );
}

export default SidePanel;