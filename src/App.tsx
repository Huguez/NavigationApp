import 'react-native-reanimated';
import 'react-native-gesture-handler';
import { NavigationContainer } from "@react-navigation/native"
import { enableScreens } from 'react-native-screens';
// import { StackNavigator } from './routes';
import { SideNavigator } from './routes/SideNavigator';


enableScreens();

function App(): React.JSX.Element {

  return (
    <NavigationContainer>
      <SideNavigator />
    </NavigationContainer>
  );
}


export default App;
