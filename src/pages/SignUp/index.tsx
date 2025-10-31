import React from 'react';
import {StyleSheet, Text, View, ScrollView} from 'react-native';
import TextInput from '../../components/molecules/TextInput';
import Button from '../../components/atoms/Button';
import Arrowback from '../../assets/arrowback.svg';
import Nullphoto from '../../assets/nullphoto.svg';
import Gap from '../../components/atoms/Gap';

const SignUp = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>

      <View style={styles.header}>
        <View style={styles.backButton}>
          <Arrowback width={24} height={24} />
        </View>
        <Text style={styles.title}>Sign Up</Text>
      </View>
      
      <Gap height={1} />

      <View style={styles.photoContainer}>
        <Nullphoto width={90} height={90} />
      </View>

      <Gap height={1} />

      <View style={styles.form}>
        <TextInput label="Full Name" placeholder="Type your full name" />
        <Gap height={16} />

        <TextInput
          label="Email Address"
          placeholder="Type your email address"
          keyboardType="email-address"
// Lio/password_buttoncontinue
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

        />
        <Gap height={16} />
 development
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
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
    marginTop: -10,
  },
  photoContainer: {
    alignItems: 'center',
    marginTop: 30,
  },
  title: {
    fontFamily: 'Poppins-Medium',
    fontSize: 22,
    color: '#020202',
    marginBottom: 15,
    marginTop: 12,
    marginLeft: 10,
  },
  backButton: {
    padding: 8,
  },
  form: {
    marginTop: 35,
  },
  photoContainer: {
  alignItems: 'center',
  justifyContent: 'center',
  width: 110,
  height: 110,
  borderRadius: 55,
  borderWidth: 1.5,
  borderColor: '#C4C4C4',
  borderStyle: 'dashed',
  alignSelf: 'center',
  marginBottom: 16,
},
});