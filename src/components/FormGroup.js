import React from 'react';
import AppContext from '../Context'
import FormGroupOption from './FromGroupOption';

const FormGroup = () => {

        return (
            <AppContext.Consumer>
                {(context) => 
                    <fieldset className="form-group">
                    <legend className="form-group-title">Wybierz rozmiar planszy:</legend>
        
                        <div className="form-group-elements">

                            <FormGroupOption
                                appState={context.appState.gameBoardSize}
                                name="size-option" 
                                onClickFn={context.updateGameBoardSize} 
                                value="4">
                            </FormGroupOption>

                            <FormGroupOption 
                                appState={context.appState.gameBoardSize}
                                name="size-option" 
                                onClickFn={context.updateGameBoardSize} 
                                value="5">
                            </FormGroupOption>

                            <FormGroupOption
                                appState={context.appState.gameBoardSize}
                                name="size-option" 
                                onClickFn={context.updateGameBoardSize} 
                                value="6">
                            </FormGroupOption>

                            <FormGroupOption
                                appState={context.appState.gameBoardSize}
                                name="size-option" 
                                onClickFn={context.updateGameBoardSize} 
                                value="7">
                            </FormGroupOption>

                            <FormGroupOption
                                appState={context.appState.gameBoardSize}
                                name="size-option" 
                                onClickFn={context.updateGameBoardSize} 
                                value="8">
                            </FormGroupOption>

                            <FormGroupOption
                                appState={context.appState.gameBoardSize}
                                name="size-option" 
                                onClickFn={context.updateGameBoardSize} 
                                value="9">
                            </FormGroupOption>

                        </div>
                </fieldset>
                }
            </AppContext.Consumer>
        )
}


export default FormGroup;