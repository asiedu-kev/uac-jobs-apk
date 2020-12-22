import React from 'react';
import Colors from '../../constants/Colors';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Ionicons } from '@expo/vector-icons';
import { TextInput, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

// @ts-ignore
function SearchBar({ value, onChange, onSubmit, onClear, placeholder = 'Rechercher' }) {
  const navigation = useNavigation();

  return (
    <View
      style={{
        flexDirection: 'row',
          borderRadius: 18,
        justifyContent: 'space-between',
        alignItems: 'center',
        borderColor: Colors.grey,
        borderWidth: 2,
        backgroundColor: 'white',
          marginVertical: '5%',
          marginHorizontal: '10%'
      }}
    >
      <View style={{ flex: 1 }}>
        <TextInput
          style={{ fontFamily: 'font-bold', fontSize: 16, padding: 8 }}
          placeholder={placeholder}
          returnKeyType="done"
          autoFocus={true}
          value={value}
          onChangeText={onChange}
          onSubmitEditing={onSubmit}
        />
      </View>
      <TouchableOpacity
        onPress={onClear}
        style={{ width: 32, height: 32, justifyContent: 'center', alignItems: 'center' }}
      >
        <Ionicons name={'md-close-circle'} size={18} />
      </TouchableOpacity>
    </View>
  );
}

export default SearchBar;
