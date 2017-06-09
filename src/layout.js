import React from 'react';
import ReactDOM from 'react-dom';
import Locale from './templates/modules/locale.js';
import store from './reducers/index.js'


export default class Layout extends React.Component{
      render(){
              return(
                  <div>
                          <Locale
                              switchRU = { () => store.dispatch({type : 'RU'}) }
                              switchENG = { () => store.dispatch({type : 'ENG'}) }
                          />
                  </div>
              )
      }
}