import {StyleSheet, Text, View, SafeAreaView} from 'react-native';
import React from 'react';

const Section_1 = () => {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <View
          style={[styles.YellowColor, styles.boxShadow, styles.boxElevation]}>
          <Text style={styles.BoxText}>Yellow Box</Text>
        </View>
        <View style={[styles.blueColor, styles.boxShadow, styles.boxElevation]}>
          <Text style={styles.BoxText}>Blue Box</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Section_1;

const styles = StyleSheet.create({
  container: {
    flex: 0,

    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    paddingHorizontal: 28,
    paddingVertical: 28,
  },
  BoxText: {
    textAlign: 'center',
    color: '#a9a9a9',
  },
  YellowColor: {
    flex: 0,
    justifyContent: 'center',
    textAlign: 'center',
    margin: 4,
    backgroundColor: '#ffff00',
    borderWidth: 3,
    borderColor: '#fffaf0',
    borderRadius: 15,
    height: 100,
    width: 100,
  },
  blueColor: {
    flex: 0,
    justifyContent: 'center',
    margin: 4,
    backgroundColor: '#00bfff',
    borderWidth: 3,
    borderColor: '#fffaf0',
    borderRadius: 15,
    height: 100,
    width: 100,
  },
  boxShadow: {
    elevation: 10,
    shadowOffset: {
      width: 8,
      height: 8,
    },
    shadowColor: '#cd5c5c',
    shadowOpacity: 0.6,
    textShadowRadius: 3,
  },
  boxElevation: {},
});
