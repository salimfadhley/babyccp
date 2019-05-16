import React from 'react';
import './App.css';



const App: React.FC = (props) => {
    return (
    <div className="App">

        <video autoPlay muted loop id="myVideo">
            <source src="bs_montage.mp4" type="video/mp4" />
        </video>

        <div className="panels">
            <div className="container">
                <div className="item">AAA</div>
                <div className="item">BBB</div>
                <div className="item"><p>Lorem ipsum dolor sit amet, qui debitis meliore efficiendi an, sed saperet theophrastus cu. </p></div>
                <div className="item">DDD</div>
                <div className="item">EEE</div>
            </div>
        </div>

        <div className="content">
            <h1>Welcome to Big Smoke Comedy</h1>
            <p>London's most central comedy club, above <a href="http://www.nellofolddrury.com/">The Nell of Old Drury</a>, one of London's oldest pubs.</p>
            <p>We run events every Thursday, and the Second Monday of every month. We present eight fiercely independent stand-up comedians. For our final act we invite all 8 performers back on stage for a one-night-only improvised performance.</p>
        </div>

    </div>
  );
}

export default App;
