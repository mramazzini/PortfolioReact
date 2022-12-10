import React from 'react';
import dummyimage from '../dummyimage.jpg';
import CommandLineImg from '../assets/CommandLineImg.PNG'
import WeatherImg from '../assets/WeatherAppImg.PNG'
import EightBallImg from '../assets/EightBallImg.PNG'


export default function ProjectBasic(props) {

  return (
    <div class="reg-wrapper">
      <card class="project">
        <div class="card-header">
          <h2><a class="link" href="https://github.com/mramazzini/Command-Line-Employee-System">Employee Management System</a></h2>
          <h2><a class="link" href="https://github.com/mramazzini/Command-Line-Employee-System">Github Link</a></h2>
        </div>
        <div class="headline"></div>
        <a class="image-link" id="img1" href="https://github.com/mramazzini/Command-Line-Employee-System">
          <img src={CommandLineImg} alt="text describing the image" />
        </a>
      </card>

      <card class="project">
        <div class="card-header">
          <h2><a class="link" href="https://hhealing123.github.io/Ask-the-8-Ball/login.html">Ask the 8 Ball</a></h2>
          <h2><a class="link" href="https://github.com/hhealing123/Ask-the-8-Ball">Github Link</a></h2>
        </div>
        <div class="headline"></div>
        <a class="image-link" id="img1" href="https://hhealing123.github.io/Ask-the-8-Ball/login.html">
          <img src={EightBallImg} alt="text describing the image" />
        </a>
      </card>

      <card class="project">
        <div class="card-header">
          <h2><a class="link" href="https://mramazzini.github.io/WeatherApp/">Weather App</a></h2>
          <h2><a class="link" href="https://github.com/mramazzini/WeatherApp">Github Link</a></h2>
        </div>
        <div class="headline"></div>
        <a class="image-link" id="img1" href="https://mramazzini.github.io/WeatherApp/">
          <img src={WeatherImg} alt="text describing the image" />
        </a>
      </card>

    </div>
  );
}
