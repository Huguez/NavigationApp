import { createStackNavigator } from "@react-navigation/stack"
import { HomeScreen, ProductScreen, ProductsScreen, SettingsScreen } from "../screens"
import { type RootStackParam, type SettingsNavigation } from "../types";

const Stack = createStackNavigator<RootStackParam>()

export const StackNavigator = () => {

   const settings: SettingsNavigation = {
      headerShown: true,
      headerStyle: {
         elevation: 0,
         shadowColor: 'transparent'
      }
   }

   return (
      <Stack.Navigator screenOptions={settings} initialRouteName="Home">
         <Stack.Screen name="Home" component={ HomeScreen } />
         <Stack.Screen name="Products" component={ ProductsScreen } />
         <Stack.Screen name="Product" component={ ProductScreen } />
         <Stack.Screen name="Settings" component={ SettingsScreen } />
      </Stack.Navigator>
   )
}
