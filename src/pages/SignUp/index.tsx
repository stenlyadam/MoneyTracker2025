import {StyleSheet, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import Header from '../../components/molecules/Header';
import Gap from '../../components/atoms/Gap';

// === Irmando: Header dan Foto Profil === //
const SignUp = () => {
  const handleProfilePress = () => {
    console.log('Profile image pressed');
  };

  return (
    <View style={styles.container}>
      <Header label="Sign Up" />
      <View style={styles.contentWrapper}>

        <TouchableOpacity
          style={styles.avatarWrapper}
          onPress={handleProfilePress}>
          <Image
            source={require('../../assets/ava.png')}
            style={styles.avatar}
          />
        </TouchableOpacity>

        <Gap height={24} />

        {/* === Julio: Form Input === */}


        <Gap height={24} />

        {/* === Swindry: Buttons === */}


      </View>
    </View>
  );
};

export default SignUp;

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

  avatarWrapper: {
    alignSelf: 'center',
    borderWidth: 1,
    borderColor: '#8D92A3',
    width: 110,
    height: 110,
    borderRadius: 55,
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
    backgroundColor: '#F0F0F0',
  },
  avatar: {
    width: 100,
    height: 100,
    resizeMode: 'cover',
  },


});