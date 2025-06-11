import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { Tab1Screen, Tab2Screen } from "../screens"
import { RootTabParam } from "../types"
import { settingsTabNavigation } from "../types/navigationTypes"
import { globalColor } from "../theme"
import { MaterialTopTabNavigation } from "."
import { CustomHeader } from "../components"
import Icon from "@react-native-vector-icons/material-icons"

const Tab = createBottomTabNavigator<RootTabParam>()

export const TabNavigation = () => {

   const settings: settingsTabNavigation = {
      headerShown: true,
      sceneStyle: {
         backgroundColor: globalColor.background,
      },
      headerStyle: {
         elevation: 0,
      },
      tabBarLabelStyle: {
         marginBottom: 5,
         color: globalColor.primary,
      },
      tabBarStyle: {
         elevation: 0,
         borderWidth: 0,
         borderColor: 'transparent'
         
         
      }
   }
   
   return (
      <Tab.Navigator screenOptions={ settings }>
         <Tab.Screen 
            name="Tab1" 
            options={{ tabBarIcon: () => ( <Icon name={'lunch-dining'} color={ globalColor.primary } size={ 25 } /> ),  title: "thing 1" }} 
            component={ Tab1Screen } 
         />
         <Tab.Screen 
            name="Tab2" 
            options={{ tabBarIcon: () => ( <Icon name={ 'motorcycle' } color={ globalColor.primary } size={ 25 } /> ),  title: "thing 2" }} 
            component={ Tab2Screen } 
         />
         <Tab.Screen 
            name="MaterialTopTabs" 
            options={{ 
               tabBarIcon: () => ( <Icon name={ 'wysiwyg' } color={ globalColor.primary } size={ 25 } /> ),
               header: () => <CustomHeader title="MaterialTopTabs" />
             }} 
            component={ MaterialTopTabNavigation } 
         />
      </Tab.Navigator>
   )
}