import React, {useState} from 'react';
import {View, Text, TextInput, StyleSheet} from 'react-native';
import Button from '../atoms/Button';
import ProfilePhoto from '../atoms/ProfilePhoto';

const SignUpForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View style={styles.wrapper}>
      <ProfilePhoto />

      <Text style={styles.label}>Full Name</Text>
      <TextInput
        style={[styles.input, {borderColor: name ? '#00B074' : '#ccc'}]}
        value={name}
        placeholder="Jane Doe"
        onChangeText={setName}
      />

      <Text style={styles.label}>Email Address</Text>
      <TextInput
        style={styles.input}
        value={email}
        placeholder="Type your email address"
        onChangeText={setEmail}
        keyboardType="email-address"
      />

      <Text style={styles.label}>Password</Text>
      <TextInput
        style={styles.input}
        value={password}
        placeholder="Type your password"
        onChangeText={setPassword}
        secureTextEntry
      />

      <Button title="Continue" />
    </View>
  );
};

export default SignUpForm;

const styles = StyleSheet.create({
  wrapper: {
    alignItems: 'center',
  },
  label: {
    alignSelf: 'flex-start',
    fontWeight: '500',
    marginTop: 16,
  },
  input: {
    width: '100%',
    borderWidth: 1,
    borderRadius: 8,
    padding: 12,
    marginTop: 8,
  },
});
