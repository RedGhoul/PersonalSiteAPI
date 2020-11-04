/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from "react";
import "./Work.css";
import WorkExperience from '../../../api/WorkExperince';
export class Work extends Component {
  constructor(props) {
    super(props);

    this.state = {
      Projects: []
    };
  }

  componentDidMount() {
    WorkExperience.Get().then(res => {
      this.setState({ Projects: res.data.list_projects });
    });
  }

  render() {
    let main = this.state.Projects.map((ele, index) => {
      let urlLink = null;
      if (ele.url_live) {
        urlLink = ele.url_live;
      } else {
        urlLink = ele.url_github;
      }
      return (
        <div
          className="col-md-3 text-center col-padding animate-box"
          key={index}
        >
          <a
            onClick={() => window.open(urlLink, "_blank")}
            className="work"
            style={{
              backgroundImage: `url(${"https://picsum.photos/id/" +
                Math.floor(Math.random() * (200 - 100)) +
                "/400/"})`,
              marginBottom: "10px",
              cursor: "pointer"
            }}
          >
            <div className="desc">
              <h3>{ele.name}</h3>
              <span>{ele.tag_line}</span>
            </div>
          </a>
        </div>
      );
    });

    return (
      <div>
        <div id="fh5co-work" className="fh5co-bg-dark">
          <div className="container">
            <div className="row animate-box">
              <div className="col-md-8 col-md-offset-2 text-center fh5co-heading">
                <h2 style={{ fontSize: "xx-large", marginBottom: "6%" }}>
                  Projects
                </h2>
              </div>
            </div>
            <div className="row">{main}</div>
          </div>
        </div>
      </div>
    );
  }
}

export default Work;
