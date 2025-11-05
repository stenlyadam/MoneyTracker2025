import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';

const Button = ({
  label = 'Continue',
  color = '#02CF8E',
  textColor = '#000000 ',
  onPress = () => {}, // ✅ tambahkan default biar tidak error kalau belum dikirim
  disabled = false,
}) => {
  return (
    <TouchableOpacity
      style={[styles.button, {backgroundColor: disabled ? '#C8F3DE' : color}]}
      activeOpacity={0.8}
      onPress={onPress}
      disabled={disabled}>
      <Text style={[styles.text, {color: disabled ? '#9EA9A3' : textColor}]}>
        {label}
      </Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  button: {
    width: '100%',
    height: 50,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 24,
  },
  text: {
    fontFamily: 'Poppins-Medium',
    fontSize: 16,
    textAlign: 'center',
  },
});
