import React from 'react';
import {View, Text, Alert} from 'react-native';

const ModalAlert = () => {
  return (
    <>
      {Alert.alert(
        'Hey',
        'Not here to steal Privacy, Just Chekcing if update worked',
        [{text: 'OK', onPress: () => console.log('OK Pressed')}],
        {cancelable: false},
      )}
    </>
  );
};

export default ModalAlert;
