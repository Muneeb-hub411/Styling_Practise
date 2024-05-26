import {StyleSheet, Text, View} from 'react-native';
import React, {ReactNode} from 'react';

interface BoxProps {
  children: ReactNode;
  style?: object;
}

const Box = ({children, style}: BoxProps) => {
  return (
    <View style={[styles.BoxStyle, style]}>
      <Text style={styles.text}>{children}</Text>
    </View>
  );
};

export default Box;

const styles = StyleSheet.create({
  text: {
    color: 'black',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  BoxStyle: {
    padding: 28,
    backgroundColor: '#fff',
  },
});
