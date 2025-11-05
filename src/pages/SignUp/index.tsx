import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import BackButton from '../../assets/Backbutton.svg';

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

      {/* AVATAR */}
      <View style={styles.avatarWrapper}>
        <Image
          source={require('../../assets/null-photo-1.png')}
          style={styles.avatar}
        />
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
    marginTop: 40, // bisa kamu atur naik/turun sesuai selera
  },

  avatar: {
    width: 110,
    height: 110,
    borderRadius: 55,
    borderWidth: 1.5,
    borderColor: '#CFCFCF',
  },
});
