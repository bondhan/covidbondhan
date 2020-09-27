import React from 'react';
import {View, Text, Button} from 'react-native';

export default function Dashboard({navigation}) {
  return (
    <View>
      <Button
        title="Details"
        onPress={() => navigation.navigate('Dashboard Details')}
      />
    </View>
  );
}
