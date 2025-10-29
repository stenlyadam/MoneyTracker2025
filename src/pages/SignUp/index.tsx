import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import BackButton from '../../assets/Backbutton.svg'; // Arrow back dari Figma
import TextInput from '../../components/molecules/TextInput';
import Button from '../../components/atoms/Button';
import Gap from '../../components/atoms/Gap';

const SignUp = ({navigation}) => {
  return (
    <View style={styles.container}>
      {/* HEADER */}
      <View style={styles.header}>
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={() => navigation.goBack()}>
          <BackButton width={26} height={26} />
        </TouchableOpacity>
        <Text style={styles.headerText}>Sign Up</Text>
      </View>
      <Gap height={40} />

      {/* AVATAR */}
      <View style={styles.avatarWrapper}>
        <Image
          source={require('../../assets/null-photo-1.png')}
          style={styles.avatar}
        />
      </View>
      <Gap height={40} />

      {/* FORM */}
      <View style={styles.contentWrapper}>
        <TextInput label="Full Name" placeholder="Type your full name" />
        <Gap height={16} />
        <TextInput
          label="Email Address"
          placeholder="Type your email address"
        />
        <Gap height={16} />
        <TextInput
          label="Password"
          placeholder="Type your password"
          secureTextEntry
        />
        <Gap height={24} />
        <Button label="Continue" />
      </View>
    </View>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: '#FFFFFF'},

  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 24,
    paddingVertical: 30,
  },

  headerText: {
    fontFamily: 'Poppins-Medium',
    fontSize: 22,
    marginLeft: 12,
  },

  avatarWrapper: {
    alignItems: 'center',
    marginTop: -10,
    marginBottom: 30,
  },

  avatar: {
    width: 90,
    height: 90,
    borderRadius: 55,
    borderWidth: 1.5,
    borderColor: '#CFCFCF',
  },

  contentWrapper: {
    flex: 1,
    paddingHorizontal: 24,
  },
});
