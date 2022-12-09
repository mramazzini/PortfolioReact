import React from 'react';
import Header from './Header';
import Portfolio from './Portfolio';
export default function Wrapper(props) {
  
  return (
    <main>
    <wrapper class="wrapper">
        <Header/>
        <Portfolio/>
    </wrapper>
    </main>
  );
}
