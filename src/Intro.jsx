import React from 'react';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import './Intro.css';
import Button from '@mui/material/Button';
import {useNavigate} from 'react-router-dom';

function Intro(){
   const navigate = useNavigate();

function gotoHome(){
    navigate("/");
}

    return(
        
    <div className="outercontainer">
        <div className="intro">
        <h1>
            AI Interactive Scraper
        </h1>
        <h3>
            AI Interactive Scraper is an AI-powered web application that combines intelligent web scraping with conversational AI. Simply enter a website URL, and the app automatically scrapes the site's content, transforms it into vectorized chunks using embedding model, and stores them in Pinecone, a powerful vector database for fast and accurate retrieval. Then, it allows you to interact with that content through a LLM chatbot.
        </h3>
        <h3>
        Using Retrieval-Augmented Generation (RAG), AI Interactive Scraper retrieves the most relevant content from the Pinecone based on your query and generates accurate, context-aware responses. Ideal for exploring websites, summarizing services, or extracting insights without reading the entire page.
        </h3>
        <Button variant="outlined" onClick={gotoHome} style={{color: 'purple', borderColor: 'purple'}}>Scrape website</Button>

        </div>

        <div className="Animie">
            <DotLottieReact
             src="https://lottie.host/d9866538-8121-4a7b-94b7-a0be8dbef222/kc85E34o2z.lottie"
             loop
             autoplay
            />
        </div>
    </div>
    );
}

export default Intro;