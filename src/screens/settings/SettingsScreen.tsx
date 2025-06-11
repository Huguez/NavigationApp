import React from 'react'
import { Text, View } from 'react-native'
import { globalStyles } from '../../theme';
import { Button } from '../../components';
import { type  NavigationProp, StackActions, useNavigation } from '@react-navigation/native';
import { RootStackParam } from '../../types';


const SettingsScreen = () => {
   
   const navigation = useNavigation<NavigationProp<RootStackParam>>()

   return (
      <View style={ globalStyles.container }>
         
         <Button 
            type='primary'
            onClick={ () => navigation.canGoBack() && navigation.goBack() }
            label={ "go Back" }
         />

         <View style={ { marginVertical: 10 } } />

         <Button 
            type='primary'
            onClick={ () => navigation.dispatch( StackActions.popToTop() )}
            label={ "go Home" }
         />

      </View>
   )
}

export default SettingsScreen;