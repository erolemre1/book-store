import React, {Component} from  "react";
import {StyleSheet, Text, TouchableOpacity ,ScrollView, View, Image } from "react-native";
import {Card} from "./common";
import * as actions from "../actions";  
import {connect} from "react-redux";
import {Linking} from 'react-native';
import {Dimensions} from 'react-native'



class BookItem extends Component{

    onPressed ()  { 
      const {width,height} = Dimensions.get('window')
     
        const { book, selected } = this.props;

        selected ? this.props.deselectBook()
              : this.props.selectBook(book);
      }
    
    render() {
      
        const { book, selected  } = this.props;
        
         const pagesfield = selected ? (
          <Text style={styles.pagesStyle}>{book.pages} </Text>
      ) : null;
       
    
       const languagefield = selected ? (
            <Text style={styles.languageStyle}> {book.language} </Text>
        ) : null;
         const linkfield = selected ? (
          <Text style={styles.linkStyle}>  {book.link} </Text >
        ) : null;
        const kitaplinkfield = selected ? (
          <Text style={styles.kitaplinkstyle}>{book.KitapLinki}</Text>
        ) : null;
        const countryfield = selected ? (
          <Text style={styles.countrystyle}>{book.country}</Text>
        ) : null;
       
        const yearfield = selected ? (
          <Text style={styles.yearstyle}>{book.year}</Text>
        ) : null;
      
         const Imagefield= selected ? ( 
          <Image source={{
            uri: book.image,
          }} style={{width: 250, height: 300,marginLeft:80}} />
         ): null
        return (

          <ScrollView>
          <TouchableOpacity  onPress={this.onPressed.bind(this)}>
        
          
          <Text style={styles.linkStyle}>{} </Text>
           
            <Card>
              <Text style={styles.titlestyle}>{book.title}</Text>
              <Text style={styles.authorstyle}>{book.author}</Text>
              
            </Card>
         
            {Imagefield}
            {countryfield}
            {yearfield}
            {pagesfield}
            
            {languagefield}
         

          
          
          
            <TouchableOpacity
          
        /// ALERT DAHA SONRA SİLİNECEK
   onPress={  
      
      ()=>{ 
         
      
      
      Linking.openURL(book.link);
        
    } 
  }
>       
       {kitaplinkfield}
           {linkfield}



</TouchableOpacity>

          </TouchableOpacity>
          
          
          </ScrollView>

        )
    }
}

const styles = StyleSheet.create({
    titlestyle:{fontSize:20,
        fontWeight:"bold",
        color:"black",
         },
   
    authorstyle:{
        fontWeight:"bold",
        fontSize:18,
        color:"#363645",
    },
    linkStyle:{
        marginLeft:15,
        marginRight:15,
        fontSize:25,
        color:"white",
        fontWeight:"bold",
        marginTop:0,
        
    },
    kitaplinkstyle:{
      color:"red",
      fontSize:20,
      fontWeight:"bold",
      marginLeft:150

    },
  
    pagesStyle:{
      color:"white",
      fontSize:20,
      fontWeight:"bold",
      marginLeft:150

    },
  
 yearstyle:{
  color:"white",
  fontSize:20,
  fontWeight:"bold",
  marginLeft:150

    },
  
    countrystyle:{
      color:"white",
      fontSize:20,
      fontWeight:"bold",
      marginLeft:150

    },


    languageStyle:{
      color:"white",
      fontSize:20,
      fontWeight:"bold",
      marginLeft:150

    }
})

const mapStateToProps = (state, props) => {
    const selected = state.selectedBook
            && state.selectedBook.year === props.book.year;
    return {
      selected
    }
  }
  
  export default connect(mapStateToProps, actions)(BookItem);
  