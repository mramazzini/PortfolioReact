import React from 'react';
import dummyimage from '../dummyimage.jpg';
import ChessGameImg from '../assets/ChessGameImg.PNG'
import PeakPerformanceImg from '../assets/PeakPerformanceImg.PNG'

export default function ProjectHighlight(props) {

    return (
        <div class="highlight-wrapper">


            <card class="highlight-project">
                <div class="card-header">
                    <h2><a class="link" href="https://workout-track.herokuapp.com/login">Peak Performance</a></h2>
                    <h2><a class="link" href="https://github.com/hhealing123/Workout-Tracker">Github Link</a></h2>
                </div>
                <div class="headline"></div>
                <a class="image-link" id="img1" href="https://github.com/hhealing123/Workout-Tracker">
                    <img src={PeakPerformanceImg} alt="text describing the image" />
                </a>
            </card>
            <card class="highlight-project">
                <div class="card-header">
                    <h2><a class="link" href="https://github.com/mramazzini/Chess-Java">Java Chess Game</a></h2>
                    <h2><a class="link" href="https://github.com/mramazzini/Chess-Java">Github Link</a></h2>
                </div>
                <div class="headline"></div>
                <a class="image-link" id="img1" href="https://github.com/mramazzini/Chess-Java">
                    <img id="chess" src={ChessGameImg} alt="text describing the image" />
                </a>
            </card>
        </div>
    );
}
