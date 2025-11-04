// src/pages/SignUp/index.tsx
import React, {useState} from 'react';
import {StyleSheet, View, ScrollView} from 'react-native';
import Header from '../../components/molecules/Header';
import Avatar from '../../components/molecules/Avatar';
import TextInput from '../../components/molecules/TextInput';
import Button from '../../components/atoms/Button';
import Gap from '../../components/atoms/Gap';

type NavigationProp = {
  goBack: () => void;
  navigate?: (screen: string, params?: any) => void;
};

interface Props {
  navigation: NavigationProp;
}

const SignUp: React.FC<Props> = ({navigation}) => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleContinue = () => {
    console.log('Full Name:', fullName);
    console.log('Email:', email);
    console.log('Password:', password);

    // contoh navigasi ke SignIn (aktifkan kalau ada halaman SignIn)
    // navigation.navigate && navigation.navigate('SignIn');
  };

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      contentContainerStyle={styles.scrollContainer}>
      <View style={styles.container}>
        <Header title="Sign Up" onBack={() => navigation.goBack()} />
        <Avatar source={require('../../assets/null-photo-1.png')} />

        <Gap height={40} />

        <View style={styles.form}>
          <TextInput
            label="Full Name"
            placeholder="Type your full name"
            value={fullName}
            onChangeText={setFullName}
          />

          <TextInput
            label="Email Address"
            placeholder="Type your email address"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
          />

          <TextInput
            label="Password"
            placeholder="Type your password"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
          />
        </View>

        <Gap height={20} />

        <Button title="Continue" onPress={handleContinue} />
      </View>
    </ScrollView>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  scrollContainer: {flexGrow: 1},
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 24,
    paddingTop: 10,
    paddingBottom: 30,
  },
  form: {marginTop: 10},
});
