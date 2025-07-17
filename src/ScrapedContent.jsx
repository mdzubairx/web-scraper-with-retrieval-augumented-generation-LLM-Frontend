import React from 'react'
import './ScrapedContent.css';

function ScrapedContent({content}){
    return(
        <>
            
            <p className='container'>
             <h2>Scraped Content From website</h2>
            <br />
             <i>{content}</i>
            </p>
        </>
    );
}


export default ScrapedContent;