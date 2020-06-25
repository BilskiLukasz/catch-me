import React, { Component, Fragment } from 'react';
import '../styles/appView.scss';
import LoginModal from '../components/LoginModal';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'g',
      actualScore: '',
      bestScore: ''
    }
  };

  render(){
    console.log(this.state.name ? true : false);

    return (
      <Fragment>
        {!this.state.name && <LoginModal />}
      </Fragment>
    );
  }
}

export default App;
