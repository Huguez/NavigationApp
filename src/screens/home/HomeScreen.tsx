import { Pressable, Text, useWindowDimensions, View } from "react-native"
import { useEffect } from "react";
import { globalStyles } from "../../theme";
import { DrawerActions, type NavigationProp, useNavigation } from "@react-navigation/native";
import { type RootStackParam } from "../../types";
import { Button } from "../../components";

const HomeScreen = () => {

   const dimensions = useWindowDimensions()
   const navigation = useNavigation<NavigationProp<RootStackParam>>()

   useEffect( () => {
      const menu = dimensions.width <= 750 ? {
         headerLeft : () =>  <>
            <Pressable onPress={ () => navigation.dispatch( DrawerActions.toggleDrawer ) }>
               <Text> Menu </Text>
            </Pressable>
         </>
      } :  { headerLeft: () => null }

      navigation.setOptions( menu )

   }, [ dimensions.width ] )

   return (
      <View style={ globalStyles.container }>

         <Button 
            type={'primary'} 
            onClick={ () => navigation.navigate( 'Products' )  } 
            label={ "Products" } 
         />

      </View>
   )
}

export default HomeScreen;