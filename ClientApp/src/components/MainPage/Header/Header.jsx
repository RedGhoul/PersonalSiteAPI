import React, { Component } from "react";
import "./Header.css";
import config from '../../../config/config';
export class Header extends Component {
  render() {
    return (
      <header
        style={{
          height: window.screen.height,
          backgroundImage:"url(" + config.frontPageBackgroundIMG +")",
          backgroundPosition: "0px 0px"
        }}
        id="fh5co-header"
        className="fh5co-cover"
        role="banner"
        data-stellar-background-ratio="0.5"
      >
        <div className="overlay"></div>
        <div className="container" style={{ paddingTop: "250px" }}>
          <div className="row">
            <div className="col-md-8 col-md-offset-2 text-center">
              <div className="">
                <div
                  className="display-tc animate-box"
                  data-animate-effect="fadeIn"
                >
                  <div className="profile-thumb"></div>
                  <h1 style={{ fontSize: "55px" }}>
                    <span>Avaneesa Basappa</span>
                  </h1>
                  <h3>
                    <span>Software Developer / Life Long Learner</span>
                  </h3>
                  <div style={{ marginTop: "20px" }}>
                    <a href={config.twitterLink} target="_blank"  rel="noopener noreferrer">
                      <img alt="twitter" src={config.twitterIcon}></img>
                    </a>
                    <a
                      href={config.linkedInLink} 
                      target="_blank" rel="noopener noreferrer"
                    >
                      <img alt="linkedin" src={config.linkedinIcon}></img>
                    </a>
                    <a href={config.gitHubLink}  target="_blank" rel="noopener noreferrer">
                      <img alt="github" src={config.githubIcon}></img>
                    </a>
                  </div>
                  <h3>
                    <a
                     href={config.blogLink}
                      target="_blank" rel="noopener noreferrer"
                      style={{ color: "white", fontSize: "35px" }}
                    >
                      My Blog
                    </a>
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
