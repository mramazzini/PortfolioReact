import React from 'react';

export default function Header(props) {

    return (
        <div class="about" id="AboutMe">
            <h1>Matteo Josue Ramazzini</h1>
            <div class="headline"></div>
            <wrapper class="paragraph-wrapper">
                <section>
                    <h2>Education</h2>
                    <p>
                        Full stack developer currently pursuing a Computer Science degree at the University of
                        Houston.
                        Recently earned a certificate in full stack development from the University of Texas,
                        with newly acquired skills in various Front-end and Back-end technologies.
                    
                    </p>
                </section>
                <section>
                    <h2>Technologies</h2>
                    <ul>
                        <li>SQL</li>
                        <li>JS</li>
                        <li>React</li>
                        <li>MongoDB</li>
                    </ul>
                </section>

                <section>

                    <h2>About</h2>
                    <p>
                        My obsession with code has
                        led me to learn Java and Python independently since high school. With each project,
                        my planning process is thoroughly examined to ensure the best and most engaging user
                        experience.
                        I am excited to leverage my skills in the workforce as a creative,
                        quality-driven team member to optimize code for speed and practicality.
                    </p>
                </section>
            </wrapper>
        </div>
    );
}
