import React from 'react';
import './App.css';


interface FooInterface {
  bar: number
  boo ?: number
}

interface BarInterface {

}

const Foo: React.FC<FooInterface> = props => {
  return (<div className="Foo">This is the Foo Widget. Your message is {props.bar}</div>)
}



const Bar: React.FC<BarInterface> = (props) => {
    return (<div className="Foo">Your message is {props.children}</div>)
}


const App: React.FC = () => {
  return (
    <div className="App">

      <video autoPlay muted loop id="myVideo">
        <source src="bs_montage.mp4" type="video/mp4" />
      </video>

        <div className="content">
            <h1>Welcome to Big Smoke Comedy</h1>
            <p>London's most central comedy club, above <a href="http://www.nellofolddrury.com/">The Nell of Old Drury</a>, one of London's oldest pubs.</p>
            <p>We run events every Thursday, and the Second Monday of every month. We present eight fiercely independent stand-up comedians. For our final act we invite all 8 performers back on stage for a one-night-only improvised performance.</p>
            <p>We are still working on our website, but in the meantime, <a href="https://www.facebook.com/BigSmokeComedy/">visit our page on Facebook</a>.</p>
        </div>

    </div>
  );
}

export default App;
