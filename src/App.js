import React, { Component } from 'react';
import { View , Text, StyleSheet} from 'react-native';
import { Provider} from "react-redux";
import { createStore} from "redux";
import reducers from "./reducers";
import {Header} from "./components/common/header";
import BookList from "./components/BookList";
import {ImageBackground} from 'react-native';
import {StatusBar} from "react-native"


  export default  class App extends Component{
    render(){
      return(
        <ImageBackground source={require('./assents/arkaplan.jpg')} style={{flex:1}} >
        <Provider store ={createStore(reducers)}>

       
        <View>
           <Header headerText= "DÜNYA KLASİKLERİ"/>
           <BookList/>
           <StatusBar hidden={true} />
           </View>
           </Provider>
           </ImageBackground>
      );
    }
  }
