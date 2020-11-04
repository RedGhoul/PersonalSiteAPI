import React from "react";
import Project from '../../../api/Project';
import config from '../../../config/config';
import "./Projects.css";
export class Work extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      Projects: []
    };
  }

  componentDidMount() {
    Project.Get().then(res => {
      this.setState({ Projects: res.data });
    });
  }

  render() {
    let main = this.state.Projects.map((ele, index) => {
      //onsole.log(ele.url);
      let urlLink = null;
      if (ele.url_Live) {
        urlLink = ele.url_Live;
      } else {
        urlLink = ele.url_Github;
      }
      return (
        <div
          className="col-md-3 text-center col-padding animate-box"
          key={index}
        >
          <div
            onClick={() => window.open(urlLink, "_blank")}
            className="work"
            style={{
              backgroundImage: `url(${config.picSumBaseURL +
                Math.floor(Math.random() * (200 - 100)) +
                "/400/"})`,
              marginBottom: "10px",
              cursor: "pointer"
            }}
          >
            <div className="desc">
              <h3>{ele.name}</h3>
              <span>{ele.tag_Line}</span>
            </div>
          </div>
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
