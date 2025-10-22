import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Header from '../../components/molecules/Header';
import TextInput from '../../components/molecules/TextInput';
import Button from '../../components/atoms/Button';

const SignIn = () => {
  return (
    <View style={styles.container}>
      <Header label="Sign In" />
      <View style={styles.contentWrapper}>
        <TextInput
          label="Email Address"
          placeholder="Type your email address"
        />
        <TextInput label="Password" placeholder="Type your password" />
        <Button />
        <Button />
      </View>
    </View>
  );
};

export default SignIn;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentWrapper: {
    marginTop: 24,
    backgroundColor: '#FFFFFF',
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: 26,
  },
});
