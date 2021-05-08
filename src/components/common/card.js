import React from "react";
import { View, StyleSheet } from "react-native";

const Card = (props) => {
    return(
        <View style={styles.cardWrapper}>
{props.children}
        </View>
    )
}
const styles = StyleSheet.create({
    cardWrapper:{
        height:85,
       backgroundColor:"#C4CFD4",
        borderRadius:100,
      borderWidth:3,
      padding:10,
      paddingLeft:20,
        marginVertical:10,
        marginLeft:20,
        marginRight:20,
        marginVertical:30
        

       
     
    }

});
export {Card};