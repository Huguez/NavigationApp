import { createStackNavigator } from "@react-navigation/stack"
import { HomeScreen, ProductsScreen, SettingsScreen } from "../screens"

const Stack = createStackNavigator()

export const StackNavigator = () => {
   return (
      <Stack.Navigator initialRouteName="Home">
         <Stack.Screen name="Home" component={ HomeScreen } />
         <Stack.Screen name="Products" component={ ProductsScreen } />
         <Stack.Screen name="Settings" component={ SettingsScreen } />
      </Stack.Navigator>
   )
}
