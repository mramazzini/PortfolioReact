import React from 'react';
import dummyimage from '../dummyimage.jpg'

export default function ProjectHighlight(props) {

    return (
        <div class="highlight-wrapper">
        
    
            <card class="highlight-project">
                <div class="card-header">
                    <h2>Project 1</h2>
                </div>
                <div class="headline"></div>
                <a class="image-link" id="img1" href="#">
                    <img src={dummyimage} alt="text describing the image"/>
                </a>
            </card>
            <card class="highlight-project">
                <div class="card-header">
                    <h2>Project 2</h2>
                </div>
                <div class="headline"></div>
                <a class="image-link" id="img1" href="#">
                    <img src={dummyimage} alt="text describing the image"/>
                </a>
            </card>
            </div>
    );
}
