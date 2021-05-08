import React, {Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';

class Header extends Component {

  render() {
    const { header, headerText } = styles;

    return (
      <View style={header}>
        <Text style={headerText}>{this.props.headerText}</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  header: {
    height: 90,
    width:"auto",
    paddingTop: 12,
    
    paddingBottom:15,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#00ABB8',
    borderWidth:4,
   borderTopRightRadius:10,
   borderBottomStartRadius:10,
  
    borderRadius:100
  },
    headerText: {
    
    fontSize: 40,

    color: 'white',
    textAlign: 'center',
    fontWeight:"bold",
    fontStyle:"italic",
   
  
    
    
  }
})

export {Header}