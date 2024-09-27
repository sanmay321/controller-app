import { View, Text, FlatList, Animated } from 'react-native';
import React, { useState } from 'react';
import { styles } from '../shared/styles';
import AntIcon from 'react-native-vector-icons/AntDesign';
import { Gesture, GestureDetector } from "react-native-gesture-handler";
 
const CtrlScreen = () => {
  // Step 1: Create a state to manage the text content
  const [textValue, setTextValue] = useState('two');
  const pan = Gesture.Pan();
  // Step 2: Define the function to update the text when the icon is pressed
  const handlePress = () => {
    setTextValue('three');
  };

  return (
    <View style={styles.two}>
      <View style={styles.downone}>
        <View style={styles.downone1}>
            <GestureDetector gesture={pan}>
            <Animated.View />
            </GestureDetector>
        </View>
        <View style={styles.downone2}>
            <View style={styles.downone21}>
            <AntIcon name='setting' size={50} color="white" onPress={handlePress} />
            </View>
            <View style={styles.downone22}>
            <AntIcon name='setting' size={50} color="white" onPress={handlePress} />
            </View>
        </View>
      </View>
      <View style={styles.downtwo}>
        {/* Step 3: Use the state variable to display the dynamic text */}
        <Text>{textValue}</Text>
      </View>
      <View style={styles.downthree}>
        {/* Step 4: Add the onPress functionality */}
        {/* <AntIcon name='setting' size={50} color="white" onPress={handlePress} /> */}
        {/* <ToggleButton/> */}
        <View style={styles.downthree1}>
            <AntIcon name='setting' size={50} color="white" onPress={handlePress} />
            </View>
            <View style={styles.downthree2}>
            <AntIcon name='setting' size={50} color="white" onPress={handlePress} />
            </View>
      </View>
    </View>
  );
}

export default CtrlScreen;
