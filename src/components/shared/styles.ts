import { View, Text, StyleSheet, Dimensions } from 'react-native';

// const windowHeight = Dimensions.get('window').height;
// const windowWidth = Dimensions.get('window').width;
export const styles = StyleSheet.create({
    container: {
      backgroundColor: 'green',
      flex:1
    },
    item: {
      width: '30%', // Adjust the width for landscape
      height: '80%',
      backgroundColor: '#4CAF50',
      justifyContent: 'center',
      alignItems: 'center',
    },
    text: {
      color: 'white',
      fontSize: 18,
    },
    one: {
      flexDirection: 'row', // Ensures the children are arranged in a column
      flex: 0.75, // Allow the view to expand and fill the parent space
    },
    two: {
      flexDirection: 'row', // Ensures the children are arranged in a column
      flex:2,
      color: 'white',
      fontSize: 18,
      backgroundColor:"orange"

    },
    upone: {
      flex:1,
      backgroundColor: 'lightblue', // Sample background color
      padding: 10,
      marginBottom: 10, // Optional: to add spacing between views
    },
    uptwo: {
      flex:1,
      backgroundColor: 'lightgreen', // Sample background color
      padding: 10,
      marginBottom: 1, // Optional: to add spacing between views
    },
    upthree: {
      flex:1,
      // height:100,
      color: 'white',
      fontSize: 18,
      backgroundColor:'lightblue',
      alignItems: 'center'
    },
    upfour: {
      flex:1,
      color: 'white',
      fontSize: 18,
      backgroundColor:"red"

    },
    upfive: {
      flex:1,
      color: 'white',
      fontSize: 18,
      backgroundColor:"orenge"

    },
    downone: {
      flex:1,
      flexDirection:"row",
      backgroundColor: 'lightblue', // Sample background color
      padding: 10,
      marginBottom: 10, // Optional: to add spacing between views
    },
    downone1: {
      flex:1,
      alignItems: 'center',
      backgroundColor: 'blue', // Sample background color
      padding: 10,
      marginBottom: 10, // Optional: to add spacing between views
    },
    downone2: {
      flex:3,
      alignItems: 'center',
      backgroundColor: 'lightblue', // Sample background color
      padding: 10,
      marginBottom: 10, // Optional: to add spacing between views
    },
    downone21: {
      flex:1,
      alignItems: 'center',
      backgroundColor: 'blue', // Sample background color
      padding: 10,
      marginBottom: 10, // Optional: to add spacing between views
    },
    downone22: {
      flex:1,
      alignItems: 'center',
      backgroundColor: 'lightblue', // Sample background color
      padding: 10,
      marginBottom: 10, // Optional: to add spacing between views
    },
    downtwo: {
      flex:0.70,
      backgroundColor: 'lightgreen', // Sample background color
      padding: 10,
      marginBottom: 10, // Optional: to add spacing between views
    },
    downthree: {
      flex:1,
      // height:100,
      flexDirection:"row",
      color: 'white',
      fontSize: 18,
      backgroundColor:'blue',
      alignItems: 'center'
    },
    downthree1: {
      flex:1,
      alignItems: 'center',
      backgroundColor: 'blue', // Sample background color
      padding: 10,
      marginBottom: 10, // Optional: to add spacing between views
    },
    downthree2: {
      flex:1,
      alignItems: 'center',
      backgroundColor: 'lightblue', // Sample background color
      padding: 10,
      marginBottom: 10, // Optional: to add spacing between views
    },
  });
  

