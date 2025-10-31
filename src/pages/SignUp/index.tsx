import React from 'react';
import {StyleSheet, Text, View, ScrollView} from 'react-native';
import TextInput from '../../components/molecules/TextInput';
import Button from '../../components/atoms/Button';
import Gap from '../../components/atoms/Gap';

const SignUp = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Sign Up</Text>

      <View style={styles.form}>
        <TextInput label="Full Name" placeholder="Type your full name" />
        <Gap height={16} />

        <TextInput
          label="Email Address"
          placeholder="Type your email address"
          keyboardType="email-address"
        />
        <Gap height={16} />

        {/* Tambahan kolom Password */}
        <TextInput
          label="Password"
          placeholder="Type your password"
          secureTextEntry={true}
        />

        <Gap height={30} />
        <Button label="Continue" />
      </View>
    </ScrollView>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: 'white',
    paddingHorizontal: 24,
    paddingTop: 40,
  },
  title: {
    fontFamily: 'Poppins-Medium',
    fontSize: 22,
    color: '#020202',
    marginBottom: 24,
  },
  form: {
    marginTop: 130,
  },
});