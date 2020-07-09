import React, { Component, Fragment } from 'react';
import '../styles/appView.scss';
import RecapModal from './RecapModal';
import LoginModal from './LoginModal';
import Button from '../components/Button';
import AppContext from '../Context'
import GameBoard from './GameBoard';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'Gracz',
      actualScore: 56,
      bestScore: 74,
      gameBoardSize: "5",
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

  updateGameBoardSize = (e) => {
    this.setState({
      gameBoardSize: e.target.value,
    })
  }

  updateName = (e) => {
    this.setState({
      name: e.target.value,
    })
  }


  render(){
    return (
      <Fragment>
        <AppContext.Provider 
          value={{appState: this.state, updateGameBoardSize: this.updateGameBoardSize , updateName: this.updateName}}>
          <Button textOnButton="Otwórz Recap Modal" onClickFn={this.openRecapModal}></Button>
          <Button textOnButton="Otwórz Login Modal" onClickFn={this.openLoginModal}></Button>
          <GameBoard></GameBoard>
          { this.state.isRecapModalOpen && <RecapModal closeRecapFn={this.closeRecapModal}/>}
          { this.state.isLoginModalOpen && <LoginModal closeLoginFn={this.closeLoginModal}/>}
        </AppContext.Provider>
      </Fragment>
    );
  }
}

export default App;
