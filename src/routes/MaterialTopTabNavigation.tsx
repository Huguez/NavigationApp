import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs"
import { AboutScreen, Tab3Screen } from "../screens"
import { globalColor } from "../theme"
import { settingsMaterialTopTabNavigation } from "../types"

const TopTabs = createMaterialTopTabNavigator()

export const MaterialTopTabNavigation = () => {

   const settings: settingsMaterialTopTabNavigation = {
         sceneStyle: {
            backgroundColor: globalColor.background,
         },
         tabBarLabelStyle: {
            marginBottom: 10,
            fontSize: 25,
         },
         tabBarIndicatorStyle: {
            backgroundColor: globalColor.primary,
         },
         tabBarItemStyle: {},
         tabBarStyle: {
            elevation: 0,
            borderWidth: 0,
         }
   }

   return (
      <TopTabs.Navigator screenOptions={settings}>
         <TopTabs.Screen name="Thing 3" component={ Tab3Screen} />
         <TopTabs.Screen name="About" component={ AboutScreen } />
      </TopTabs.Navigator>
   )
}
