import React, { useState } from 'react';
import { useEffect } from 'react';
import './index.css';
import hexnodekiosk from './assets/hexnode-kiosk.webp';
import idc from './assets/idc.webp';
import gartner from './assets/gartner.webp';
import forrester from  './assets/forrester.webp';
import mobilephoto from './assets/mobilepic.webp';
import supportimg from './assets/additionalimg.webp';
import personimg from './assets/personimg.webp';


function Homepage() {

  
  useEffect(() => {                                                 
  
  },[])

  return (
    <div className="hero-container">
      {/* Navbar */}
      <header>
        <nav className="navbar">
          <h1 className="logo">hexnode</h1>
          <button className="trial-button">14 DAY FREE TRIAL</button>
        </nav>
      </header>

      {/* Hero Content */}
      <main className="hero-content">
  {/* Left Side (Text) */}
  <section className="hero-text">
    <h2>Turn your devices into kiosks in a few minutes with Hexnode UEM</h2>
    <div className="input-container">
      <input type="email" placeholder="Your Work Email" />
      <button className="cta-button">GET STARTED NOW!</button>
    </div>
  </section>

  {/* Right Side (Image) */}
  <section className="hero-image">
    <img src={hexnodekiosk} alt="Devices" />
  </section>
</main>

      {/* Footer Info */}
      <section className="infoText">
      <div className="hexnode-info">
        <div className="info-box">
        <img src={idc} alt="info1" />
          <p>Hexnode is listed as a leader and a major player in IDC MarketScape UEM Vendors Assessment Reports 2024.</p>
        </div>
        <div className="info-box">
        <img src={gartner} alt="info2" />
          <p>Hexnode was recognized in the 2025 Gartner Market Guide for Unified Endpoint Management Tools.</p>
        </div>
        <div className="info-box">
        <img src={forrester} alt="info3" />
          <p>Forrester includes Hexnode as a Notable vendor in The Unified Endpoint Management Landscape, Q3 2023.</p>
        </div>
      </div>
      </section>
      <section>
      <div class="container">
        <h2>Specific kiosk modes for unique use cases</h2>

        <div class="tabs">
            <button class="tab active" onclick="changeTab(event, 'single')">Single App Kiosk</button>
            <button class="tab" onclick="changeTab(event, 'multi')">Multi-App Kiosk</button>
            <button class="tab" onclick="changeTab(event, 'web')">Web-based Kiosk</button>
            <button class="tab" onclick="changeTab(event, 'digital')">Digital Signages</button>
            <button class="tab" onclick="changeTab(event, 'asam')">ASAM Kiosk</button>
        </div>

        <div class="content-box">
            <div class="tabs-desc">
                <h3 id="title">Powerful Single-App Kiosk solutions for enhanced control</h3>
                    <p>✅ Provision the devices to run one specialized application, with limited functionalities.</p>
                    <p>✅ Customize the device settings to cater to a specific use-case each time.</p>
                    <p>✅ Use advanced settings for restrictions or expanded functionalities.</p>
                    <p>✅ Empower administrators with full control over kiosk devices.</p>
            </div>

            <div class="image-box">
                <img src={mobilephoto} alt="Kiosk Mode"></img>
            </div>
        </div>
    </div>

      </section>
      <section>
        <h1>What additional possibilities does the <br></br>Kiosk mode offer?</h1>
        <div class="support">
            <img src={supportimg} alt=""></img>
            <div class="content">
                <h2>Effortless kiosk deployment & management</h2>
                <p>Deploy kiosk-enabled devices straight out of the box. Flash a custom Android Enterprise, Samsung Knox or ROM with Hexnode App on the devices by collaborating with OEM vendors who provide specially configured ROMs.</p>
                <a href="#" class="free-trial">TRY FOR FREE &gt;</a>

                <h2>Customized interface for brand visibility</h2>
                <h2>What more can you do with Hexnode kiosk?</h2>
                <h2>Secure and update your app ecosystem</h2>
                <h2>Provide an easy-to-use interface for end-users</h2>
            </div>
        </div>
      </section>
  {/* choose hexnode */}
  <section class="testimonial-section">
        <h2 class="section-title">Why should you choose Hexnode?</h2>

        <div class="testimonial-container">
            <button class="arrow left">&lt;</button>

            <div class="testimonial-content">
                <img class="testimonial-img" src={personimg} alt="User"></img>
                <div class="testimonial-text">
                    <p class="quote">
                        "Hexnode is of great value.  Works great with Android and iOS!"
                    </p>
                    <p class="author">Justin Modarak</p>
                    <p class="company">Technology Coordinator</p>
                     <p class="company">East Troy Community School District</p> 
                </div>
            </div>

            <button class="arrow right">&gt;</button>
        </div>
    </section>
    </div>
  );
}

export default Homepage