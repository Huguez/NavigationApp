import React from 'react'
import { Text, View } from 'react-native'
import { globalStyles } from '../../theme';
import { Button } from '../../components';
import { type  NavigationProp, StackActions, useNavigation } from '@react-navigation/native';
import { type  RootStackParam } from '../../routes';

const SettingsScreen = () => {
   
   const navigation = useNavigation<NavigationProp<RootStackParam>>()

   return (
      <View style={ globalStyles.container }>
         <Text > Settings Screen </Text>
         <Button 
            type='primary'
            onClick={ () => navigation.canGoBack() && navigation.goBack() }
            label={ "go Back" }
         />

         <Button 
            type='primary'
            onClick={ () => navigation.dispatch( StackActions.popToTop() )}
            label={ "go Home" }
         />

      </View>
   )
}

export default SettingsScreen;