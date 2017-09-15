
import React, { Component, PureComponent, PropTypes } from 'react';
import { all, actionChannel, call, put, take, takeEvery, takeLatest, select, cancel, cancelled, fork, race, apply } from 'redux-saga/effects'
import { delay, buffers, eventChannel, END } from 'redux-saga'
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom'
// Needed for onTouchTap
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
//import getMuiTheme from 'material-ui/styles/getMuiTheme';
import createSagaMiddleware from 'redux-saga'
import configureStore from './store/configureStore';
import ToComponent from './components/To';
import ItemList from './components/ItemList';
import GridList from './components/grid';
//import mySaga from './actions/sagas'
import rootSaga from './sagas/index'
//import {initialState} from 'reducers/auth';


injectTapEventPlugin();

const extraProps = {'color' : 'red' }; 

// create the saga middleware 
const sagaMiddleware = createSagaMiddleware()

//const font = "tahoma";
const store = configureStore({},sagaMiddleware);

const AppComp = () => (
    

    <Provider store={store}>
        <MuiThemeProvider>
            <BrowserRouter>            
                <div>                    
                    <Route exact path="/" component={App} />                                
                    <Route exact path="/to" component={ToComponent} />     
                    <Route path="/grid"  render={(props) => (
                        <GridList {...props} data={extraProps}/>
                    )} />    
                    
                </div>
            </BrowserRouter>
            
        </MuiThemeProvider>
    </Provider>
);

// then run the saga 
sagaMiddleware.run(rootSaga)
 
ReactDOM.render(< AppComp />, document.getElementById('root'));
registerServiceWorker();

