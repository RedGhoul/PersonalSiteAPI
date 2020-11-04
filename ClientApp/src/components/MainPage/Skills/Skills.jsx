import React, { Component } from 'react'
import './Skills.css'
export class Skills extends Component {
    render() {
        let style = {
            width: "90%"
        }
        return (
            <div id="fh5co-skills" className="animate-box">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 col-md-offset-2 text-center fh5co-heading">
                            <h2>Skills</h2>
                        </div>
                    </div>
                    <div className="row row-pb-md">
                        <div className="col-md-3 col-sm-6 col-xs-12 text-center">
                            <div className="chart" data-percent="85"><span><strong>C#</strong>85%</span></div>
                        </div>
                        <div className="col-md-3 col-sm-6 col-xs-12 text-center">
                            <div className="chart" data-percent="75"><span><strong>Python</strong>85%</span></div>
                        </div>
                        <div className="col-md-3 col-sm-6 col-xs-12 text-center">
                            <div className="chart" data-percent="70"><span><strong>Java</strong>70%</span></div>
                        </div>
                        <div className="col-md-3 col-sm-6 col-xs-12 text-center">
                            <div className="chart" data-percent="90"><span><strong>Java Script</strong>90%</span></div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                            <div className="progress-wrap">
                                <h3><span className="name-left">jQuery</span><span className="value-right">85%</span></h3>
                                <div className="progress">
                                    <div className="progress-bar progress-bar-1 progress-bar-striped active" role="progressbar" aria-valuenow="85"
                                        aria-valuemin="0" aria-valuemax="100" style={style}>
                                    </div>
                                </div>
                            </div>
                            <div className="progress-wrap">
                                <h3><span className="name-left">Angular</span><span className="value-right">80%</span></h3>
                                <div className="progress">
                                    <div className="progress-bar progress-bar-2 progress-bar-striped active" role="progressbar" aria-valuenow="80"
                                        aria-valuemin="0" aria-valuemax="100" style={style}>
                                    </div>
                                </div>
                            </div>
                            <div className="progress-wrap">
                                <h3><span className="name-left">Node.js</span><span className="value-right">80%</span></h3>
                                <div className="progress">
                                    <div className="progress-bar progress-bar-3 progress-bar-striped active" role="progressbar" aria-valuenow="80"
                                        aria-valuemin="0" aria-valuemax="100" style={style}>
                                    </div>
                                </div>
                            </div>
                            <div className="progress-wrap">
                                <h3><span className="name-left">React</span><span className="value-right">85%</span></h3>
                                <div className="progress">
                                    <div className="progress-bar progress-bar-4 progress-bar-striped active" role="progressbar" aria-valuenow="85"
                                        aria-valuemin="0" aria-valuemax="100" style={style}>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="progress-wrap">
                                <h3><span className="name-left">Photoshop</span><span className="value-right">90%</span></h3>
                                <div className="progress">
                                    <div className="progress-bar progress-bar-5 progress-bar-striped active" role="progressbar" aria-valuenow="90"
                                        aria-valuemin="0" aria-valuemax="100" style={style}>
                                    </div>
                                </div>
                            </div>
                            <div className="progress-wrap">
                                <h3><span className="name-left">ASP.NET MVC</span><span className="value-right">90%</span></h3>
                                <div className="progress">
                                    <div className="progress-bar progress-bar-striped active" role="progressbar" aria-valuenow="90" aria-valuemin="0"
                                        aria-valuemax="100" style={style}>
                                    </div>
                                </div>
                            </div>
                            <div className="progress-wrap">
                                <h3><span className="name-left">Django</span><span className="value-right">75%</span></h3>
                                <div className="progress">
                                    <div className="progress-bar progress-bar-1 progress-bar-striped active" role="progressbar" aria-valuenow="75"
                                        aria-valuemin="0" aria-valuemax="100" style={style}>
                                    </div>
                                </div>
                            </div>
                            <div className="progress-wrap">
                                <h3><span className="name-left">SQL</span><span className="value-right">75%</span></h3>
                                <div className="progress">
                                    <div className="progress-bar progress-bar-2 progress-bar-striped active" role="progressbar" aria-valuenow="75"
                                        aria-valuemin="0" aria-valuemax="100" style={style}>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Skills
