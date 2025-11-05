import React from 'react';
import {View, Image, StyleSheet} from 'react-native';

const ProfilePhoto: React.FC = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require('../../../assets/avatar.png')}
        style={styles.image}
      />
    </View>
  );
};

export default ProfilePhoto;

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderStyle: 'dashed',
    borderColor: '#ccc',
    borderRadius: 60,
    padding: 4,
    marginBottom: 24,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
});
