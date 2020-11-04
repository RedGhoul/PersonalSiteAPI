import React, { Component } from "react";
import WorkExperience from '../../../api/WorkExperince';
import config from '../../../config/config';
import "./Resume.css";

export class Resume extends Component {
  state = {
    Jobs: []
  };
  componentDidMount() {
    WorkExperience.Get().then(res => {
        this.setState({ Jobs: res.data});
      });
  }

  render() {
    let main = this.state.Jobs.map((ele, index) => {
      
      let timelinetype;

      if (index % 2 === 0) {
        timelinetype = "timeline-inverted animate-box";
      } else {
        timelinetype = "animate-box timeline-unverted";
      }

      let comments = ele.comments.map((com, index) => {
          return <p key={index}> + {com.value}</p>;
      });
      return (
        <li className={timelinetype} key={index}>
          <div className="timeline-badge">
            <img alt="clipboard" src={config.clipBoardPNG}></img>
          </div>
          <div className="timeline-panel">
            <div className="timeline-heading">
              <h3 className="timeline-title">{ele.postion_Name}</h3>
              <span className="company">{ele.date}</span>
            </div>
            <div className="timeline-body">{comments}</div>
          </div>
        </li>
      );
    });

    return (
      <div id="fh5co-resume" className="fh5co-bg-color">
        <div className="container">
          <div className="row animate-box">
            <div className="col-md-8 col-md-offset-2 text-center fh5co-heading">
              <h2 style={{ fontSize: "xx-large" }}>My Resume</h2>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12 col-md-offset-0">
              <ul className="timeline">
                <li className="timeline-heading text-center animate-box">
                  <div>
                    <h3>Work Experience</h3>
                  </div>
                </li>
                {main}
                <br></br>
                <li className="timeline-heading text-center animate-box">
                  <div>
                    <h3>Education</h3>
                  </div>
                </li>

                <li className="timeline-inverted animate-box">
                  <div className="timeline-badge">
                    <img alt="graduationCapPNG" src={config.graduationCapPNG}></img>
                  </div>
                  <div className="timeline-panel">
                    <div className="timeline-heading">
                      <h3 className="timeline-title">
                       {config.gradMajor}
                      </h3>
                      <span className="company" style={{ color: "black" }}>
                       {config.gradInfo}
                      </span>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Resume;
