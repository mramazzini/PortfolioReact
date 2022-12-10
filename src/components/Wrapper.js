import React from 'react';
import Header from './Header';
import Portfolio from './Portfolio';
import ProjectBasic from './ProjectBasic';
import ProjectHighlight from './ProjectHighlight';
export default function Wrapper(props) {
  
  return (
    <main>
    <wrapper class="wrapper">
        <Header/>
        <Portfolio/>
        <ProjectHighlight/>
        <ProjectBasic/>
    </wrapper>
    </main>
  );
}
