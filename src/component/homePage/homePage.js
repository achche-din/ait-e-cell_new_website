import { queryAllByDisplayValue } from '@testing-library/react';
import React from 'react'
import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';
import './homePage.css';


export const HomePage = () => {
	return (
	    <div>
        <div  className="mainDiv" style={{backgroundImage:`url(https://th.bing.com/th/id/R.847ff106d65ea9b532c2fd27e7848f02?rik=PGH%2fc27r4WEfpg&riu=http%3a%2f%2fwww.organalytix.com%2fwp-content%2fuploads%2f2019%2f06%2fAdobeStock_166579233ORG-D_SMALL-1500x630.jpg&ehk=PCMvuJt%2fpIWU6d1ZD%2bSZNFgNWCQqGnA2x%2bu%2bbVXCpHM%3d&risl=&pid=ImgRaw&r=0)`,padding:"2%",backgroundAttachment:"fixed"}}>
			  <div className="nameCard">
              <img  src="https://aitecell.in/assets/img/portfolio/logo-ait.jpg" alt="AIT E-CELL"/>
              <div style={{paddingTop:"8%"}}><h3>Welcome to <strong>Army Institute of Technology</strong></h3></div>
              <div className="nameCard1">
                <div><img src="https://aitecell.in/assets/img/logo.png" style={{width:"70px" , height:"70px",paddingRight:"2%"}}/> </div>
                <div><h1><span>AIT E-Cell</span></h1></div>
              </div>
              <div>
              <h2>“ Driving the Innovations”</h2>
              </div>
              </div>
            
        </div>
        <div className="mainDiv1">
          <div className="cards1">
              <div style={{margin:"2%"}}>
              <h1>“No idea is so outlandish that it should not be considered”</h1>
                <h1>-Winston Churchill.</h1>
              </div>
                <div style={{margin:"1%"}}><h3>Startup Saga: A bug in start-up</h3></div>
                
                <p>A brilliant notion requires careful refining to become a reality. I&E-Cell of AIT Pune is pleased to deliver one of its kind STARTUP SAGA - A BUG IN A STARTUP.
                   Startup Saga - A bug in a start-up in which we will provide you a specific range of problem statements faced by startups and decide the better innovation towards it.</p>
           <div style={{margin:"2%"}}> <h1>Results are diclared -</h1></div>
         
          <div className="container">
          <div className='track1'>
              <h3>Track 1</h3>
          <p>1.  IIT Sonipat</p>
          <p>2.  AIT Quirks</p>
          <p>3.  Gigabytes</p>
          </div>
          <div className='track2'>
              <h3 style={{margin:"2%"}}>Track 2</h3>
          <p>1. TECHX</p>
          <p>2. Techie Martians</p>
          </div>
          </div>
         
          </div>
          <div className="cards2" >
             <img  style={{height:"100%" , width:"100%"}} src="https://aitecell.in/assets/img/startup-saga.png" alt="balckHat"/>
          </div>
        </div>
        </div>
	)
}


