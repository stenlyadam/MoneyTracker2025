import React from 'react';
import {View} from 'react-native';

interface Props {
  height?: number;
  width?: number;
}

const Gap: React.FC<Props> = ({height, width}) => {
  return <View style={{height, width}} />;
};

export default Gap;
