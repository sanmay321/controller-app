// import React, { useState } from 'react';
// import { View, TouchableOpacity, StyleSheet } from 'react-native';

// const ToggleButton = () => {
//   const [isToggled, setIsToggled] = useState(false);

//   const toggleSwitch = () => {
//     setIsToggled(!isToggled);
//   };

//   return (
//     <View style={styles.switchButton}>
//       <TouchableOpacity onPress={toggleSwitch} style={styles.switchOuter}>
//         <View style={styles.button}>
//           <View
//             style={[
//               styles.buttonToggle,
//               isToggled ? styles.buttonToggleChecked : null,
//             ]}
//           />
//           <View style={[styles.buttonIndicator, isToggled && styles.indicatorActive]} />
//         </View>
//       </TouchableOpacity>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   switchButton: {
//     display: 'flex',
//     alignItems: 'center',
//     justifyContent: 'center',
//     margin: 'auto',
//     height: 55,
//   },
//   switchOuter: {
//     height: '100%',
//     backgroundColor: '#252532',
//     width: 115,
//     borderRadius: 165,
//     shadowColor: '#16151c',
//     shadowOffset: { width: 0, height: 5 },
//     shadowOpacity: 0.8,
//     shadowRadius: 10,
//     borderColor: '#32303e',
//     borderWidth: 1,
//     padding: 6,
//     justifyContent: 'center',
//     boxSizing: 'border-box',
//   },
//   button: {
//     width: '100%',
//     height: '100%',
//     display: 'flex',
//     justifyContent: 'space-between',
//     position: 'relative',
//     flexDirection: 'row',
//   },
//   buttonToggle: {
//     height: 42,
//     width: 42,
//     backgroundColor: '#3b3a4e',
//     borderRadius: 100,
//     shadowColor: '#424151',
//     shadowOffset: { width: 0, height: 5 },
//     shadowOpacity: 0.8,
//     shadowRadius: 4,
//     position: 'relative',
//     transitionDuration: '0.3s',
//     left: 0,
//   },
//   buttonToggleChecked: {
//     left: '58%',
//     backgroundColor: '#272733',
//   },
//   buttonIndicator: {
//     height: 25,
//     width: 25,
//     borderRadius: 50,
//     borderWidth: 3,
//     borderColor: '#ef565f',
//     position: 'relative',
//     top: '50%',
//     transform: [{ translateY: -50 }],
//   },
//   indicatorActive: {
//     borderColor: '#60d480',
//     left: '-68%',
//   },
// });

// export default ToggleButton;
