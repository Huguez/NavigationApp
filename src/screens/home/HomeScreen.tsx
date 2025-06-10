import { Pressable, Text, View } from "react-native"
import { globalStyles } from "../../theme";
import { useNavigation } from "@react-navigation/native";
import { Button } from "../../components";

const HomeScreen = () => {

   const navigation = useNavigation()


   return (
      <View style={ globalStyles.container }>

         <Button 
            type={'primary'} 
            onClick={ () => navigation.navigate( "Products" as never)  } 
            label={ "Products" } 
         />

         <Button 
            type={'primary'} 
            onClick={ () => navigation.navigate( "Settings" as never)  } 
            label={ "Settings" } 
         />

      </View>
   )
}

export default HomeScreen;