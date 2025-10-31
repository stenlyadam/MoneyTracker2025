import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Header from '../../components/molecules/Header';
import TextInput from '../../components/molecules/TextInput';
import Button from '../../components/atoms/Button';
import Gap from '../../components/atoms/Gap';

const SignIn = () => {
  return (




     
    
    <View style={styles.container}>
      <Header label=" " />
      <View style={styles.contentWrapper}>

        <Gap height={500} />
        <TextInput
          label="Password"
          placeholder="Type your password"
          secureTextEntry={true}
        />
        <Gap height={30} />
        <Button label="Continue" />

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
    backgroundColor: '#ffffffff',
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: 26,
  },
});
