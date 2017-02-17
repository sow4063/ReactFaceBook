import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, browserHistory } from 'react-router';
import FacebookLogin from '../src/facebook';

import Kakao from '../src/kakao.js';
import kakaopay from '../src/kakaopay.js';
//import jq from 'jquery';

const responseFacebook = (response) => {
  console.log(response);
  //window.top.location = 'https://www.google.com';
};

class Base extends Component {
  render() {
    return (
      
      <div>
        <Link to="/dummy">Route to dummy page</Link>
        <FacebookLogin
          appId="171086716723520"
          autoLoad
          buttonStyle={ { fontSize: 40 } }
          callback={responseFacebook}
          icon="fa-facebook"
        />

        <Kakao kakaopay={kakaopay} />
      </div>

    );
  }
}

class Dummy extends Component {
  render() {
    return (
      <div>
        <Link to="/">Back</Link>
        <h1>
          This is just a dummy page to test the button<br />
          <a href="https://github.com/keppelen/react-facebook-login/pull/76#issuecomment-262098946">
            survives back and forth routing
          </a>
        </h1>
      </div>
    );
  }
}

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={Base}/>
    <Route path="/dummy" component={Dummy}/>
  </Router>,
  document.getElementById('demo')


);

