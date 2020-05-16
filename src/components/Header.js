import React from 'react';
import { View, StyleSheet } from 'react-native';

import { useSelector } from 'react-redux';

import CustomText from './CustomText';


const styles = StyleSheet.create({
  header: {
    height: 90,
    backgroundColor: '#ffffff',
    paddingLeft: 20,
    paddingRight: 20,
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
  },
  classDateContainer: {
    marginTop: 3,
  },
});

function Header() {
  const group = useSelector((state) => state.settings.group);

  return (
    <View style={styles.header}>
      <View style={styles.classDateContainer}>
        <CustomText size={36} weight="bold">{group}</CustomText>
        <CustomText>3 mei 2020</CustomText>
      </View>
    </View>
  );
}

export default Header;
