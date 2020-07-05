import React, { Component, Fragment } from 'react';
import '../styles/appView.scss';
import RecapModal from './RecapModal';
import LoginModal from './LoginModal';
import Button from '../components/Button';
import AppContext from '../Context'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'Przykładowe',
      actualScore: 56,
      bestScore: 74,
      gameBoardSize: 0,
      isRecapModalOpen: false,
      isLoginModalOpen: true,
    }
  };

  closeRecapModal = () => {
    this.setState({
      isRecapModalOpen: false,
    })
  }

  closeLoginModal = () => {
    this.setState({
      isLoginModalOpen: false,
    })
  }

  openRecapModal = () =>{
    this.setState({
      isRecapModalOpen: true,
    })
  }

  openLoginModal = () =>{
    this.setState({
      isLoginModalOpen: true,
    })
  }

  render(){
    return (
      <Fragment>
        <AppContext.Provider value={this.state}>
          <Button textOnButton="Otwórz Recap Modal" onClickFn={this.openRecapModal}></Button>
          <Button textOnButton="Otwórz Login Modal" onClickFn={this.openLoginModal}></Button>
          { this.state.isRecapModalOpen && <RecapModal closeRecapFn={this.closeRecapModal}/>}
          { this.state.isLoginModalOpen && <LoginModal closeLoginFn={this.closeLoginModal}/>}
        </AppContext.Provider>
      </Fragment>
    );
  }
}

export default App;
