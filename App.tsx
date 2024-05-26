import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Section_1 from './components/Section_1';
import Box from './components/Box';

const App = () => {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        {/* <Section_1 /> */}
        <Box style={{backgroundColor: '#8e9b00'}}> Box1</Box>
        <Box style={{backgroundColor: '#adff2f'}}> Box2</Box>
        <Box style={{backgroundColor: '#00bfff'}}> Box3</Box>
        <Box style={{backgroundColor: '#800080'}}> Box4</Box>
        <Box style={{backgroundColor: '#adff2f'}}> Box5</Box>
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    borderWidth: 8,
    borderColor: '#ff0000',
  },
});
export default App;
