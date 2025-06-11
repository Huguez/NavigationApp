import { ReactNode } from "react";
import { useWindowDimensions, View } from "react-native";
import { createDrawerNavigator, DrawerContentComponentProps, DrawerContentScrollView, DrawerItemList } from "@react-navigation/drawer"
import { ProfileScreen, } from "../screens";
import { StackNavigator, TabNavigation } from "../routes";
import { RootSideParam, type SettingsSideNavigation } from "../types";
import { globalColor } from "../theme";


const Drawer = createDrawerNavigator<RootSideParam>();

export const SideNavigator = () => {
   
   const dimensions = useWindowDimensions()

   const settings: SettingsSideNavigation = {
      headerShown: false,
      drawerType: dimensions.width >= 750 ? 'permanent' : 'front',
      drawerActiveBackgroundColor: globalColor.primary,
      drawerActiveTintColor: "#fff",
      drawerInactiveTintColor: globalColor.primary,
      drawerStyle: {
         paddingHorizontal: 10,
      }
   }

   return (
      <Drawer.Navigator screenOptions={ settings } drawerContent={ drawerContent }>
         <Drawer.Screen name="StackNavigator" component={StackNavigator} />
         <Drawer.Screen name="Tabs" component={ TabNavigation } />
         <Drawer.Screen name="Profile" component={ ProfileScreen }  />
      </Drawer.Navigator>
   )
}


const drawerContent = (props: DrawerContentComponentProps): ReactNode => {

   return <DrawerContentScrollView>
      <View style={{
         height: 200,
         backgroundColor: globalColor.primary,
         marginVertical: 5,
         borderRadius: 50,
      }}>
      </View>

      <DrawerItemList {...props} />
      
   </DrawerContentScrollView>
}