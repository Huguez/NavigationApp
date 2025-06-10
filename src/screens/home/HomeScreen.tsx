import { View } from "react-native"
import { globalStyles } from "../../theme";
import { type NavigationProp, useNavigation } from "@react-navigation/native";
import { Button } from "../../components";
import { type RootStackParam } from "../../routes";

const HomeScreen = () => {

   const navigation = useNavigation<NavigationProp<RootStackParam>>()

   return (
      <View style={ globalStyles.container }>

         <Button 
            type={'primary'} 
            onClick={ () => navigation.navigate( 'Products' )  } 
            label={ "Products" } 
         />

         <Button 
            type={'primary'} 
            onClick={ () => navigation.navigate( "Settings" )  } 
            label={ "Settings" } 
         />

      </View>
   )
}

export default HomeScreen;