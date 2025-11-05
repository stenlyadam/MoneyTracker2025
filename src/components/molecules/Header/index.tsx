import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import BackButton from '../../../assets/Backbutton.svg';

interface HeaderProps {
  title: string;
  onBack: () => void;
}

const Header: React.FC<HeaderProps> = ({title, onBack}) => {
  return (
    <View style={styles.header}>
      <TouchableOpacity activeOpacity={0.7} onPress={onBack}>
        <BackButton width={24} height={24} />
      </TouchableOpacity>
      <Text style={styles.headerText}>{title}</Text>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
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
});
