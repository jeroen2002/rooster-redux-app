import React from 'react';
import { View, StyleSheet } from 'react-native';

import CustomText from './CustomText';


const styles = StyleSheet.create({
  header: {
    height: 90,
    backgroundColor: '#ffffff',
    paddingLeft: 20,
    paddingRight: 20,
  },
  classDateContainer: {
    marginTop: 3,
  },
});

function Header() {
  return (
    <View style={styles.header}>
      <View style={styles.classDateContainer}>
        <CustomText size={36} weight="bold">AO2A</CustomText>
        <CustomText>3 mei 2020</CustomText>
      </View>
    </View>
  );
}

export default Header;
