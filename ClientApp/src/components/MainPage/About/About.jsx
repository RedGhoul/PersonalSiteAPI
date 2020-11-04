import React, { Component } from 'react'
import './About.css';

export class About extends Component {
    render() {
        return (
            <div style={{ background: '#ff9000e6', color: 'white' }}>
                <div id="fh5co-about" className="animate-box">
                    <div className="container">
                        <div className="row">
                            <div style={{ paddingBottom: '4%' }} className="col-md-8 col-md-offset-2 text-center">
                                <h2 style={{ color: 'white', fontSize: 'xx-large' }}>About Me</h2>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-12">
                                <h2 style={{ color: 'white' }}>Hello There!</h2>
                                <p>I like to build things and see them come alive. I have always been curious, and interested in all things
                                    mechanical, electrical, and software related. As a kid much to my parent's dismay I destroyed every toy I had, by
                                    opening it up to see how it worked. I carry this sense of curiosity and need for understanding into everything I
						            do.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default About
