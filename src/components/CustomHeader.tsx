import { DrawerActions, useNavigation } from "@react-navigation/native";
import { Pressable, StyleSheet, Text, View } from "react-native";
import Icon from '@react-native-vector-icons/material-icons';
import { globalColor } from "../theme";

export function CustomHeader({ title }: { title: string }) {
   
   const navigation = useNavigation()

   return (
      <View style={styles.container}>
         <Pressable 
            style={ styles.btn }
            onPress={ () => navigation.dispatch( DrawerActions.toggleDrawer ) }>
            <Icon name="menu" color={ globalColor.primary } size={ 35 } />
         </Pressable>
         
         <Text style={styles.title}>{title}</Text>

         <View style={ { width: "7%" } } />
      </View>
   );
}

const styles = StyleSheet.create({
   container: {      
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      height: 100,
   },
   title: {
      alignSelf: 'flex-end',
      fontSize: 25,
      fontWeight: 'bold',
   },
   btn:{
      alignSelf: 'flex-end',
   },
});
