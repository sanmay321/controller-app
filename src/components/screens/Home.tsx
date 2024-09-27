import { View, Text } from 'react-native'
import React from 'react'
import { styles } from '../shared/styles'
import Nav from './Nav'
import CtrlScreen from './CntrlScreen'

const Home = () => {
  return (
    <View style={styles.container}>
        <Nav/>
        <CtrlScreen/>
    </View>
  )
}

export default Home