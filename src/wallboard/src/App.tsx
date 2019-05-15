import React from 'react';
import logo from './logo.svg';
import {Counter} from './Counter';
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
        <source src="bs_marc.mp4" type="video/mp4" />
      </video>

        <div className="content">
            <h1>Heading</h1>
            <p>Lorem ipsum...</p>
        </div>

    </div>
  );
}

export default App;
