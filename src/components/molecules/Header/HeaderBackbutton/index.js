import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import BackButton from '../../../assets/Backbutton.svg'; // path sesuaikan, kalau salah nanti aku betulkan

const HeaderBack = ({label, onPress}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity activeOpacity={0.7} onPress={onPress}>
        <BackButton width={24} height={24} />
      </TouchableOpacity>
      <Text style={styles.text}>{label}</Text>
    </View>
  );
};

export default HeaderBack;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    paddingVertical: 37,
    paddingLeft: 24,
  },
  text: {
    fontFamily: 'Poppins-Medium',
    fontSize: 22,
    marginLeft: 12, // jarak antara arrow & text
  },
});
