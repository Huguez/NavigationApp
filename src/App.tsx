import 'react-native-reanimated';
import 'react-native-gesture-handler';
import { NavigationContainer } from "@react-navigation/native"
import { enableScreens } from 'react-native-screens';
import { SideNavigator } from './routes';

enableScreens();


function App(): React.JSX.Element {

  return (
    <NavigationContainer >
      <SideNavigator />
    </NavigationContainer>
  );
}


export default App;
