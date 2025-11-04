import {StyleSheet, View, Image} from 'react-native';
import React from 'react';

interface AvatarProps {
  source: any;
}

const Avatar: React.FC<AvatarProps> = ({source}) => {
  return (
    <View style={styles.avatarWrapper}>
      <Image source={source} style={styles.avatar} />
    </View>
  );
};

export default Avatar;

const styles = StyleSheet.create({
  avatarWrapper: {
    alignItems: 'center',
    marginTop: 40,
  },
  avatar: {
    width: 110,
    height: 110,
    borderRadius: 55,
    borderWidth: 1.5,
    borderColor: '#CFCFCF',
  },
});
