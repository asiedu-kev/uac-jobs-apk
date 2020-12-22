import React, { useState, FunctionComponent } from 'react';
import { StyleSheet, View, TouchableOpacity, Image, Alert } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';
import * as FileSystem from 'expo-file-system';

import DefaultTextBold from '../ui/DefaultTextBold';
import DefaultText from '../ui/DefaultText';
import Colors from '../../constants/Colors';

interface IImgPicker {
  label: string;
  onImagePicked: (imgPath: string) => void;
  viewOnly?: boolean;
}

const ImgPicker = ({ label, onImagePicked, viewOnly }: IImgPicker) => {
  const [pickedImage, setPickedImage] = useState(null);

  const verifyGalleryPermissions = async () => {
    const perms = await ImagePicker.getCameraRollPermissionsAsync();
    return perms.granted;
  };

  const pickImageFromGallery = async () => {
    try {
      const results = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: false,
        quality: 1,
        base64: false,
        exif: false,
      });

      if (results.cancelled === false) {
        const fileName = results.uri.split('/').pop();
        const newPath = FileSystem.documentDirectory + fileName;

        try {
          await FileSystem.moveAsync({
            from: results.uri,
            to: newPath,
          });

          setPickedImage(newPath);
          onImagePicked(newPath);
        } catch (error) {
          Alert.alert(error);
        }
      }
    } catch (error) {
      console.warn(error);
    }
  };

  const imagePicker = async () => {
    let permissions: any;
    const hasPermissions = await verifyGalleryPermissions();

    if (!hasPermissions) {
      permissions = await ImagePicker.requestCameraRollPermissionsAsync();
      if (permissions.granted) {
        await pickImageFromGallery();
      } else if (!permissions.granted && permissions.canAskAgain) {
        Alert.alert(
          'Cette permission est requise!',
          'Nous devons accéder à votre galerie pour vous permettre de sélectioner votre image',
          [
            { text: 'Annuler', style: 'destructive' },
            {
              text: 'Autoriser',
              style: 'default',
              onPress: () => imagePicker(),
            },
          ]
        );
      } else {
        Alert.alert(
          'Permission non accordé',
          "Veuillez accorder les autorisations d'accès à votre galerie dans les paramètres de l'application",
          [{ text: 'Okay' }]
        );
      }
    } else {
      await pickImageFromGallery();
    }
  };

  let borderColor: Colors;
  if (viewOnly) {
    borderColor = Colors.formViewOnly;
  } else {
    borderColor = Colors.primary;
  }

  return (
    <View style={styles.container}>
      <DefaultTextBold style={styles.label}>{label}</DefaultTextBold>
      {!pickedImage ? (
        <TouchableOpacity onPress={imagePicker} activeOpacity={0.6}>
          <View style={{ ...styles.imgPrompt, borderColor }}>
            <Ionicons name="md-add" size={40} color="white" />
            <DefaultText style={styles.text}>Ajouter une image</DefaultText>
          </View>
        </TouchableOpacity>
      ) : (
        <View style={{ ...styles.imgPrompt, borderColor }}>
          <Image style={styles.imgPreview} source={{ uri: pickedImage }} />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
  },
  imgPrompt: {
    height: 200,
    borderRadius: 10,
    borderWidth: 1.5,
    overflow: 'hidden',
    backgroundColor: '#DDDDDD',
    alignItems: 'center',
    justifyContent: 'center',
  },
  imgPreview: {
    height: 200,
    width: '100%',
  },
  text: {
    color: 'white',
    fontSize: 15,
  },
  label: {
    fontSize: 15,
    marginBottom: 5,
    color: Colors.primary,
  },
});

export default ImgPicker;
