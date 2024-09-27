import { View, Text } from 'react-native';
import React, { useState } from 'react';
import { styles } from '../shared/styles';
import AntIcon from 'react-native-vector-icons/AntDesign';

const Nav = () => {
  // Step 1: Create a state to manage the text content
  const [textValue, setTextValue] = useState('two');

  // Step 2: Define the function to update the text when the icon is pressed
  const handlePress = () => {
    setTextValue('three');
  };

  return (
    <View style={styles.one}>
      <View style={styles.upone}>
        <Text>one</Text>
      </View>
      <View style={styles.uptwo}>
        {/* Step 3: Use the state variable to display the dynamic text */}
        <Text>{textValue}</Text>
      </View>
      <View style={styles.upthree}>
        {/* Step 4: Add the onPress functionality */}
        <AntIcon name='setting' size={50} color="white" onPress={handlePress} />
      </View>
    </View>
  );
}

export default Nav;
