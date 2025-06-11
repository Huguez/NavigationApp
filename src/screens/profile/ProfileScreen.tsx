
import { Text, View } from "react-native"
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Button } from "../../components";
import { DrawerActions, useNavigation } from "@react-navigation/native";
import { globalStyles } from "../../theme";


const ProfileScreen = () => {

   const { top, bottom } = useSafeAreaInsets()
   const navigation = useNavigation()
   
   
   return (
      <View style={ [ globalStyles.container, { 
         marginTop: top,
         marginBottom: bottom,
         flex: 1,
      }] }>

         <Text style={{ 
            textAlign: 'center', 
            fontSize: 30, 
            fontWeight: '600', 
            marginTop: 5,
            marginBottom: 25,
         }}> 
            ProfileScreen
         </Text>

         <Button
            type={'primary'}
            label="Menu"
            onClick={ () => navigation.dispatch( DrawerActions.toggleDrawer ) }
         />
      </View>
   )
}

export default ProfileScreen;