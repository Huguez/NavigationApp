import { DrawerActions, useNavigation } from "@react-navigation/native"
import { useEffect } from "react"
import { Pressable } from "react-native"
import Icon from '@react-native-vector-icons/material-icons';
import { globalColor } from "../theme";

export const BurgerButton = () => {
   const navigation = useNavigation()

   useEffect( () => {
      navigation.setOptions( {
         headerLeft: () => (
            <Pressable onPress={ () => navigation.dispatch( DrawerActions.toggleDrawer ) }>
               <Icon name="menu" color={ globalColor.primary } size={ 35 } />
            </Pressable>
         )
      } )
   }, [] )

   return (<></>)
   
}
