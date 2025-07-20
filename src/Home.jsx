import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import axios from 'axios';
import { useState } from 'react';
import Summary from './Summary';
import { useNavigate } from 'react-router-dom';
import ScrapedContent from './ScrapedContent';
import './Home.css';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

function Home(){

  let [Input, SetInput] = useState('');
  let [summary , Setsummary] = useState('Summarized Text Will be Showed here');
  let [scrapedText, SetscrapedText] = useState('Scraped Text will appear here');
  let [loading, Setloading] = useState(false);
  const navigate = useNavigate();

 async function gotochat(){
  Setloading(true);
    await axios({
      method : 'post',
      url : 'https://web-scraper-with-retrieval-augumented.onrender.com/ScrapAndChat',
      headers : {
        'Content-Type': 'application/json',
      },
      data: {
        InputLink : Input,
      }
    }).then((res)=>{
      console.log(res.data.statusNow);
      navigate("/ScrapAndChat")
      Setloading(false);

    }).catch((err)=>{
      console.log(err);
    })

  }

    function HandleChange(e){
     SetInput(e.target.value);
    }

   async function HandleSubmit(e){
      e.preventDefault();
      console.log(Input);
      Setloading(true);

     await axios({
        method: 'post',
        url: 'https://web-scraper-with-retrieval-augumented.onrender.com/summarize',
        headers: {
            'Content-Type': 'application/json',
        },
        data: {
          InputLink : Input,
        }
      }).then((res)=>{
        console.log(res.data.text);
        Setsummary(res.data.text);
        SetscrapedText(res.data.scrapedTxt);
      }).catch((err)=>{
        console.log(err);
      })

      SetInput("");
      Setloading(false);
    }


    return (
    <div className='outerConatiner'>
    <div className='Container'>
    <h1 className='Interactive-Scraper-AI'>Interactive Scraper AI</h1>
    <form  onSubmit={HandleSubmit}>
    <Box sx={{ width: 850, maxWidth: '100%' }}>
      <TextField fullWidth label="Enter URL" id="fullWidth" value={Input} onChange={HandleChange} placeholder='Enter URL' color='secondary' style={{backgroundColor: 'white', borderRadius: '4px' , borderColor: 'white'}} />
    </Box>
    <br />
    <Button variant="outlined" type="submit" style={{ color: 'white', borderColor: 'white'}}>Scrape & Summarize Website</Button> &nbsp;&nbsp;&nbsp;
    <Button variant="outlined" onClick={gotochat} style={{color: 'white', borderColor: 'white'}}>Chat with website</Button>
    </form>
    <br />

    {loading && <div className='loading' >
                
                <DotLottieReact
                 src="https://lottie.host/d1f14225-7127-46c3-8bb2-83f64907213a/wM0zGrGSlG.lottie"
                 loop
                autoplay/> 
                <span style={{color: 'white'}}>Loading...</span>
                </div>
      }
    <br />
    <br />
    <Summary SummaryText={summary}></Summary>
    <br />
    <ScrapedContent content={scrapedText}/>
    </div>
    </div>
    )
}

export default Home;