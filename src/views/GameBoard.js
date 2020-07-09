import React, { Component } from 'react';
import GameBoardTile from '../components/GameBoardTile';

class GameBoard extends Component {
    constructor(props){
        super(props)
    }

    render(){
        return(
            <div class="game-board" style={{gridTemplateColumns: `1fr 1fr 1fr 1fr 1fr`}}>
                <GameBoardTile></GameBoardTile>
                <GameBoardTile></GameBoardTile>
                <GameBoardTile></GameBoardTile>
                <GameBoardTile></GameBoardTile>
                <GameBoardTile></GameBoardTile>
                <GameBoardTile></GameBoardTile>
                <GameBoardTile></GameBoardTile>
                <GameBoardTile></GameBoardTile>
                <GameBoardTile></GameBoardTile>
                <GameBoardTile></GameBoardTile>
                <GameBoardTile></GameBoardTile>
                <GameBoardTile></GameBoardTile>
                <GameBoardTile></GameBoardTile>
                <GameBoardTile></GameBoardTile>
                <GameBoardTile></GameBoardTile>
                <GameBoardTile></GameBoardTile>
                <GameBoardTile></GameBoardTile>
                <GameBoardTile></GameBoardTile>
                <GameBoardTile></GameBoardTile>
                <GameBoardTile></GameBoardTile>
                           
            </div>
        )
    }
}

export default GameBoard;